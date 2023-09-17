import {Badge,Navbar,Nav,Container} from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux'

export default function Header() {
    const {cartItems} = useSelector((state) => state.cart)

  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <img src={logo} alt='MernShopLogo'/>
                <LinkContainer to='/'>
                    <Navbar.Brand>MernShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='cart'>
                            <Nav.Link>
                                <FaShoppingCart/> Cart
                                {
                                    cartItems.lenght > 0 && (
                                        <Badge pill bg='success' style={{marginLeft: '5px'}}>
                                            {cartItems.reduce((a,c) => a + c.qty, 0)}
                                        </Badge>
                                    )
                                }
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link>
                                <FaUser/> Sign In
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
