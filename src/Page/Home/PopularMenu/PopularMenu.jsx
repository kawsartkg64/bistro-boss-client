import { useEffect, useState } from "react";
import SectionTilte from "../../Shared/sectionTitle/SectionTilte";
import MenuItem from "./MenuItem/MenuItem";
import useMenu from "../../../Hooks/Hooks";


const PopularMenu = () => {
    const [menu] =useMenu()
    const Popular = menu.filter(item => item.category === 'popular')



    return (
        <div>
            <SectionTilte
                subHeading={'Check it out'}
                heading={'Popular OUR MENU'}
            >

            </SectionTilte>
            <div className="grid grid-cols-1 md:grid-cols-2 gap:6 md:gap-10">
                {
                    Popular.map(item => <MenuItem
                        key={item._id} item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='my:-6 md:my-10 text-center'>
                <button className='btn btn-outline border-0 border-b-4 mb-4'>View full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;