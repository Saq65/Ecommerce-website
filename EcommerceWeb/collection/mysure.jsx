import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ecommerce.css";
import { Link } from "react-router-dom";
import c1 from "../Images/handloom-industry-in-india_540x.webp";
import c2 from "../Images/mobile_wedding_banner_540x.jpg";
import c3 from "../Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "../Images/bharatsthali-logo_360x.avif";
import { CurrencyRupee,Instagram,Facebook,EmailOutlined } from "@mui/icons-material";

export function Mysore(props) {
    const [product, setProduct] = useState({ Items9: [{ products: [] }] });

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
                <h5 className="">MYSORE SILK SAREES ONLINE</h5>
                <p className="text-justify">
                    BharatSthali brings you a wide selection of Mysore sarees online. Choose from a range of sarees that complements your special moments as well as day-to-day life.
                    The sarees here bring home the beautiful imprints of the Kingdom of Mysore and are as vibrant and opulent as the royalty you associate the city with.
                </p>
            </div>
            <div id="product" className="row align-items-center mx-auto justify-content-center w-100">
                {product.Items9.map((resp, index) => (
                    <div className="col-lg-2 col-sm-4 col-6" key={index}>
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
            <div className="mt-4 mx-3">
                <h3>MYSORE SILK SAREES ONLINE ON BHARATSTHALI</h3>
                <p className="text-justify text-fluid">
                    The <Link to="/softsilk">silk sarees</Link> from Mysore are 100 per cent pure silk and has gold zari work on them.
                    The gold zari in Mysore is made of 65 percent pure silver and 0.65 per cent gold. The process of weaving a Mysore silk saree
                    and zari sari has evolved from the era of kings, only to be perfected and made more beautiful since then.
                </p>
                <p className="text-justify text-fluid">
                    With us, you have a range of silk and cotton in India available at your fingertips.
                    Whether you are wearing a saree for the first time or have Mysore silk sarees as family heirlooms,
                    here is the silk route you should definitely take and explore.
                </p>
                <h3>LATEST TREND IN MYSORE SILK SAREES WEAR</h3>
                <p className="text-justify text-fluid">
                    The selection of Mysore sarees online India on Bharat Sthali is available not only in silk but also cotton, georgette,
                    chiffon and <Link to="/softsilk">crepe silk</Link>. Our aim is to bring you traditional attire not only for a special occasion but for the times when you could
                    use some magic and wardrobe overhaul. So, find sarees that are meant for your day-to-day life and can transform them into golden moments
                    instead. These crepe, poly, and cotton Mysore sarees are easy to care and can be washed at home. Wear these wonderful,
                    easy on eyes and lightweight Maheshwari
                    cotton sarees to your work and day events. These are vibrant hues and so comfortable that you can wear them all day and shine as well.
                </p>
                <p className="text-justify">
                    Team up your Mysore silk saree with a matching blouse, heels and traditional golden Jhumkas for added bling. The cotton or georgette Mysore sarees can be teamed
                    up with a pair of simple earrings, nose ring or whatever you think that go with them.
                </p>
                <p className="text-justify">
                    You can order perfect crafted Mysore sarees for your mother or give a surprise gift of pure Mysore handloom wear to your sister for a special day.
                    Here we have built up some very finely crafted crafts from local villages of Karnataka.
                </p>
                <h3>HANDCRAFTED PURE MYSORE SAREES WITH PERFECTION</h3>
                <p className="text-justify">
                    <Link to="/">BharatSthali.com</Link> values your faith and money you have entrusted us with. You can, of course,
                    go to the local shops and several online platforms, but with us, you have the assurance of quality and originality.
                    Bringing you an heirloom, traditional and contemporary threads at one place, BharatSthali is committed
                    to giving you the best value for your money in this fair trade. We have partnered directly with the artists
                    and craftsmen to bring you the best and authentic
                    of traditional Mysore and timeless treasures to your doorsteps, minus the middle channels.
                </p>
                <h3>GET MYSORE HANDLOOM SAREES ONLINE</h3>
                <p className="text-justify">
                    Buy Mysore sarees online on BharatSthali and let us deliver a bit of happiness to your doorsteps anywhere in India or the world.
                    It is your time to shine and the best part is, you don’t have to roam around here and there to get the best value for your money
                    and still have
                    the nagging worry that if you have the authentic Mysore silk or not. Shop with us for the best and authentic of handcrafted yarns.
                </p>
                <h3>DRAPE MYSORE DRESS, THE WAY YOU WANT IT!</h3>
                <p>Don’t make your mommy or grandmother a benchmark because she is a pro at it and you have just learnt the word. So,
                    take baby steps and find out what exactly you like! Do you really want to wear an embroidery saree that has a heavy border
                    or the zardozi saree with an equally embellished brocade blouse? Or you would like to rock a vintage saree with big prints
                    with a noodle-strap blouse? Rather than going for a dhoti-style saree
                    and something Insta-worthy yet crazy drape, a traditional style saree drape is the best for you if you are trying
                    a saree for the first time.</p>
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