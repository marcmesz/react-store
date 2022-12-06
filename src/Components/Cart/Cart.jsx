import './Cart.scss';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.totalAmount)
    console.log(items)

    return (
        <div className="cart container">
            <table className="cart-items-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? items.map((item, index) => {
                        return (
                            <CartItem item={item} key={index} />
                        )
                    }) : <tr><td className="no-items" colSpan="4">No items added to cart.</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Cart