import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";

export default function HomeScreen() {
  const {data:products,isLoading,error} = useGetProductsQuery();

  return (
    <>
    {isLoading ? (
      <h2>Loading...</h2>
    ) : error ? (<div></div>) : (<>
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
