import './ItemCard.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import StarRatingComponent from 'react-star-rating-component';
import Card from '../../UI/Card/Card';

const ItemCard = props => {
    return (
        <Card className="item-card" title={props.item.title}>
            <div className="item-card__image" style={{ backgroundImage: `url(${props.item.image})` }}></div>
            <div className="item-card__title">{props.item.title}</div>
            <div className="item-card__category">Category: {props.item.category}</div>
            {/* <div className="item-card__description">{props.item.description}</div> */}
            <div className="item-card__rate" title={props.item.rating.count + " people voted"}>
                <div className="item-card__rate__rating">Rating: </div>
                <StarRatingComponent
                    name="rating_2"
                    editing={false}
                    renderStarIcon={() => <BsStarFill style={{marginTop: "3px"}}/>}
                    starCount={5}
                    value={props.item.rating.rate}
                />
                <div className="item-card_rate-count">({props.item.rating.rate})</div>
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