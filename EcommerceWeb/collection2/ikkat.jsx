import React from "react";
import { Modal } from "react-bootstrap";
import { TuneOutlined, CurrencyRupee,Instagram,Facebook,EmailOutlined } from "@mui/icons-material";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import c1 from "../Images/handloom-industry-in-india_540x.webp";
import c2 from "../Images/mobile_wedding_banner_540x.jpg";
import c3 from "../Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "../Images/bharatsthali-logo_360x.avif";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Ikkat(props) {
    const [product, setProduct] = useState({ Items17: [{ products: [] }] });
    const [write, setwrite] = useState(false);

    useEffect(() => {
        axios.get('allproduct.json').then((res) => {
            setProduct(res.data);
        });
    }, []);
    const navigate = useNavigate();
    return (
        <div className="container-fluid-lg">
            <div id="silkoffer" className="container-fluid text-center  mt-4">
                <h3>MADE WITH LOVE <span className="h6 fw-lighter">   Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</span></h3>
            </div>
            <div id="sareeInfo " className="m-4 mx-3">
                <h5 className="">IKKAT SAREES ONLINE</h5>
                <p className="text-justify">
                    Ikkat saree is widely known for it handwoven textures in India. BharatSthali brings you an exclusive handpicked collection of ikat sarees online.
                    Ikkat or ikat is a dyeing technique that utilizes resist dyeing to pattern textiles.
                </p>
            </div>
            <div id="filter" className="mx-5">
                <h3 style={{ cursor: 'pointer' }} className="border text-center p-1" onClick={() => setwrite(true)} ><TuneOutlined /> <span className="p fw-lighter">Filter</span> </h3>

            </div>
            <Modal className="p-2" show={write} onHide={() => setwrite(false)}>
                <Dropdown>
                    <DropdownToggle className="bg-white text-dark border border-0"><li>COTTON</li></DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => navigate("/bengali")}>Bengali Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/maheshwari")}>Maheshwari Cotton</DropdownItem>
                        <DropdownItem onClick={() => navigate("/jaipur")}>Jaipur Cotton</DropdownItem>
                        <DropdownItem onClick={() => navigate("/south")}>South Cotton Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/office")}>Office Wear Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/khadi")}>Dr.Khadi</DropdownItem>
                        <DropdownItem onClick={() => navigate("/block")}>Block Printed Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/bagru")}>Bagru Print Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/ajrakh")}>Ajrakh Print Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/ikkat")}>Ikkat Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/chanderi")}>Chanderi Cotton Silks</DropdownItem>
                        <DropdownItem onClick={() => navigate("/kalamkari")}>Kalamkari Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/madhubani")}>Madhubani Print Sarees</DropdownItem>
                        <DropdownItem onClick={() => navigate("/blouse")}>Blouses</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Modal>

            <div id="product" className="row align-items-center mx-auto justify-content-center w-100">
                {product.Items17.map((resp, index) => (
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
            <div className="container-fluid">
                <h3>IKKAT SILK SAREES ONLINE ON BHARAT STHALI</h3>
                <p className="text-justify">
                    The blurriness of the ikkat designs make them unique and, it consumes time.
                    The multiple and complicated patterns and colours are intriguing and difficult to achieve.
                    In fact, since ancient time, sarees in Ikkat design are a prized possession of art lovers and textile collectors due to
                    the beauty and blurriness of the textile sarees Double ikat designs are intensive and involve more manual efforts and make
                    them even more worthwhile to have them in your wardrobe.
                </p>
                <h5>IKKAT SAREE STYLE SATEMENTS</h5>
                <p className="text-justify">
                    We, at Bharat Sthali, bring you ikkat sarees from every part of India. Whether it is Pochampally from Telangana,
                    Patan of Gujarat or Sambalpuri ikat from Orissa, authentic handlooms is waiting for you to be explored, at your fingertips!
                    Don’t go anywhere, and don’t ever worry about your hard-earned money not buying you an authentic fabric.
                    Shop from the comforts of your surroundings and choose your favourite ikkat saree.
                </p>
                <p className="text-justify">
                    Available in different colours and authentic patterns, ikkat designed sarees are the perfect way to refresh your wardrobe with a traditional vibe. The sarees are a perfect way to turn the heads at a social do! Whether it is a semi-formal event at your office or you are planning to spend a romantic evening with your loved one,
                    ikkat silk sarees on Bharat Sthali are just the way to go.
                </p>
                <h6>WHY BHARAT STHALI?</h6>
                <p className="text-justify">
                    Browse through and choose your pick. Shop now and get your order delivered to your doorsteps! Regardless of where you are, in India or the U.K., France or Japan, U.A.E or Denmark, you can get a bit of Indian tradition, right where you are! Online saree shopping India on Bharat Sthali also has its perks such as options of a 7-day returns guarantee and Cash on Delivery.
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
            <div>
             <p className="text-center">&#169;2024 BharatSthali BharatSthali</p>   
            </div>
        </div>
    )
}