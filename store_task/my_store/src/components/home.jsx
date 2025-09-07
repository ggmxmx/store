import ProductBan from "./product_ban";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'

function Home() {
      const [products, setProducts] = useState([]);


     useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((res) => {
        setProducts(res.data);

      })
      .catch((err) => {
        console.error('Error fetching products:', err);

      });
  }, []);

  return (
    <div>
      
      <div className='products-container'>

        {products.map((product, index) => (
          <ProductBan name={product.name} price={product.price} amount={product.amount} />
        ))}
      </div>

    </div>
  );
}
export default Home;