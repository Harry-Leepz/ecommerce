import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductDetail({ match }) {
  // Check to confirm the product id matches the parameter passed in the url
  const product = products.find((p) => p._id === match.params.id);
  return <div>{product.name}</div>;
}

export default ProductDetail;
