import './SideBar.scss';
import Categories from '../Categories/Categories';
import Card from '../../UI/Card/Card';

const SideBar = props => {

    return (
        <div className="sidebar">
            <Card>
                <h3 className="sidebar__title">Categories</h3>
                <div className="sidebar__categories">
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