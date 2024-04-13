import { Modal } from "react-bootstrap";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { Link } from "react-router-dom";
import {TuneOutlined,EmailOutlined,Facebook,Instagram} from "@mui/icons-material";
import logo from "./Images/bharatsthali-logo_360x.avif";
import c1 from "./Images/handloom-industry-in-india_540x.webp";
import c2 from "./Images/mobile_wedding_banner_540x.jpg";
import c3 from "./Images/mobile_wedding_banner_newssss_540x.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Dresses() {
  const [write, setwrite] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container-fluid-lg">
      <div id="silkoffer" className="container-fluid text-center mt-4">
        <h3>MADE WITH LOVE <span className="h6 fw-lighter">   Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</span></h3>
      </div>
      <div id="sareeInfo " className="m-4 mx-3">
        <h5 className="">PARTY WEAR DRESSES</h5>
        <p></p>
      </div>
      <div id="filter" className="mx-5">
        <h3 style={{ cursor: 'pointer' }} className="border text-center p-1" onClick={() => setwrite(true)} ><TuneOutlined /> <span className="p fw-lighter">Filter</span> </h3>
      </div>
      <Modal className="p-2" show={write} onHide={() => setwrite(false)}>
        <Dropdown >
          <DropdownToggle className="bg-white text-dark border border-0"> <li>Designer Sarees</li></DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => navigate("/dress")}>Dresses</DropdownItem>
            <DropdownItem onClick={() => navigate("/blouse")}>Blouses</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Modal>
      <div id="product" className="row align-items-center mx-auto h-75 justify-content-center w-100">
        <p className="fw-lighter">Sorry, there are no products in this collection.</p>
      </div>
      <hr />
                <div className="">
                    <div className="row w-100">
                        <div className="col-lg-4 col-12">
                            <div className="card m-2">
                                <img src={c1} className="img-fluid " alt="" />
                                <div className="card-body text-center">
                                    <h3>HANDLOOMS</h3>
                                    <p>
                                        Handloom means there is no electrical energy involved while making the fabric instead handloom is a fabric
                                        that is woven on a loom that uses mechanical energy of the weaver.</p>
                                    <span id="cb1"><Link to="/handloom" className="text-decoration-none text-dark">VIEW HANDLOOM SAREES</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="card m-2">
                                <img src={c2} alt="" id="c2" className="img-fluid " />
                                <div className="card-body text-center">
                                    <h3>RAW SILK SAREES</h3>
                                    <p>
                                        The raw silk is soft, lustrous and also has vibrant colour, but less lucid in nature. Also known as silk spun fibre,
                                        the weight of raw silk fabric is also less than by at
                                        least 30 percent, making it suitable for everyday use and carry it easily. </p>
                                    <span id="cb2"><Link to="/softsilk" className="text-decoration-none text-dark">RAW SILK SAREES</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="card m-2">
                                <img src={c3} id="c3" alt="" className="img-fluid" />
                                <div className="card-body text-center">
                                    <h3>SOUTH COTTON SAREES</h3>
                                    <p>
                                        Cotton - An Indian origin fabric, its an all whether fabric and defines the Indian women beauty
                                        is a much simple way. Find all varieties of south cotton sarees here.</p>
                                    <span id="cb3"><Link to="/south" className="text-decoration-none text-dark">SOUTH COTTON SAREES</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="footer">
                    <div className="row w-100 mx-auto">
                        <div className="col-12 col-lg-3">
                            <p>ABOUT US</p>
                            <img src={logo} className="img-fluid" alt="" />
                            <p>BharatSthali, India - Worldwide shipping</p>
                            <details>
                                <ul>
                                    <li>email: namaskaram@bharatsthali.com</li>
                                </ul>
                                <p>Customer Care Phone: +91 95 01666 977</p>
                                <p>Vendor Business Inquiry - +91 819999 5288</p>
                            </details>
                            <p>International</p>
                            <p>Indian Cities</p>
                        </div>
                        <div className="col-12 col-lg-3">
                            <ul id="footerul">
                                <li>Saree for Mom</li>
                                <li>  Sarees for Wife</li>
                                <li> <Link className="text-dark text-decoration-none" to="/kanjivaram">Kanjivaram Silk Sarees</Link> </li>
                                <li>     Kerala Kavasu</li>
                                <li> <Link className="text-dark text-decoration-none" to="/raw">Raw Silk Sarees</Link>  </li>
                                <li>  <Link className="text-dark text-decoration-none" to="/softsilk">Soft Silk Sarees</Link></li>
                                <li>  <Link className="text-dark text-decoration-none" to="/mysore">Mysore Sarees</Link>  </li>
                                <li>  <Link className="text-dark text-decoration-none" to="/softsilk"> Tussar Silk</Link> </li>
                                <li>    Party Wear Sarees</li>
                                <li>  <Link className="text-dark text-decoration-none" to="/banarsi"> Banarasi Sarees</Link> </li>
                                <li>   Readymade Blouses</li>
                                <li>    Chandigarh Store</li>
                                <li>    Dehradun Store</li>
                                <li>    Indore Store</li>
                                <li>    Vadodara Store</li>
                                <li>    Varanasi Store</li>
                                <li>Bhopal Store</li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3">
                            <p>SIGN UP AND SAVE</p>
                            <h6 className="fw-lighter">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</h6>
                            <input type="email" placeholder="enter your email" name="email" id="email" /><span><EmailOutlined /> </span> <br />
                            <h2><span><Instagram />  </span> <span><Facebook /></span></h2>
                        </div>
                        <div className="col-12 col-lg-3">
                            <ul id="footerul">
                                <li>Our Stores</li>
                                <li> <Link className="text-dark text-decoration-none" to="/about">About Us</Link> </li>
                                <li> <Link className="text-dark text-decoration-none" to="/contact">Contact Us</Link> </li>
                                <li> Terms Conditions</li>
                                <li> Returns & Exchange</li>
                                <li> Shipping & Delivery</li>
                                <li> Faq</li>
                                <li> Franchisee</li>
                                <li> <Link className="text-dark text-decoration-none" to="/blog">Blog</Link> </li>
                                <li> Our Philosophy</li>
                                <li> Track Order</li>
                                <li> Cane Furniture Exports</li>
                            </ul>
                        </div>
                    </div>
                </div>
    </div>
  )
}