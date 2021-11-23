import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductDetail({ match }) {
  // Check to confirm the product id matches the parameter passed in the url
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div>
      <Link to='/' className='btn btn-success my-3 rounded-0'>
        Go Back
      </Link>
      <Row>
        {/* Product Image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        {/* Product Info */}
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>Price: $ {product.price}</h5>
            </ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
