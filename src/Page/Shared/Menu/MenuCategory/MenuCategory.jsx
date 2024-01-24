import MenuItem from "../../../Home/PopularMenu/MenuItem/MenuItem";


const MenuCategory = ({items}) => {
    
    return (
        <div className="grid grid-cols-2 my-16  gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id} item={item}
                    ></MenuItem>)
                }
            </div>
    );
};

export default MenuCategory;