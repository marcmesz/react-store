import './SideBar.scss';
import Categories from '../Categories/Categories';
import Card from '../../UI/Card/Card';
import { BiCategory } from 'react-icons/bi';

const SideBar = props => {

    const allCategory = props.category === "all" ? "current-item category" : "category"

    return (
        <div className="sidebar">
            <Card>
                <h3 className="sidebar__title">Categories</h3>
                <div className="sidebar__categories">
                    <div className={allCategory} onClick={()=>props.setCategory("all")}>
                        <div className="category__icon"><BiCategory/></div>
                        <div className="category__content">All Category</div>
                    </div>
                    
                    {props.categories.map((item, index) => {
                        const classes = props.category === item ? "current-item category" : "category"
                        return (
                            <Categories
                                data={item}
                                key={index}
                                category={props.categories}
                                setCategory={props.setCategory}
                                classes={classes}
                            />
                        )
                    })}
                </div>
            </Card>
        </div>
    )
}

export default SideBar