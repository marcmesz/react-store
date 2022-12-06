import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { useState } from 'react';

const App = () => {
  const [mobile, setMobile] = useState(false)

  return (
    <div className="App">
      <Header setMobile={setMobile}/>
      <Main mobile={mobile} setMobile={setMobile}/>
      <Footer/>
    </div>
  );
}

export default App;
