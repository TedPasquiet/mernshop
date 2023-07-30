import {Container,Row,Col} from 'react-bootstrap';

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <Row>
            <Container>
            <Col className='text-center py-3'>
                <p>MernShop &copy; {currentYear} </p>
            </Col>
            </Container>
        </Row>
    </footer>
  )
}
