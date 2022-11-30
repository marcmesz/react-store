import './MainContent.scss';
import ItemGrid from '../ItemGrid/ItemGrid';
import useFetch from '../../Hooks/useFetch';
import Skeleton from '../Skeleton/Skeleton';

const MainContent = props => {
    let url = "https://fakestoreapi.com/products"
    if(props.category !== "all"){
        url = `${url}/category/${props.category}`
    }
    const { data, loading, error } = useFetch(url)
    const loadingItems = loading && <Skeleton/>
    const errorMessage = (!data && error) && <h2 className="error">{error.message || 'Something went wrong!'}</h2>

    return(
        <div className="main-content">
            {loadingItems ? loadingItems : <ItemGrid items={data}/>}
            {errorMessage}
        </div>
    )
}

export default MainContent