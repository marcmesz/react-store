import './Cart.scss';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const fixedTotal = useSelector(state => state.cart.totalAmount.toFixed(2))
    const numberOfItems = items.length > 0 ? items.length > 1 ? "- " + items.length + " items added" : "- " + items.length + " item added" : ""
    
    const removeLastDigit = total => {
        return total.split(".")[1][1] === "0" ? total.slice(0,-1) : total
    }

    const total = removeLastDigit(fixedTotal)
    
    return (
        <div className="cart container">
            <h2 className="cart-title">Cart {numberOfItems}</h2>
            <table className="cart-items-table">
                <thead>
                    <tr><th width="10%">ID</th><th width="70%">Title</th><th width="10%">Amount</th><th width="10%">Price</th></tr>
                </thead>
                <tbody>
                    {items.length > 0 ? items.map((item, index) => {
                        return (
                            <CartItem item={item} key={index} />
                        )
                    }) : <tr><td className="no-items" colSpan="4">No items added to cart.</td></tr>}
                </tbody>
            </table>
            {total > 0 && <div className="total-price">Total price: ${total}</div>}
        </div>
    )
}

export default Cart