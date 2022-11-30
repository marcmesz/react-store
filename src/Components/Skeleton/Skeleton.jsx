import './Skeleton.scss';
import Card from '../../UI/Card/Card';

const Skeleton = () => {
    return (
        <div className='item-grid skeleton-grid'>
            <Card className='skeleton skeleton-item'>
                <div className='skeleton__img'></div>
                <div className='skeleton__title'></div>
                <div className='skeleton__category'></div>
                <div className='skeleton__price'></div>
                <div className='skeleton__btn'></div>
            </Card>
            <Card className='skeleton skeleton-item'>
                <div className='skeleton__img'></div>
                <div className='skeleton__title'></div>
                <div className='skeleton__category'></div>
                <div className='skeleton__price'></div>
                <div className='skeleton__btn'></div>
            </Card>
            <Card className='skeleton skeleton-item'>
                <div className='skeleton__img'></div>
                <div className='skeleton__title'></div>
                <div className='skeleton__category'></div>
                <div className='skeleton__price'></div>
                <div className='skeleton__btn'></div>
            </Card>
            <Card className='skeleton skeleton-item'>
                <div className='skeleton__img'></div>
                <div className='skeleton__title'></div>
                <div className='skeleton__category'></div>
                <div className='skeleton__price'></div>
                <div className='skeleton__btn'></div>
            </Card>
        </div>
    )
}

export default Skeleton