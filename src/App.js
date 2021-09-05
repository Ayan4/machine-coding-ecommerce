import "./App.css";
import ProductListing from "./components/ProductListing";
import Navbar from "./components/Navbar";
import Sort from "./components/Sort";
import Filters from "./components/Filters";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <Filters />
        <div>
          <Sort />
          <ProductListing />
        </div>
      </div>
    </div>
  );
}

export default App;
