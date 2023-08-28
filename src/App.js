import CardDetail from './Component/CardDetail';
import Endlink from './Component/Endlink';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Sigin from './Component/Sigin';
import './style.css'
function App() {

  return (
    <div className="App text-center">
      <Navbar />
      <Hero />
      <Product />
      <CardDetail />
      <Sigin />
      <Endlink />

    </div>
  );
}

export default App;
