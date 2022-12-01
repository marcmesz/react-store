import Card from "../../UI/Card/Card"

const SkeletonItem = () => {
    return (
        <Card className='skeleton skeleton-item'>
            <div className='skeleton__img'></div>
            <div className='skeleton__title'></div>
            <div className='skeleton__category'></div>
            <div className='skeleton__price'></div>
            <div className='skeleton__btn'></div>
        </Card>
    )
}

export default SkeletonItem