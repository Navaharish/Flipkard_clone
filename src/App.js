import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import './style.css'
function App() {

  return (
    <div className="App text-center">
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}

export default App;
