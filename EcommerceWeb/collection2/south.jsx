import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ecommerce.css";
import { Link } from "react-router-dom";
import c1 from "../Images/handloom-industry-in-india_540x.webp";
import c2 from "../Images/mobile_wedding_banner_540x.jpg";
import c3 from "../Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "../Images/bharatsthali-logo_360x.avif";
import { CurrencyRupee,Instagram,Facebook,EmailOutlined } from "@mui/icons-material";

export function South(props) {
    const [product, setProduct] = useState({ Items13: [{ products: [] }] });

    useEffect(() => {
        axios.get('allproduct.json').then((res) => {
            setProduct(res.data);
        });
    }, []);
    return (
        <div className="container-fluid-lg">
            <div id="silkoffer" className="container-fluid text-center  mt-4">
                <h3>MADE WITH LOVE <span className="h6 fw-lighter">   Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</span></h3>
            </div>
            <div id="sareeInfo " className="m-4 mx-3">
                <h5 className="">SOUTH INDIAN COTTON SAREES ONLINE</h5>
                <p className="text-justify">
                    Here you can shop for Jaipur cotton sarees, Chettinad cotton sarees, Bengal Cotton sarees and South Indian cotton sarees.
                    BharatSthali brings you a massive selection of cotton sarees online shopping from south India online. Designed and hand weaved
                    to perfection,
                    these pure cotton sarees are made to wear on a daily basis and don't require much effort on your part to maintain them.
                </p>
            </div>
            <div id="product" className="row align-items-center mx-auto justify-content-center w-100">
                {product.Items13.map((resp, index) => (
                    <div className="col-lg-2 col-sm-12 col-6" key={index}>
                        <div className="card">
                            <img src={resp.images} className="img-fluid" alt="" />
                            <h6 className="text-center d-none fw-lighter">{resp.id}</h6>
                            <div className="card-body">
                                <div className="card-text">
                                    {resp.products.map((itm, i) => (
                                        <div key={i}>
                                            <h6 className="text-justify text-center">{itm.name}</h6>
                                            <p><span><CurrencyRupee className="fs-6" /></span>{itm.price}</p>
                                            <button className="btn btn-dark w-100" value={resp.id} onClick={props.onClick}>Add to Cart</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
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