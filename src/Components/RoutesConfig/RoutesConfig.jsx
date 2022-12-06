import Main from "../Main/Main";
import { Routes, Route } from 'react-router-dom';
import Cart from "../Cart/Cart";

const RoutesConfig = props => {

    return(
        <Routes>
            <Route path="/" element={<Main mobile={props.mobile} setMobile={props.setMobile}/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}

export default RoutesConfig