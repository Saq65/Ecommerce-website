import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ecommerce.css";
import { Link, useNavigate } from "react-router-dom";
import c1 from "./Images/handloom-industry-in-india_540x.webp";
import c2 from "./Images/mobile_wedding_banner_540x.jpg";
import c3 from "./Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "./Images/bharatsthali-logo_360x.avif";
import { CurrencyRupee, EmailOutlined, Facebook, Instagram, TuneOutlined } from "@mui/icons-material";
import { Modal } from "react-bootstrap";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";

export function Banarasi(props) {
    const [product, setProduct] = useState({ Items3: [{ products: [] }] });
    const [write, setwrite] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('allproduct.json').then((res) => {
            setProduct(res.data);
        });
    }, []);

    function Image(e, id) {
        const ids = product.Items3.find(itm => itm.id === id);
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
        <div className="container-fluid-lg ">
            <div id="silkoffer" className="container-fluid text-center  mt-4">
                <h3>MADE WITH LOVE <span className="h6 fw-lighter">   Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</span></h3>
            </div>
            <div id="sareeInfo " className="m-4 mx-3">
                <h5 className="">BANARASI SAREES ONLINE</h5>
                <p className="text-justify">
                    BharatSthali comes together with Banaras weavers to bring a bit of royal aura to your wardrobe with these Banarasi Sarees.
                    Presenting you with only the authentic Banarasi Saree from the weavers of Varanasi, Jaunpur, Azamgarh, Chandauli, Bhadohi and Mirzapur,
                    we promote fair trade and natural dyes in Banaras Silk sarees as recommended by IIT-BHU and the Weaver Association of Uttar Pradesh.
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
                {product.Items3.map((resp, index) => (
                    <div className="col-lg-2 col-md-3 col-6" key={index}>
                        <div className="card ">
                            <img style={{ cursor: 'pointer' }} onClick={(e) => Image(e, resp.id)} id={resp.id} src={resp.images} className="img-fluid" alt="" />
                            <h6 className="text-center d-none fw-lighter">{resp.id}</h6>
                            <div className="card-body">
                                <div className="card-text">
                                    {resp.products.map((itm, i) => (
                                        <div key={i}>
                                            <h6 style={{ fontSize: "small" }} className="text-justify  text-center">{itm.name}</h6>
                                            <p><sup><CurrencyRupee className="fs-6" /></sup>{itm.price}</p>
                                            <button className="btn btn-dark d-none w-100" value={resp.id} onClick={props.onClick}>Add to Cart</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-fluid mt-3">
                <h4>BANARASI SILK SAREES ONLINE ON BHARATSTHALI</h4>
                <p className="text-justit">
                    BharatSthali joins hands with weavers from Banaras to bring you the most valuable possession in a woman’s
                    wardrobe - Banarasi Saree! Every woman’s dream, a Banarasi saree is the prime example of India’s Ganga Jamuna tehzeeb.
                    The art of weaving silk and gold zari flourished in Mughal era, which until now is cherished by every woman, especially brides.
                    Religion, age and politics, all cease to exist when it comes to the opulent silk saga of Banaras. The handloom silk for Banaras sarees
                    come from <Link to="/south"> South India</Link>. With Persian and Mughal motifs like bel, kalga, leaves or jhallar, zari,
                    detailing of silver brocade and gold brocade, a Banarasi saree India can take up to weeks, months or even a year to prepare.
                </p>
                <h5>LATEST TREND IN BANARASI SAREES</h5>
                <p className="text-justify">
                    The weaving of a Banarasi saree is intricate and intense. The design is prepared beforehand on the paper and sometimes,
                    might require over a thousand perforated cards. At least three people are required to realize the weaving process.
                    An expert artist should be there to focus on the weaving of the silk yarn,
                    one to dye it and another craftsman to bundle the prepared thread.
                </p>
                <p className="text-justify">
                    The famous Jamdani sarees are also a variation of Banarasi silk, in which silk brocade is stitched with cotton.
                    A Banarasi saree with a customized or royal design might take a few years to prepare.
                </p>

                <h5>SILK RESPLENDENCE AT YOUR FINGERTIPS</h5>
                <p className="text-justify">
                    At BharatSthali, you have all four varieties of Banarasi saree including organza in zari and silk, georgette,
                    shattir and pure silk or katan.
                    The range also covers Banarasi silk design such as cutwork, tissue, tanchoi, vaskat, jangla and butidar.
                </p>
                <p className="text-justify">
                    The Banaras silk sarees India online come up with a certificate of authenticity to make you feel assured that your money
                    was well-spent on an original product. We value your faith and hard-earned money as well as understand your efforts towards
                    buying a handicraft. So, rest assured that whether you are buying Banarasi Jamdani silk for your daughter’s trousseau or
                    want to upgrade your wardrobe to the royal style,
                    you only get 100 percent original Banarasi silk saree online only on BharatSthali.com.
                </p>
                <h3>ROYAL SAREES FROM HOUSE OF BANARAS</h3>
                <p className="text-justify">
                    Create a royal magic for yourself! Shop for Banarasi silk saree online on BharatSthali and get authentic silk sarees delivered to your doorsteps anywhere in India or the world! The charm of traditional handwoven Banarasi silk is beyond words and time. An heirloom for the posterity and a prized possession for you, a Banarasi silk is forever. Banarasi silk saree is meant to complement the happy days of your life!
                    Want to perk up a routine day, wear a Banarasi saree to overwhelm with you its sheer exuberance and opulence.
                </p>
                <h4>FREQUENTLY ASKED QUESTIONS ABOUT BANARASI SAREES</h4>
                <h6 className="mt-5">WHAT IS THE BANARASI SARI?</h6>
                <p className="text-justify">
                    Banarsi sari is a pre handloom crafted with golden or zari over it. Its takes 2 days to 60 days to prepare a single banarasi carft over it. The weavers in Banaras weave dreams- quite the opposite to the ‘whys’ that bring many to the city-the impermanence of human life. The flowers embroidered in golden or copper
                    threads on pure silk saree - it is the gold standard as far as the handloom weaves go and a must-have for all.
                </p>

                <h6 className="mt-3">HOW TO FIND PURE HANDLOOM BANARASI SAREE?</h6>
                <p className="text-justify">
                    Bharatsthali brings you a hand-picked selection of Banarasi saree online. Available in different patterns, colours and design, our collection of fabrics are versatile. The weaving pattern of these fabrics are kadhwa, katarwan and phekwa.
                    It takes almost a month to weave a Banarasi fabric with such detailing of shapes and designs.
                </p>
                <h6 className="mt-3">WHAT ARE THE PATTERS AVAILABLE OVER BANARASI SARI?</h6>
                <p className="text-justify">
                    From the classic jangla fabric with a pattern of the beetle leaf or flowers or the interlaced shikargah fabric with the design of the hunt and the wilderness, from the heavily embellished Mogul kimkhwab to tanchoi, cutwork brocade and Tibetan Gyasar- our collection is what your dreams for Banarasi weaves are made of! The classic Banarasi silk saree is also available in organza, tissue, and the blend of silk and cotton.
                    We also have plain pure silk fabric, spun silk fabric and mosaic brocade fabric available at your fingertips!
                </p>
                <h6 className="mt-3">HOW TO BUY PURE BANARASI SAREE ONLINE?</h6>
                <p className="text-justify">
                    We are a fair-trade market and a direct manufacturer of Banarasi sarees online. There is no middle sale channel involved in bringing authentic and pure fabric to you. It helps us in having direct control over the purity and authenticity of the sari and also gives the weavers a say in quoting the price. It enables fair opportunity and fair price to the weavers who do all the hard work. Since you receive handloom sari online directly at our platform, the end cost doesn’t include any excessive compensation towards the touts or agents. Moreover,
                    our silk fabrics are certified with Silk Mark India by the Government of India vouching for their authenticity.
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