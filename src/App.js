import Home from './Pages/Home';
import Features from './component/Features';
import Header from './component/Header';
import Integration from './Pages/Integration';
import RoutesApp from './routes';
import { Customers } from './Pages/Customers';
import Publicidade from './Pages/Publicidade';
import Resources from './Pages/Resources';
import Footer from './component/Footer';


export default function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
      {/* <Features/>
      <Integration/>
      <Customers/>
      <Publicidade/>
      <Resources/>
      <Footer/> */}
    </div>
  );
}


