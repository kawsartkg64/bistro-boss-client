import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const CheckOut = () => {
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const { user } = useContext(AuthContext);
    const [transactionId, setTransactionId] = useState('')




    useEffect(() => {
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("Payment Error", error)
            setError(error.message)
        } else {
            console.log("Payment Error", paymentMethod)
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymaus',
                    name: user?.displayName || 'anonymanus'
                }
            }
        })
        if (confirmError) {
            console.log('confirm Error', confirmError)
        } else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    transactionId: paymentIntent.id,
                    cartId: cart.map(item => item._id),
                    menuId: cart.map(item => item.menuId),
                   
                    status:'pending',

                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('payment save', res)
                refetch()
                if(res.data?.paymentResult.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the payment",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}

                />
                <button className='btn btn-sm btn-primary py-3 text-center my-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-2xl'>{error}</p>
                {
                    transactionId && <p className='text-green-600 font-medium'>Your Transaction id:{transactionId}</p>
                }

            </form>
        </div>
    );
};

export default CheckOut;