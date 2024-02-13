import { loadStripe } from "@stripe/stripe-js";
import SectionTilte from "../../Shared/sectionTitle/SectionTilte";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div>
            <SectionTilte subHeading="Please First Payment!" heading="Payment"></SectionTilte>

            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;