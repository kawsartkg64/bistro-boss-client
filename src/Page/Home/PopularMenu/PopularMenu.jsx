import { useEffect, useState } from "react";
import SectionTilte from "../../Shared/sectionTitle/SectionTilte";
import MenuItem from "./MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(item => item.category === 'popular')
                setMenu(PopularItems)
            })
    }, [])

    return (
        <div>
            <SectionTilte
                subHeading={'Check it out'}
                heading={'Popular OUR MENU'}
            >

            </SectionTilte>
            <div className="grid grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id} item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='my-10 text-center'>
                <button className='btn btn-outline border-0 border-b-4'>View full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;