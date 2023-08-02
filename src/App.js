import './App.css';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import { useEffect, useState } from 'react';

function App() {

  const [getInTouchBackGroundColor, setGetInTouchBackGroundColor] = useState(false);

  useEffect(() => {
    const homeBackgorundColor = document.getElementById('app');
    if (getInTouchBackGroundColor) {
      homeBackgorundColor.classList.add("blackBackgroundColor");
    } else {
      homeBackgorundColor.classList.remove("blackBackgroundColor");
    }
  }, [getInTouchBackGroundColor])

  return (
    <div id='app' className="App">
      <Header setGetInTouchBackGroundColor={setGetInTouchBackGroundColor} />
      <Home />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
