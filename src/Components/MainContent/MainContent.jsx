import './MainContent.scss';
import ItemGrid from '../ItemGrid/ItemGrid';
import useFetch from '../../Hooks/useFetch';

const MainContent = () => {
    const { data, loading, error } = useFetch('https://fakestoreapi.com/products')
    const loadingItems = loading && <h2 className="loading">Loading...</h2>
    const errorMessage = (!data && error) && <h2 className="error">{error.message || 'Something went wrong!'}</h2>
  
    return(
        <>
            {loadingItems}
            {errorMessage}
            <ItemGrid items={data}/>
        </>
    )
}

export default MainContent