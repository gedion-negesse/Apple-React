//import "./bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap.css";
//import "./css/bootstrap.css.map";

import HeaderSection from "./componentes/HeaderSection/HeaderSection.jsx";
import Alert from "./componentes/AlertSection/AlertSection.jsx";
import FirstSection from "./componentes/FirstSection/FirstSection.jsx";
import SecondSection from "./componentes/SecondSection/SecondSection.jsx";
import ThirdSection from "./componentes/ThirdSection/ThirdSection.jsx";
import FourthSection from "./componentes/FourthSection/FourthSection.jsx";
import FifthSection from "./componentes/FifthSection/FifthSection.jsx";
import SixthSection from "./componentes/SixthSection/SixthSection.jsx";
import Footer from "./componentes/FooterSection/FooterSection.jsx";
import YouTubeVedio from "./componentes/YouTubeVedio/YouTubeVedio.jsx";
import Iphone from "./componentes/Iphone/Iphone.jsx";
import MainSection from "./componentes/MainSection/MainSection.jsx";
import Mac from "./componentes/Mac/Mac.jsx";
import Ipad from "./componentes/Ipad/Ipad.jsx";
import Watch from "./componentes/Watch/Watch.jsx";
import Tv from "./componentes/Tv/Tv.jsx";
import Support from "./componentes/Support/Support.jsx";
import Cart from "./componentes/Cart/Cart.jsx";
import Music from "./componentes/Music/Music.jsx";
import Four04 from "./componentes/Four04/Four04.jsx";
import { Route, Routes } from "react-router-dom";
//import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Sharedlayout from "./componentes/Sharedlayout.jsx";
import SingleProduct from "./componentes/SingleProduct/SingleProduct.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route path="/" element={<MainSection />} />
          <Route path="/" element={<YouTubeVedio />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<SingleProduct />} />

          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<Tv />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="cart" element={<Cart />} />

          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

///<Route path="youtube" element={<YouTubeVedio />} />
