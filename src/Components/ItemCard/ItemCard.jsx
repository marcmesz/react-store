import './ItemCard.scss';
import Card from '../../UI/Card/Card';
import { Rating } from 'react-simple-star-rating'
import { FaShoppingCart } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';

const ItemCard = props => {
    return (
        <Card className="item-card" title={props.item.title}>
            <div className="item-card__image" style={{ backgroundImage: `url(${props.item.image})` }}></div>
            <div className="item-card__title">{props.item.title}</div>
            <div className="item-card__category">Category: {props.item.category}</div>
            {/* <div className="item-card__description">{props.item.description}</div> */}
            <div className="item-card__rate" title={props.item.rating.count + " people voted"}>
                <div className="item-card__rate__rating">Rating: </div>
                <Rating
                    initialValue={props.item.rating.rate}
                    readonly={true}
                    size={20}
                />
                <div className="item-card_rate-count">
                    <span className="item-card_rate-count__rate">{props.item.rating.rate}</span>
                    <span className="item-card_rate-count__count">({props.item.rating.count})</span>
                </div>
            </div>
            <div className="item-card__price">${props.item.price}</div>
            <button className="item-card__cartbtn">
                <FaShoppingCart className="item-card__cartbtn__icon" />
                <span className="item-card__cartbtn__text">Add to cart</span>
            </button>
        </Card>
    )
}

export default ItemCard