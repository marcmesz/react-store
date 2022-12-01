import './CartIcon.scss';
import { ImCart } from 'react-icons/im';

const CartIcon = () => {
    return (
        <>
            <div className="item-count">2</div>
            <ImCart className="cart" />
        </>
    )
}

export default CartIcon