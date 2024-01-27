import  { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
        console.log(menu)
    },[])
    return (
        <section>
            <SectionTitle subHeading={'Popular Items'} heading={'from our menu'}/>
        </section>
    );
};

export default PopularMenu;