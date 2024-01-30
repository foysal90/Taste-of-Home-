import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img,subTitle}) => {
    return (
        <div>
              { title &&  <Cover img={img} title={title} subTitle={subTitle} />}
              <div className="grid md: grid-cols-2 gap-10 m-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
              </div>
        </div>
    );
};

export default MenuCategory;