import './Header.scss';
import CartIcon from './CartIcon';
import { IoIosMenu } from 'react-icons/io';

const Header = props => {
    const handleClick = () => {
        props.setMobile(prev=>!prev)
    }

    return (
        <div className="header">
            <div className="nav container">
                <div className="header__title">React Store - Webshop</div>
                <div className="icons">
                    <CartIcon />
                    <IoIosMenu className="mobile-menu" onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default Header