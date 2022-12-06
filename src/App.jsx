import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RoutesConfig from './Components/RoutesConfig/RoutesConfig';
import { useState } from 'react';

const App = () => {
  const [mobile, setMobile] = useState(false)

  return (
    <div className="App">
      <Header setMobile={setMobile} />
      <RoutesConfig mobile={mobile} setMobile={setMobile} />
      <Footer />
    </div>
  );
}

export default App;
