import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ecommerce.css";
import { Link, useNavigate } from "react-router-dom";
import c1 from "../Images/handloom-industry-in-india_540x.webp";
import c2 from "../Images/mobile_wedding_banner_540x.jpg";
import c3 from "../Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "../Images/bharatsthali-logo_360x.avif";
import { CurrencyRupee, Instagram, Facebook, EmailOutlined, TuneOutlined } from "@mui/icons-material";
import { Modal } from "react-bootstrap";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";

export function Kanjivaram(props) {
    const [product, setProduct] = useState({ Items6: [{ products: [] }] });
    const [write, setwrite] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('allproduct.json').then((res) => {
            setProduct(res.data);
        });
    }, []);

    function Image(e, id) {
        const ids = product.Items6.find(itm => itm.id === id);
        if (ids) {
            const info = ids.images;
            const info2 = ids.products.map(nm => nm.name);
            const img1 = ids.images2;
            const img2 = ids.images3;
            const img3 = ids.images4;
            const price = ids.products.map(pric => pric.price);
            const desc = ids.desc;
            const desc2 = ids.desc2;
            const length = ids.length;
            const id = ids.id;
            const width = ids.width;
            navigate('/main', { state: { info: info, info2: info2, img1: img1, img2: img2, img3: img3, price: price, desc: desc, desc2: desc2, length: length, width: width, id: id } })
        }
    }

    return (
        <div className="container-fluid-lg">
            <div id="silkoffer" className="container-fluid text-center  mt-4">
                <h3>MADE WITH LOVE <span className="h6 fw-lighter">   Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</span></h3>
            </div>
            <div id="sareeInfo " className="m-4 mx-3">
                <h5 className="">KANJIVARAM SAREES ONLINE</h5>
                <p className="text-justify">
                    The Kanchi pattu saree, resplendent colour and pure silk, what is not to love about Kanchipuram sarees at BharatSthali?
                    Offering you a range of famous Lightweight Kanjivaram sarees online, it is your one-stop shop to infuse tradition into your wardrobe
                </p>
            </div>
            <div id="filter" className="mx-5">
                <h3 style={{ cursor: 'pointer' }} className="border text-center p-1" onClick={() => setwrite(true)} ><TuneOutlined /> <span className="p fw-lighter">Filter</span> </h3>
            </div>
            <Modal className="p-2" show={write} onHide={() => setwrite(false)}>
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
            </Modal>
            <div id="product" className="row align-items-center mx-auto justify-content-center w-100">
                {product.Items6.map((resp, index) => (
                    <div className="col-lg-2 col-sm-12 col-6" key={index}>
                        <div className="card">
                            <img style={{ cursor: 'pointer' }} onClick={(e) => Image(e, resp.id)} id={resp.id} src={resp.images} className="img-fluid" alt="" />
                            <h6 className="text-center d-none fw-lighter">{resp.id}</h6>
                            <div className="card-body">
                                <div className="card-text">
                                    {resp.products.map((itm, i) => (
                                        <div key={i}>
                                            <h6 className="text-justify text-center">{itm.name}</h6>
                                            <p className="d-flex align-items-center"><span><CurrencyRupee className="fs-6" /></span>{itm.price}</p>
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
                <h5>KANJIVARAM SILK SAREES ONLINE ON BHARATSTHALI</h5>
                <p className="text-justify">
                    The famous traditional Kanchipuram pattu sarees online get their name from a small town of Tamil Nadu- Kanchipuram.
                    The wide border or prints sprawling across is the trademark of Kanchi silk sarees.
                    The fine <Link to="/softsilk">pure silk</Link> sarees and contrasting border are woven using different threads. The meticulous weaving of yarns is done using Korvai method and is interlinked at every throw, giving the saree a denser count, heavy and super-neat texture. The weaving is a time-consuming process and needs painstaking efforts.
                    No wonder that a Kanjivaram silk saree is always awe-inspiring and makes head turn.
                </p>
                <h6 className="mt-3">LATEST TREND IN TRADITIONAL KANJEEVARAM SILK SAREES</h6>
                <p className="text-justify">
                    Come and join us as we at BharatSthali take you on the journey of this fascinating piece of garment and aim to have at least one of it in your wardrobe without having to go anywhere. Embrace the ages-old tradition of wedding Kanjeevaram silk sarees without paying a fortune for it and worrying about if you have made the right purchase. BharatSthali has partnered with artists and craftsmen to bring you the original and authentic handlooms. Cut the middle channels, opt for the fair trade and pay only for what these brilliant artists deserve for the efforts and meticulous work. If you don’t like the received product, you can exchange or return it, no-questions-asked. However, some products are made-to-order and cannot be exchanged,
                    hence it is requested that you check the product carefully and we have also marked those products.
                </p>
                <h6 className="mt-3">LIGHTWEIGHT PATTU SAREE STYLE STATEMENTS</h6>
                <p className="text-justify">
                    Check out the exclusive collection of traditional pattu sarees online India on BharatSthali, kanchi pattu sarees, lightweight <Link> linen sarees</Link> you can find hiraval, plain, chitra pattu, phoolwala and check pattu motifs. In Dharmavaram pattu, which is expensive and usually a part of wedding trousseau, however, temple motifs can be seen. You can buy Kanchipuram pattu saree for your mother,
                    which is also known as lightweight samudrika pattu sarees, has an intense colour scheme and vivid motifs on border and pallu.
                </p>
                <p className="text-justify">Choose from a fantastic range of lightweight uppada pattu silk sarees India online on BharatSthali
                    and get doorsteps delivery all over the world. Whether you are in India or France, Denmark or the U.S., there is no stopping you from flaunting the best of Indian ethnic wear, not even the price! Since we source sarees directly from the artists and painters, you don’t have to pay extra to compensate the middle channels. Along with this, you also have online shopping India options such as Cash on Delivery and a 7-day returns guarantee on select products.
                </p>
                <h6 className="mt-3">KEEPING THE TRADITION ALIVE WITH KANCHIPURAM</h6>
                <p className="text-justify">
                    The silk for <Link to="/kanjivaram"> Kanjivaram silk saree</Link> is obtained from Tamil Nadu whereas the zari thread is derived from Gujarat.
                    Just imagine how difficult it could be to weave two different yarn into each other so that they complement each other, but stay completely in contrast? Both the traditional Kanchipuram silk Saree and zari patterns are woven separately initially. The border of a pure Kanjivaram silk saree is its main highlight and usually, it is worked on the later stage and is secured on the completion. The pure Kanchipuram silk sarees online is the South India version of North India’s Banaras sarees,
                    not competing but complementing the sheer persistence and creativity of manual efforts.
                </p>

                <h6 className="mt-3">WHAT’S SO SPECIAL ABOUT BHARATSTHALI’S KANJEEVARAM SILK SAREES?</h6>
                <p className="text-justify">Buy Kanchipuram saree online on BharatSthali and give your special moments a golden touch of tradition! The traditional sarees, in fact,
                    make for the perfect gift to your loved ones on occasions like wedding, anniversaries, housewarming and birthdays.</p>

                <p className="text-justify">
                    The Kanchi lightweight sarees online on BharatSthali comes in a range of variety and textures. So, if you are looking for something to work or semi-formal event, choose a lightweight saree with zari work only on the pallu. Indulge in saree shopping online on the most authentic handloom portal, BharatSthali and welcome tradition at the doorsteps. Give your wardrobe a traditional makeover
                    without breaking your budget and going from one shop to another! Order Kanchipuram silk sarees now.
                </p>

                <p className="text-justify">
                    BharatSthali has directly partnered with the artists and weavers to bring you 100 percent <Link to="/handloom">handloom sarees</Link> in silk, cotton, jute, pure linen and georgette. Whether you want a hint of embroidery, a splash of gold or brilliance of colours, you get them here. You don’t have to go from a shop to another
                    to find a saree that you look great on you! Shop from the comforts of your surroundings and order right away.
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
                            <li>Sarees for Wife</li>
                            <li><Link className="text-dark text-decoration-none" to="/kanjivaram">Kanjivaram Silk Sarees</Link> </li>
                            <li>Kerala Kavasu</li>
                            <li><Link className="text-dark text-decoration-none" to="/raw">Raw Silk Sarees</Link>  </li>
                            <li><Link className="text-dark text-decoration-none" to="/softsilk">Soft Silk Sarees</Link></li>
                            <li><Link className="text-dark text-decoration-none" to="/mysore">Mysore Sarees</Link>  </li>
                            <li><Link className="text-dark text-decoration-none" to="/softsilk"> Tussar Silk</Link> </li>
                            <li>Party Wear Sarees</li>
                            <li><Link className="text-dark text-decoration-none" to="/banarsi"> Banarasi Sarees</Link> </li>
                            <li>Readymade Blouses</li>
                            <li>Chandigarh Store</li>
                            <li>Dehradun Store</li>
                            <li>Indore Store</li>
                            <li>Vadodara Store</li>
                            <li>Varanasi Store</li>
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