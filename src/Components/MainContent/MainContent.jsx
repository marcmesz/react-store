import './MainContent.scss';
import ItemGrid from '../ItemGrid/ItemGrid';
import useFetch from '../../Hooks/useFetch';

const MainContent = props => {
    let url = "https://fakestoreapi.com/products"
    if(props.category !== "all"){
        url = `${url}/category/${props.category}`
    }
    const { data, loading, error } = useFetch(url)
    const loadingItems = loading && <h2 className="loading">Loading...</h2>
    const errorMessage = (!data && error) && <h2 className="error">{error.message || 'Something went wrong!'}</h2>

    return(
        <div className="main-content">
            {loadingItems ? loadingItems : <ItemGrid items={data}/>}
            {errorMessage}
        </div>
    )
}

export default MainContent