import Product from './components/product/Product';
import data from './data';

function App() {
  return (
    <>
      {
        data.map((product, index) => (
          <Product key={index} title={product.title} image={`statics/image${index}.jpeg`} price={product.price} originalPrice={product.originalPrice} saveAmount={product.saveAmount} deliveryDate={product.deliveryDate} stock={product.stock} rating={product.rating} />
        ))
      }
    </>
  );
}

export default App;
