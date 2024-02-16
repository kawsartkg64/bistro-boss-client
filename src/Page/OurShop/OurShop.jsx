import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import CardShop from '../OurShop/CardShop'
import shopCover from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../Hooks/Hooks';

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()

    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const soups = menu.filter(item => item.category === "soup")
    const dessert = menu.filter(item => item.category === "dessert")
    const drink = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Helmet>
                <title className='uppercase'>Our Shop</title>
            </Helmet>
            <Cover img={shopCover} title={"OUR SHOP"} subtitle={'Would you like to try a dish?'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="mb-2 overflow-x-scroll uppercase font-medium">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                   <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
                   {
                        salad.map(item => <CardShop key={item._id} item={item}></CardShop>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                   <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
                   {
                        pizza.map(item => <CardShop key={item._id} item={item}></CardShop>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        soups.map(item => <CardShop key={item._id} item={item}></CardShop>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                   <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
                   {
                        dessert.map(item => <CardShop key={item._id} item={item}></CardShop>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                   <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
                   {
                        drink.map(item => <CardShop key={item._id} item={item}></CardShop>)
                    }
                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;