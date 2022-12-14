import ItemCard from '../ItemCard/ItemCard'
import './ItemGrid.scss'

const ItemGrid = props => {
    return (
        <div className="item-grid">
            {
                props.items.map(item => <ItemCard item={item} key={item.id} />)
            }
        </div>
    )
}

export default ItemGrid