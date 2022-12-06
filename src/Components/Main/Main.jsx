import './Main.scss';
import SideBar from '../SideBar/SideBar';
import MainContent from '../MainContent/MainContent';
import useFetch from '../../Hooks/useFetch';
import { useState } from 'react';

const Main = props => {
    const { data } = useFetch('https://fakestoreapi.com/products/categories')
    const [category, setCategory] = useState("all")

    return (
        <div className="main container">
            <SideBar
                categories={data}
                category={category}
                setCategory={setCategory}
                mobile={props.mobile}
                setMobile={props.setMobile}
            />
            <MainContent category={category} />
        </div>
    )
}

export default Main