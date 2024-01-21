import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
          <Featured></Featured>
          <PopularMenu></PopularMenu>
          <CallUs></CallUs>
        </div>
    );
};

export default Home;