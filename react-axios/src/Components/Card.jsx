import { useEffect, useState } from "react";
import getProducts from "../data/Product";
import Button from 'react-bootstrap/Button';
import CardBootstrap  from 'react-bootstrap/Card';


const Card = () => {
    const [products, setProduct] = useState([]);


 

  useEffect(() => {
   

    getProducts((data) => {
      setProduct(data)
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>My Products</h1>
        {products.map((product, i) => {
          return (
            <div className="col-3" key={i}>
              <CardProduct
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            </div>);
        })}
      </div>
    </div>
  );
};

  function CardProduct(props) {
    return (
      <CardBootstrap style={{ width: "18rem" }}>
        <CardBootstrap.Img variant="top" src={props.image} />
        <CardBootstrap.Body>
          <CardBootstrap.Title>{props.title}</CardBootstrap.Title>
          <CardBootstrap.Text>{props.description}</CardBootstrap.Text>
          <Button variant="primary">Go somewhere</Button>
        </CardBootstrap.Body>
      </CardBootstrap>
    );
  }

  

export default Card;
