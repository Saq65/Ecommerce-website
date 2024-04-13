import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ecommerce.css";
 import c1 from "../Images/handloom-industry-in-india_540x.webp";
import c2 from "../Images/mobile_wedding_banner_540x.jpg";
import c3 from "../Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "../Images/bharatsthali-logo_360x.avif";
import { Link } from "react-router-dom";
import { CurrencyRupee,EmailOutlined,Facebook,Instagram} from "@mui/icons-material";

export function Kalamkari(props) {
    const [product, setProduct] = useState({ Items11: [{ products: [] }] });

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
                <h5 className="">KALAMKARI SAREES ONLINE</h5>
                <p className="text-justify">
                    Bharatsthali sources kalamkari sarees online directly from the weavers and artists in Andhra Pradesh.
                    Andhra Pradesh is the largest producer of these sarees and the art of weaving kalamkari sarees is passed down from one generation
                    to another.                    </p>
            </div>
            <div id="product" className="row align-items-center mx-auto justify-content-center w-100">
                {product.Items11.map((resp, index) => (
                    <div className="col-lg-2 col-sm-12 col-6" key={index}>
                        <div className="card">
                            <img src={resp.images} className="img-fluid" alt="" />
                            <h6 className="text-center d-none fw-lighter">{resp.id}</h6>
                            <div className="card-body">
                                <div className="card-text">
                                    {resp.products.map((itm, i) => (
                                        <div key={i}>
                                            <h6 className="text-justify text-center">{itm.name}</h6>
                                            <p><sup><CurrencyRupee className="fs-6" /></sup>{itm.price}</p>
                                            <button className="btn btn-dark w-100" value={resp.id} onClick={props.onClick}>Add to Cart</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 mx-3">
                <h3>KALAMKARI SAREES ONLINE ON BHARATSTHALI</h3>
                <p className="text-justify">Traditional kalamkari sarees are a sheer delight! A treasure trove of an art form dated back to 3000BC, the kalamkari sarees are simple, elegant and ethereal. The word Kalamkari can be traced to the Persian language in which Kalam means pencil and Kari implies the craftsmanship. The designs are drawn and filled by hand using a pencil. The entire kalamkari work is done manually. Though as much simple it may sound,
                    Kalamkari is an art that involves at least 17 steps including but not limited to block printing, dyeing, hand painting and many more.</p>
                <h3>THE ART OF KALAMKARI SAREE</h3>
                <p className="text-justify">
                    The art form originated and flourished in Andhra Pradesh where people used the walls as a canvas to draw local folklore and religious tales
                    using a chalk or pencil. Like any other local art forms such as <Link to="/madhubani">Madhubani</Link> and Sambhalpuri, a kalamkari art tells stories that
                    we can listen to and become a witness for all our lives! The patronage of Brits in the 18th century helped to flourish the arts.
                    However, it was only in the Mogul rule that the art got its due. You can still see the influence of moguls on the artwork.
                </p>
                <h3>HAND-PAINTED KALAMKARI SAREES ONLINE</h3>
                <p className="text-just">
                    The traditional handloom kalamkari sarees see a depiction of short stories and murals from Ramayana, Mahabharata,
                    Puranas and Panch Tantra. The hand painting and dyeing make Kalamkari sarees
                    a class apart. Depending on your preference, you can go for kalamkari sarees with work on pallu and borders or overall.
                </p>
                <h3>CLASSY AND ELEGANT KALAMKARI SAREES ONLINE ON BHARATSTHALI</h3>
                <p className="text-justify">
                    Bharatsthali Kalamkari sarees are woven only using natural dyes. Whether you are looking for kalamkari silk sarees or kalamkari work in silk cotton, cotton or tussar silk, here is everything that you are looking to give your wardrobe an artsy vibe! Ikat kalamkari sarees available here are the perfect example
                    of exemplary Srikalahasti or freehand kalamkari style, which is monochromatic in nature and is done using a sharp bamboo or pen.
                </p>
                <h3>HAND-PAINTED BEAUTIFUL COTTON AND SILK SAREES WITH KALAMKARI WORK</h3>
                <p className="text-justify">
                    Buy Kalamkari sarees online on Bharatsthali and refresh your wardrobe! Give your traditional wardrobe a bohemian and artistic touch with our saree collection! Order now and get doorsteps delivery across the world! You
                    can pay via debit card, credit card or net banking! You can also avail Cash on Delivery on select products.
                </p>

                <h3>FREQUENTLY ASKED QUESTIONS ABOUT KALAMKARI SAREE</h3>
                <h6 className="fw-bold">WHAT IS A KALAMKARI SAREE?</h6>
                <p className="text-justify">
                    Kalamkari is an artwork performed over a saree with organic handpainted techniques. The beauty of saree is it is rightly made for a woman. It complements a woman’s body like no other outfit.
                    Unlike Western outfits, you don’t have to drop some kilos off the waist or get it altered to suit your height.
                </p>
                <h6 className="fw-bold">WHY KALAMKARI SAREES ARE SO FAMOUS?</h6>
                <p className="text-justify">
                    If you are fond of wearing your style statement on sleeves and love a bright, bold and beautiful statement in the name of a saree, go for kalamkari appliqué in Machlipatnam style.
                    This style sees the use of organic dyes, fermented jaggery, date wax, palm stick, organic astringents, buffalo milk, flower fragrance and indigo dye to illustrate the artwork and craft on the saree.
                    The entire process, irrespective of the handiwork style, remains organic, natural and completely devoid of chemicals.
                </p>
                <h6 className="fw-bold">WHY SHOULD WE WEAR KALAMKARI SAREE?</h6>
                <p className="text-justify">
                    Saree’s colour is an important buying criterion. It not only should match your skin tone but also the occasion’s time, context and backdrop. A bright red saree
                    wouldn’t be a suitable daytime event. Similarly, you wouldn’t want to wear a light-coloured saree for your night event.
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