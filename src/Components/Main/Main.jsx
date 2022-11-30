import './Main.scss';
import SideBar from '../SideBar/SideBar';
import MainContent from '../MainContent/MainContent';

const Main = () => {
    return (
        <div className="main container">
            <SideBar />
            <MainContent />
        </div>
    )
}

export default Main