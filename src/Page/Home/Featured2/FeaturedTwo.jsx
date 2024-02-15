import SectionTilte from "../../Shared/sectionTitle/SectionTilte";
import img from '../../../assets/home/featured.jpg'
import '../Featured/Featured.css'

const FeaturedTwo = () => {
    return (
        <div className="featured-item-two bg-fixed pb-10 md:pb-20 pt-6 md:pt-10">
            <SectionTilte
                subHeading={"Check it out"}
                heading={'Featured Item'}
                className="py-3 md:py-5"
            >

            </SectionTilte>
            <div className="md:flex flex-col md:flex-row rounded-lg justify-center items-center bg-slate-700 mx-4 md:mx-14 opacity-70">
                <div className="md:mr-0 mb-4 md:mb-0 md:pr-6">
                    <img className="w-full md:w-auto"  src={img} alt="" />
                </div>
                <div className="md:ml-10 mx-2 py-3 text-white uppercase space-y-2">
                    <p className="text-2xl font-medium">March 20, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 uppercase text-white  py-2 md:py-4 border-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTwo;