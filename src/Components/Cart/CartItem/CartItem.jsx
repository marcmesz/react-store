import './CartItem.scss';

const CartItem = props => {
    return(
        <tr className="cart-item">
            <td className="cart-item__id">{props.item.id}</td>
            <td className="cart-item__title">{props.item.title}</td>
            <td className="cart-item__amount">{props.item.amount}</td>
            <td className="cart-item__price">${props.item.price}</td>
        </tr>
    )
}

export default CartItem