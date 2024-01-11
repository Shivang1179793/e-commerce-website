import './App.css';
import ProductList from './components/e-commerce/productList/ProductList';
import NavBar from './components/e-commerce/navbar/NavBar'
function App() {
  return (
    <div className="App">
      {/* <Child1></Child1>
      <Child2></Child2> */}
      {/* <CreateNote />
      <ListNotes /> */}
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;
