import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import { Helmet } from "react-helmet-async";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
const OrderFood = () => {
  const [foodTab, setFoodTab] = useState(0);
  const [menu] = useMenu();

  //const salad = menu.map(item => item.category === 'salads')
  //const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        {" "}
        <title>TOH | order </title>
      </Helmet>
      <Cover img={orderCoverImg} title={"order food"} />
      <Tabs defaultIndex={foodTab} onSelect={(index) => setFoodTab(index)}>
        <TabList>
          <div className="text-blue-500">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </div>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}/>
        </TabPanel>
        <TabPanel> 
          <OrderTab items={pizza} />
          </TabPanel>
        <TabPanel>
          <OrderTab items={soup}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
