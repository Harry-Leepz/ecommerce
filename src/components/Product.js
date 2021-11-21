import React from "react";
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
      {/* Image */}
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>

      <Card.Body>
        {/* Name */}
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        {/* Reviews */}
        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        {/* Price */}
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
