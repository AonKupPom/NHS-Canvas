import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './navbar.component.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSol from '@fortawesome/free-solid-svg-icons'
import * as faReg from '@fortawesome/free-regular-svg-icons';
import * as bi from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <>
      <Container>
          <Row className="justify-content-md-center px-4">
            <Navbar expand="xl">
              <Navbar.Brand className='mt-4'>
                <NavLink to="/">
                  <img src={require('../../assets/img/NHS LOGO HAND.png')} width='80px' className='mx-auto' draggable='false' alt=''></img>
                </NavLink>
                <p>NHS Canvas.</p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className='mt-3'>
                <Form className="nav-search">
                  <div className='d-flex nav-search search-border p-1 mb-2'>
                    <Form.Control
                      type="search"
                      placeholder="ค้นหาสินค้า"
                      className="me-auto search-box shadow-none"
                      aria-label="Search"
                    />
                    <Button variant="outline-secondary" className='mr-4 btn-search'><FontAwesomeIcon icon={faSol.faMagnifyingGlass}></FontAwesomeIcon></Button>
                  </div>
                </Form>
                <div className='mb-2'>
                  <Button variant="outline-secondary" className='btn-user mr-4'><FontAwesomeIcon icon={faReg.faUser} size="lg"></FontAwesomeIcon>&emsp;เข้าสู่ระบบ</Button>
                </div>
                <div className='mb-2'>
                  <Button variant="outline-secondary" className='btn-cart mr-4'><span className='btn-cart-text'>ชำระสินค้า</span><FontAwesomeIcon icon={faSol.faShoppingCart} className='fa-cart' size="lg"></FontAwesomeIcon></Button>
                </div>
                {/* <Button className='mr-4 btn-cart'><FontAwesomeIcon icon={faShoppingCart} size="xl"></FontAwesomeIcon></Button> */}
              </Navbar.Collapse>
            </Navbar>
          </Row>
          <Row className='px-4 mt-4'>
            <Navbar expand="xl" className='justify-content-center mb-5'>
              <Navbar.Collapse className='justify-content-md-center'>
                <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <div className='px-5 nav-items'>
                      <NavLink to='/selling-tents' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        <Row>
                          <bi.Diagram3Fill size={50} />
                        </Row>
                        <Row className='justify-content-center mt-2'>
                          ซื้อเต็นท์
                        </Row>
                      </NavLink>
                  </div>
                  <div className='px-5 nav-items'>
                    <NavLink to="/rent-tents">
                      <Row>
                        <bi.Diagram3 size={50} />
                      </Row>
                      <Row className='justify-content-center mt-2'>
                        เช่าเต็นท์
                      </Row>
                    </NavLink>
                  </div>
                  <div className='px-5 nav-items'>
                    <div className='icon-hov'>
                      <Row className='justify-content-center mt-2'>
                        <bi.TextareaResize size={50} id='dropdown-icon' />
                      </Row>
                      <Row>
                        <NavDropdown title="งานเบาะและผ้าใบ" id="navbarScrollingDropdown">
                          <NavDropdown.Item>งานเบาะและโซฟา</NavDropdown.Item>
                          <NavDropdown.Item>
                            ผ้าใบเฉพาะงาน
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            ชนิดวัสดุผลิตสินค้า
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Row>
                    </div>
                  </div>
                  <div className='px-5 nav-items'>
                    <NavLink to="/action3">
                      <Row>
                        <bi.Truck size={50} />
                      </Row>
                      <Row className='justify-content-center mt-2'>
                        บริการกางเต็นท์
                      </Row>
                    </NavLink>
                  </div>
                  <div className='px-5 nav-items'>
                    <NavLink to="/action4">
                      <Row>
                        <bi.BoxSeam size={50} />
                      </Row>
                      <Row className='justify-content-center mt-2'>
                        อุปกรณ์เสริม
                      </Row>
                    </NavLink>
                  </div>
                  <div className='px-5 nav-items'>
                    <NavLink to="/action5">
                      <Row>
                        <bi.Gift size={50} />
                      </Row>
                      <Row className='justify-content-center mt-2'>
                        โปรโมชัน
                      </Row>
                    </NavLink>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>
      </Container>
    </>
  );
}

// เมนู เต็นท์ผ้าใบ เต็นท์เช่า งานผ้าใบอื่นๆ บริการกางเต็นท์ กาวปะผ้าใบ สเตย์รัดผ้าใบ เชือกไนล่อน

export default navbar;