import './CartIcon.scss';
import { ImCart } from 'react-icons/im';
import { useSelector } from 'react-redux'

const CartIcon = () => {
    const items = useSelector(state => state.cart.items.length)
    return (
        <div className="cart-icon-holder">
            { items > 0 && <div className="item-count">{items}</div>}
            <ImCart className="cart" />
        </div>
    )
}

export default CartIcon