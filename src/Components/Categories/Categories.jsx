import './Categories.scss';
import { categoryIcons } from '../../Data/CategoriesIcons';

const Categories = props => {
    const handleClick = () => {
        props.setCategory(props.data)
        props.setMobile(false)
    }

    return (
        <div className={props.classes} onClick={handleClick}>
            <div className="category__icon">{categoryIcons[props.data]}</div>
            <div className="category__content">{props.data.charAt(0).toUpperCase() + props.data.slice(1)}</div>
        </div>
    )
}

export default Categories