import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      {/* <Home/> */}
      {/* <Portfolio/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      <Footer/>
    </>
  );
}

export default App;
