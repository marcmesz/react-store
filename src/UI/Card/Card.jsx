import './Card.scss';

const Card = props => {
    const classes = props.className ? props.className + " card" : "card"
    return(
        <div className={classes} title={props.title}>{props.children}</div>
    )
}

export default Card