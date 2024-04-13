import React, { useState } from "react";
import "flag-icons";
import "./ecommerce.css";
import navsvg from "./Images/svglogobst.svg";
import { Close, Facebook, Instagram, PersonOutline, Search, ShoppingBagOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { IoReorderThree } from "react-icons/io5";
import Modal from "react-modal";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "flag-icons";

export function Nav(props) {
    const navigate = useNavigate();
    const [search, setsearch] = useState(false);
    const [humburger, sethumburger] = useState(false);
    function Home() {
        navigate("/")
    }
    function Account() {
        navigate("/account")
    }
    function Cart() {
        navigate("/cart")
    }
    const Setting = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    Modal.setAppElement('#root');

    return (
        <div className=" bg-white">
            <div id="navbar">
                <div style={{ borderBottom: '1px outset #F7F7F7', height: '50px' }} className="upper d-flex align-items-center justify-content-between">
                    <div id="upper" className="u1 w-50">
                        <ul className="d-flex justify-content-around" style={{ listStyle: 'none' }}>
                            <Link style={{ textDecoration: 'none' }} className="text-dark" to="/about"> About Us</Link>
                            <Link style={{ textDecoration: 'none' }} className="text-dark" to="/contact">Contact Us</Link>
                            <Link style={{ textDecoration: 'none' }} className="text-dark" to="/handloom">Handlooms</Link>
                            <Link style={{ textDecoration: 'none' }} className="text-dark" to="/banarsi">Banarasi</Link>
                            <Link style={{ textDecoration: 'none' }} className="text-dark" to="/blog">Blog</Link>
                            <Link style={{ textDecoration: 'none' }} className="text-dark" to="/certificate">Certificates</Link>
                            <Link style={{ textDecoration: 'none' }} className="text-dark" to="media">Media News</Link>
                        </ul>
                    </div>
                    <div className="u2 d-inline-flex aligns-items-center">
                        <span className="m-2"> <Facebook /></span>
                        <span className="m-2">  <Instagram /></span>
                        <select id="flag" style={{ border: 'none', cursor: 'pointer' }} className="m-2 ">
                            <option value="ind">Indian Rupees</option>
                            <option>US Dollar</option>
                            <option>Euro</option>
                            <option>British Pound Sterling</option>
                            <option>Canadian Dollar</option>
                            <option>Australian Dollar</option>
                            <option>Singapore Dollar</option>
                            <option>Malaysian Dollar</option>
                        </select>
                    </div>
                </div>
                <div id="navbarsticky" style={{ position: 'sticky', top: '10px', zIndex: '10', padding: '5px' }} className="mx-2  d-flex align-items-center justify-content-between">
                    <div className="img">
                        <img onClick={Home} src={navsvg} style={{ height: '50px', cursor: 'pointer' }} className="img-fluid" alt="" />
                    </div>
                    <div id="list" className="list w-70">
                        <ul style={{ listStyle: 'none', }} className="d-inline-flex gap-2">
                            <Dropdown >
                                <DropdownToggle className="bg-white text-dark border border-0"> <li>SILK</li></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => navigate("/softsilk")}>Soft Silk Saree</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/kanjivaram")}>Kanjivaram Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/banarsi")}>Banarasi Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/maheshwari")}>Maheshwari Silk</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/raw")}>Raw Silk Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/mysore")}>Mysore Silk Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/sambalpuri")}>Sambalpuri Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/kalamkari")}>Kalamkari Print Saree</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/madhubani")}>Madhubani Print Sarees</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
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
                            <Dropdown>
                                <DropdownToggle className="bg-white text-dark border border-0"><Link className="text-dark text-decoration-none" to="/linen">LINEN</Link></DropdownToggle>

                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle className="bg-white text-dark border border-0"><li>REGIONAL</li></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => navigate("/sambalpuri")}>Sambalpuri Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/kanjivaram")}>Kanjivaram Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/bengali")}>Bengali Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/mysore")}>Mysore Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/maheshwari")}>Maheshwari Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/karnataka")}>Karnataka Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/tamilnadu")}>Tamilnadu Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/banarsi")}>Banarasi Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/banarsi")}>Banarasi Dupatta</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle className="bg-white text-dark border border-0"><li>BANARASIA</li></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => navigate("/banarsi")}>Banarasi Sarees</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/banarsi")}>Banarasi Dupatta</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/banarsi")}>Banarasi Dress Material</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle className="bg-white text-dark border border-0"> <li>DESIGNER SAREES</li></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => navigate("/dress")}>Dresses</DropdownItem>
                                    <DropdownItem onClick={() => navigate("/blouse")}>Blouse</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle className="bg-white text-dark border border-0"><Link to="/media" className="text-decoration-none text-dark">MEDIA NEWS</Link></DropdownToggle>

                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle className="bg-white text-dark border border-0"><li>INTERNATIONAL</li></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>USA</DropdownItem>
                                    <DropdownItem>Australia</DropdownItem>
                                    <DropdownItem>Malaysia</DropdownItem>
                                    <DropdownItem>New Zealand</DropdownItem>
                                    <DropdownItem>Canada</DropdownItem>
                                    <DropdownItem>Sri Lanka</DropdownItem>
                                    <DropdownItem>Singapore</DropdownItem>
                                    <DropdownItem>France</DropdownItem>
                                    <DropdownItem>South Africa</DropdownItem>
                                    <DropdownItem>Fiji</DropdownItem>
                                    <DropdownItem>United Kingdom</DropdownItem>
                                    <DropdownItem>UAE</DropdownItem>
                                    <DropdownItem>Mauritius</DropdownItem>
                                    <DropdownItem>Netherlands</DropdownItem>
                                    <DropdownItem>Italy</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </ul>
                    </div>
                    <div className="icons">
                        <span onClick={Account}><PersonOutline style={{ fontSize: '35px', cursor: 'pointer' }} /></span>
                        <span onClick={() => setsearch(true)}><Search style={{ fontSize: '35px', cursor: 'pointer', zIndex: '100' }} /></span>
                        <span onClick={Cart}><ShoppingBagOutlined style={{ fontSize: '35px', cursor: 'pointer', }} /><sup>{props.data}</sup></span>
                    </div>
                </div>
                <Modal className="p-1 bg-white " style={{ content: { height: '14%' }, overlay: { backgroundColor: 'rgba(0,0,0,0)', zIndex: '92' } }} isOpen={search}>
                    <i style={{ cursor: 'pointer', float: 'right' }} onClickCapture={() => setsearch(false)}><Close /></i>
                    <div className="">
                        <div className="d-flex justify-content-center">
                            <h3>Search Product</h3>
                        </div>
                        <div className="d-flex justify-content-center">
                            <input placeholder="Search Here" className="form-control w-50" type="search" name="search" id="search" />
                        </div>
                    </div>
                </Modal>

            </div>
            {/*mobile navbar*/}
            <div id="hide" className="container-fluid-lg h-50">
                <div className="d-flex justify-content-between">
                    <div className="img mx-2">
                        <img onClick={Home} src={navsvg} style={{ height: '45px' }} className="img-fluid" alt="" />
                    </div>
                    <div className="icons">
                        <span onClick={() => setsearch(true)}><Search style={{ fontSize: '40px', cursor: 'pointer', zIndex: '92' }} /></span>
                        <span onClick={() => sethumburger(true)}><IoReorderThree style={{ fontSize: '40px', cursor: 'pointer', zIndex: '100' }} /></span>
                        <span onClick={Cart}><ShoppingBagOutlined style={{ fontSize: '40px', cursor: 'pointer' }} /><sup>{props.data}</sup></span>
                    </div>
                    <Modal className="p-2 " style={{ content: { width: '80%', height: '100%', border: 'none', boxShadow: "none", float: 'right', backgroundColor: '#FFFFFF' }, overlay: { zIndex: '100',backgroundColor:'rgba(0,0,0,0)' } }}     onRequestClose={() => sethumburger(false)} isOpen={humburger}>
                        <i><Close style={{ float: 'right', cursor: 'pointer' }} onClick={() => sethumburger(false)} /></i>
                        <div>
                            <select id="flag" style={{ border: 'none', cursor: 'pointer' }} className="m-2 ">
                                <option value="ind">  Indian Rupees</option>
                                <option> <span className="fi fi-us"></span> US Dollar</option>
                                <option> <span className="fi fi-eu"></span> Euro</option>
                                <option> <span className="fi fi-gb "></span> British Pound Sterling</option>
                                <option> <span className="fi fi-ca"></span> Canadian Dollar</option>
                                <option> <span className="fi fi-au"></span> Australian Dollar</option>
                                <option> <span className="fi fi-sg "></span> Singapore Dollar</option>
                                <option> <span className="fi fi-my"></span> Malaysian Dollar</option>
                            </select>
                            <div id="dropdown">
                                <Dropdown>
                                    <DropdownToggle className="text-dark border border-0 bg-white" >
                                        SILK
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => navigate("/softsilk") || sethumburger(false)}>Soft Silk Saree</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/kanjivaram") || sethumburger(false)}>Kanjivaram Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/banarsi") || sethumburger(false)}>Banarasi Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/maheshwari") || sethumburger(false)}>Maheshwari Silk</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/raw") || sethumburger(false)}>Raw Silk Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/mysore") || sethumburger(false)}>Mysore Silk Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/sambalpuri") || sethumburger(false)}>Sambalpuri Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/kalamkari") || sethumburger(false)}>Kalamkari Print Saree</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/madhubani") || sethumburger(false)}>Madhubani Print Sarees</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownToggle className="bg-white text-dark border border-0">COTTON</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => navigate("/bengali") || sethumburger(false)}>Bengali Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/maheshwari") || sethumburger(false)}>Maheshwari Cotton</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/jaipur") || sethumburger(false)}>Jaipur Cotton</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/south") || sethumburger(false)}>South Cotton Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/office") || sethumburger(false)}>Office Wear Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/khadi") || sethumburger(false)}>Dr.Khadi</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/block") || sethumburger(false)}>Block Printed Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/bagru") || sethumburger(false)}>Bagru Print Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/ajrakh") || sethumburger(false)}>Ajrakh Print Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/ikkat") || sethumburger(false)}>Ikkat Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/chanderi") || sethumburger(false)}>Chanderi Cotton Silks</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/kalamkari") || sethumburger(false)}>Kalamkari Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/madhubani") || sethumburger(false)}>Madhubani Print Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/blouse") || sethumburger(false)}>Blouses</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownToggle className="bg-white text-dark border border-0">
                                        <Link to="/linen" onClick={() => sethumburger(false)} className="text-dark text-decoration-none">LINEN</Link>
                                    </DropdownToggle>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownToggle className="bg-white text-dark border border-0">REGIONAL</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => navigate("/sambalpuri") || sethumburger(false)}>Sambalpuri Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/kanjivaram") || sethumburger(false)}>Kanjivaram Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/benagali") || sethumburger(false)}>Bengali Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/mysore") || sethumburger(false)}>Mysore Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/meheshwari") || sethumburger(false)}>Maheshwari Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/karnataka") || sethumburger(false)}>Karnataka Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/tamilnadu") || sethumburger(false)}>Tamilnadu Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/banarsi") || sethumburger(false)}>Banarasi Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/banarsi") || sethumburger(false)}>Banarasi Dupatta</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownToggle className="bg-white text-dark border border-0">BANARASIA</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => navigate("/banarsi") || sethumburger(false)}>Banarasi Sarees</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/banarsi") || sethumburger(false)}>Banarasi Dupatta</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/banarsi") || sethumburger(false)}>Banarasi Dress Material</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownToggle className="bg-white text-dark border border-0">DESIGNER SAREES</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => navigate("/dress") || sethumburger(false)}>Dresses</DropdownItem>
                                        <DropdownItem onClick={() => navigate("/blouse") || sethumburger(false)}>Blouse</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownToggle className="bg-white text-dark border border-0">
                                        <Link to="/media" onClick={() => sethumburger(false)} className="text-dark text-decoration-none">MEDIA NEWS</Link>
                                    </DropdownToggle>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownToggle className="bg-white text-dark border border-0">INTERNATIONAL</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>USA</DropdownItem>
                                        <DropdownItem>Australia</DropdownItem>
                                        <DropdownItem>Malaysia</DropdownItem>
                                        <DropdownItem>New Zealand</DropdownItem>
                                        <DropdownItem>Canada</DropdownItem>
                                        <DropdownItem>Sri Lanka</DropdownItem>
                                        <DropdownItem>Singapore</DropdownItem>
                                        <DropdownItem>France</DropdownItem>
                                        <DropdownItem>South Africa</DropdownItem>
                                        <DropdownItem>Fiji</DropdownItem>
                                        <DropdownItem>United Kingdom</DropdownItem>
                                        <DropdownItem>UAE</DropdownItem>
                                        <DropdownItem>Mauritius</DropdownItem>
                                        <DropdownItem>Netherlands</DropdownItem>
                                        <DropdownItem>Italy</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <hr />
                            <div id="navfoot" className="d-flex justify-content-between">
                                <ul>
                                    <li onClick={() => navigate('/about')}><Link className="text-dark" onClick={() => sethumburger(false)} >About Us</Link></li>
                                    <li><Link className="text-dark" to="/contact" onClick={() => sethumburger(false)}>Contact Us</Link></li>
                                    <li> <Link className="text-dark" to="/blog" onClick={() => sethumburger(false)}>Blog</Link></li>
                                    <li> <Link className="text-dark" to="/media" onClick={() => sethumburger(false)}>Media News</Link></li>
                                </ul>
                                <ul>
                                    <li onClick={() => navigate('/banarsi') || sethumburger(false)}><Link className="text-dark" >Banarasi</Link></li>
                                    <li><Link className="text-dark" onClick={() => sethumburger(false)} to="/handloom">Handloom</Link></li>
                                    <li> <Link className="text-dark" onClick={() => sethumburger(false)} to="/certificate">Certificate</Link></li>
                                    <li> <Link className="text-dark" onClick={() => sethumburger(false)} to="/account">Log in</Link></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="social d-inline-flex justify-content-center">
                            <span className="m-2" onClick={() => sethumburger(false)}> <Facebook /></span>
                            <span className="m-2" onClick={() => sethumburger(false)}>  <Instagram /></span>
                        </div>
                    </Modal>

                </div>
            </div>
            <div id="slider" className="container-fluid bg-dark text-white">
                <Slider {...Setting}>
                    <div className="text-center">
                        <p style={{ cursor: 'grab' }} >HASSLE-FREE RETURNS 7 Days Easy Returns</p>
                    </div>
                    <div className="text-center">
                        <p style={{ cursor: 'grab' }} >GET 10% OFF (MIN SHOPPING 2500 RS) -coupon code 'happy 10'</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
