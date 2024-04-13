import "./ecommerce.css";
import c1 from "./Images/handloom-industry-in-india_540x.webp";
import c2 from "./Images/mobile_wedding_banner_540x.jpg";
import c3 from "./Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "./Images/bharatsthali-logo_360x.avif";
import { Link } from "react-router-dom";
import { EmailOutlined, Facebook, Instagram } from "@mui/icons-material";

export function Contact() {
    return (
        <div className="container-fluid-lg">
            <div id="contact" className="mt-5">
                <h3 className="text-center">WE ARE HERE - YOU CAN KEEP IN TOUCH WITH  US <br /> ANYTIME</h3>

                <div className="contact d-flex justify-content-center align-items-center">
                    <p>Contact Us: <br />
                        <ul>
                            <li>namaskaram@bharatsthali.com</li>
                            <li>+91 95 01666 977</li>
                            <li>+91 819999 5288 - <span className="fw-bold">Vendor Business Inquiry</span>  </li>
                        </ul>
                    </p>
                </div>
                <h3 className="text-center">COLORFUL SAREES ONLINE ON BHARAT STHALI</h3>
                <p className="text-center text-justify">
                    The traditional drape gets a digital makeover with us! Bringing you an array of much-adored desi sarees
                    at your fingertips, we are <br /> here to make your every moment a special and colourful one.
                </p>
                <h3 className="text-center">LATEST TREND IN COLORFUL SAREES</h3>
                <p className="text-center text-justify">Available in silk, cotton, linen, jute, chiffon georgette and blends, the sarees are perfect to bring some calm and colour to your day to day life. Perfect for work wear, party and special occasions such as weddings and puja,
                    these sarees are comfortable to wear and can easily be maintained for life with little care.</p>
                <p className="text-center">Whether you are looking for Kerala silk sarees with solid colours or want dual-toned Kota Doria cotton sarees to wear to work, here is everything to make your day look cheerful and colourful as it gets. Complement your traditional look with
                    minimal makeup, a pair of matching heels and a beautiful hairdo.</p>

                <h3 className="text-center">HANDCRAFTED PERFECTION OF TIMELESS TREASURES</h3>
                <p className="text-center">So, don't wait and get ready to add the most sought-after sarees
                    to your wardrobe! Let your wardrobe this season be full of traditional colours! Buy colourful
                    sarees online on Bharat Sthali and get authentic handloom products delivered right to your doorsteps.
                    Order colourful silk and cotton sarees with us and don’t forget to avail online saree shopping perks
                    such as Cash on Delivery and a 7-day return guarantee available on selected products.
                </p>
            </div>
            <hr />
            <div className="">
                <div className="row w-100">
                    <div className="col-lg-4 col-sm-12 col-12">
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
                    <div className="col-lg-4 col-sm-12 col-12">
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
                    <div className="col-lg-4 col-sm-12 col-12">
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