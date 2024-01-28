import { Helmet } from "react-helmet-async";
import useMenu from "../../../Hooks/Hooks";
import SectionTilte from "../sectionTitle/SectionTilte";
import MenuCategory from "./MenuCategory/MenuCategory";
import Cover from "../Cover/Cover";
import imgCover from "../../../assets/menu/banner3.jpg"
import imgSalad from "../../../assets/menu/salad-bg.jpg"
import imgPizza from "../../../assets/menu/pizza-bg.jpg"
import imgSoup from "../../../assets/menu/soup-bg.jpg"
import imgDessert from "../../../assets/menu/dessert-bg.jpeg"



const Menu = () => {
    const [menu] =useMenu();
    const salad = menu.filter(item =>item.category === "salad")
    const pizza = menu.filter(item =>item.category === "pizza")
    const soup = menu.filter(item =>item.category === "soup")
    const dessert = menu.filter(item =>item.category === "dessert")
    const offered = menu.filter(item =>item.category === "offered")
    return (
        <div>
            <Helmet>
                <title className='uppercase'>Our Menu</title>
            </Helmet>
           <Cover img={imgCover } title='OUR MENU' subtitle='Would you like to try a dish?'></Cover>
           <SectionTilte subHeading={"Don't Miss"} heading={"TODAY'S OFFER"}></SectionTilte>
           <MenuCategory items={offered}></MenuCategory>
           {/* salad */}
            <Cover img={imgSalad} title={'SALADS'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={salad}></MenuCategory>

            {/* pizza */}
            <Cover img={imgPizza} title={'Pizza'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={pizza}></MenuCategory>

            {/* soup */}
            <Cover img={imgSoup} title={'Soup'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={soup}></MenuCategory>
            {/* dessert */}
            <Cover img={imgDessert} title={'Dessert'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={dessert}></MenuCategory>
        </div>
    );
};

export default Menu;