import './SideBar.scss';
import useFetch from '../../Hooks/useFetch';
import Categories from '../Categories/Categories';

const SideBar = () => {
    const { data } = useFetch('https://fakestoreapi.com/products/categories')
    console.log(data)  
    
    return (
        <div className="sidebar">
            <h3 className="sidebar__title">Categories</h3>
            <div className="sidebar__categories">
                {data.map((item, index) => <Categories data={item} key={index}/>)}
            </div>
        </div>
    )
}

export default SideBar