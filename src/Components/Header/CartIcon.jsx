import './CartIcon.scss';
import { ImCart } from 'react-icons/im';

const CartIcon = () => {
    return (
        <div className="cart-icon-holder">
            <div className="item-count">2</div>
            <ImCart className="cart" />
        </div>
    )
}

export default CartIcon