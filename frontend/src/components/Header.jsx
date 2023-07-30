import {Navbar,Nav,Container} from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <img src={logo} alt='MernShopLogo'/>
                <Navbar.Brand href='/'>MernShop</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'>
                            <FaShoppingCart/> Cart
                        </Nav.Link>
                        <Nav.Link href='/cart'>
                            <FaUser/> Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
