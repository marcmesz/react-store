import './Skeleton.scss';
import SkeletonItem from './SkeletonItem';


const Skeleton = () => {
    return (
        <div className='item-grid skeleton-grid'>
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
        </div>
    )
}

export default Skeleton