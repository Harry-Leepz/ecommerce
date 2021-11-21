import React from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import products from "../products";

function HomePage() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {/* Map through products array creating a product for each item and passing as a prop */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePage;
