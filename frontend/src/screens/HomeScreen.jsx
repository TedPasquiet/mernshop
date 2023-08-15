import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApiSlice";

export default function HomeScreen() {
  const {data:products,isLoading,error} = useGetProductsQuery();

  return (
    <>
    {isLoading ? (
      <Loader/>
    ) : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) : (<>
        <Row>
        {products.map((element) => (
            <Col key={element._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={element}/>
            </Col>
        ))}
    </Row>
    </>)}
    <h1>Latest Products</h1>

    </>
  )
}
