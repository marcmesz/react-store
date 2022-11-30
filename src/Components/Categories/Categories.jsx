import './Categories.scss';
import { categoryIcons } from '../../Data/CategoriesIcons';

const Categories = props => {

    return (
        <div className={props.classes} onClick={()=>props.setCategory(props.data)}>
            <div className="category__icon">{categoryIcons[props.data]}</div>
            <div className="category__content">{props.data.charAt(0).toUpperCase() + props.data.slice(1)}</div>
        </div>
    )
}

export default Categories