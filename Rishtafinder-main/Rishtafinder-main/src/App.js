import './App.css';
import Footer from "./component/layouts/footer/footer.jsx"
import Nav from "./component/layouts/Header/nav.jsx"
import Home from './component/Home/home.jsx'
import Cart from './component/Home/cart'
import Benefit from './component/Home/benefit.jsx';
import Mission from './component/Home/mession.jsx';

function App() {
  return (
    <div className="App">
                  <Nav></Nav>
                  <Home/>
                  <Cart/>
                  <Mission/>
                  <Benefit/>
                 <Footer/>
             
    
    </div>
  );
}

export default App;
