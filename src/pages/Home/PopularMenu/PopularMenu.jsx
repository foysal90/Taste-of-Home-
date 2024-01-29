import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menuItems = data.filter((item) => item.category === "popular");
        setMenu(menuItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle subHeading={"Popular Items"} heading={"from our menu"} />
      <div className="grid md:grid-cols-2 gap-5 my-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="w-48 mx-auto my-10">
      <button className="btn btn-outline border-0 border-b-4 ">
        View Full Menu
      </button>
      </div>
    </section>
  );
};

export default PopularMenu;
