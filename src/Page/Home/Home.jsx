import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import FeaturedTwo from "./Featured2/FeaturedTwo";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <FeaturedTwo></FeaturedTwo>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;