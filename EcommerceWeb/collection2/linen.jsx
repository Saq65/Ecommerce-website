import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ecommerce.css";
import c1 from "../Images/handloom-industry-in-india_540x.webp";
import c2 from "../Images/mobile_wedding_banner_540x.jpg";
import c3 from "../Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "../Images/bharatsthali-logo_360x.avif";
import { CurrencyRupee, Facebook, Instagram, EmailOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

export function Linen(props) {
    const [product, setProduct] = useState({ Items2: [{ products: [] }] });

    useEffect(() => {
        axios.get('allproduct.json').then((res) => {
            setProduct(res.data);
        });
    }, []);

    const navigate = useNavigate();
    function Image(e, id) {
        const ids = product.Items2.find(itm => itm.id === id);
        if (ids) {
            const info = ids.images;
            const info2 = ids.products.map(nm => nm.name);
            const img1 = ids.images2;
            const img2 = ids.images3;
            const img3 = ids.images4;
            const price = ids.products.map(pric => pric.price);
            const desc = ids.desc;
            const desc2 = ids.desc2;
            const id = ids.id;
            const length = ids.length;
            const width = ids.width;
            navigate('/main', { state: { info: info, info2: info2, img1: img1, img2: img2, img3: img3, price: price, desc: desc, desc2: desc2, length: length, width: width ,id:id} })
        }
    }

    return (
        <div className="container-fluid">
            <div id="silkoffer" className="container-fluid text-center mt-4">
                <h3>MADE WITH LOVE <span className="h6 fw-lighter">   Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</span></h3>
            </div>
            <div id="sareeInfo " className="m-4 mx-3">
                <h5 className="">LINEN SAREES ONLINE</h5>
                <p className="text-justify">
                    Linen sarees are durable and comfortable, these sarees are extremely skin-friendly. Though cotton saree is very much in vogue,
                    it is one of the oldest fabrics and dated back to 4,000 years ago.
                    Find best linen sarees for online shopping with price in plain, zari borders, printed and block printed art.
                </p>
            </div>
            <div id="product" className="row align-items-center mx-auto justify-content-center w-100">
                {product.Items2.map((resp, index) => (
                    <div className="col-lg-2 col-6" key={index}>
                        <div className="card">
                            <img style={{ cursor: 'pointer' }} onClick={(e) => Image(e, resp.id)} id={resp.id} src={resp.images} className="img-fluid" alt="" />
                            <h6 className="text-center d-none fw-lighter">{resp.id}</h6>
                            <div className="card-body">
                                <div className="card-text">
                                    {resp.products.map((itm, i) => (
                                        <div key={i}>
                                            <h6 className="text-justify text-center">{itm.name}</h6>
                                            <p><span><CurrencyRupee className="fs-6" /></span>{itm.price}</p>
                                            <button className="btn btn-dark d-none w-100" value={resp.id} onClick={props.onClick}>Add to Cart</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-fluid mt-5">
                <h4>BUY LINEN SAREE ONLINE IN INDIA AT BHARATSTHALI</h4>
                <p className="text-justify">
                    You will feel luxurious and lustrous with Bharatsthali sarees in linen online. These chic and casual drapes are just the perfect alternatives to traditional sarees in summers without skimping out on the lucidity, style, and elegance.
                    The understated gorgeousness of pure linen with a zari border is designed to give you a soothing look.
                </p>
                <h4>SHOP PREMIUM LINEN SAREES ONLINE IN INDIA</h4>
                <p className="text-justify">
                    If you are looking to beat the heat in style, this saree in Jamdani Linen collection is what you should be looking at to amp up your style game. Fashioned out from the fibers of flax plants, block printed pure linen threads are an extension of your personality and a picture of grace. If you don’t want to restrict yourself to pure silk saree or south Indian cotton saree every time there is a function or a boardroom meeting at your work,
                    browse through this section for some wonderful options in floral pure linen crafts.
                </p>
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