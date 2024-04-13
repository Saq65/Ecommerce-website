import React from "react"
import { Link } from "react-router-dom";
import c1 from "./Images/handloom-industry-in-india_540x.webp";
import c2 from "./Images/mobile_wedding_banner_540x.jpg";
import c3 from "./Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "./Images/bharatsthali-logo_360x.avif";
import {Facebook,Instagram,EmailOutlined} from "@mui/icons-material"
export function Certificate() {
    return (
        <div className="container-fluid-lg">
            <div id="certificate" className="container mt-5">
                  <h3 className="text-center">CERTIFICATES OF ASSURANCE OF PURE FABRIC @ BHARATSTHALI</h3>
                  <h3 className="text-center">BHARATSTHALI HAS BEEN CERTIFIED BY VARIOUS QUALITY CHECK AUTHORITIES OF INDIA AND ASIA.</h3>

                  <p>Silk mark of India is a guarantee of Pure Silk Assurance. The ceritifcate has been issued by Govt of India under pure silk assurance.</p>
                  <p>Silk Authority certificate is a guarantee of Pure Silk handlooms. The ceritifcate has been issued by the Silk Authority Online and published online in various magazines too.</p>
                  <p>Handlooms in Asia is a guarantee of Genuine handlooms. The ceritifcate has been issued by the Asia's biggest online handloom authority.</p>

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
        </div>
    )
}