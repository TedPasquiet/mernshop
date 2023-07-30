import { useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import products from "../products"

export default function HomeScreen() {
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((element) => (
            <Col key={element._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={element}/>
            </Col>
        ))}
    </Row>
    </>
  )
}
