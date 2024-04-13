import "./ecommerce.css";
import c1 from "./Images/handloom-industry-in-india_540x.webp";
import c2 from "./Images/mobile_wedding_banner_540x.jpg";
import c3 from "./Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "./Images/bharatsthali-logo_360x.avif";
import { Link } from "react-router-dom";
import { EmailOutlined, Facebook, Instagram } from "@mui/icons-material";

export function About() {
    return (
        <div className="container-fluid-lg">
            <div id="about" className="container d-flex justify-content-center">
                <div className="heading mt-5">
                    <h2 className="text-uppercase text-center">About us</h2>
                    <div className="content mt-3">
                        <h3>BHARAT STHALI: DISCOVER AND LIVE WITH TRADITIONS</h3>
                        <p className="text-justify">Bharat, the name is reminiscent of the diversity, rich traditions, the transition that she went through all those years, resulting in the vibrant colours, finest fabrics and splashes of cultures.
                            Isn’t it fascinating that how we have walked through the spans of time and borrowed the legacy of each period?</p>

                        <p className="tex-justify">BharatSthali takes you through a journey of the rich heritage of India while bringing you the regional specialty and character with each
                            fabric. Time travel through the passages of history and discover the finest of crafts and the best of weaving with us.
                            Bringing together the textile designers, artisanal communities, weavers and artists, here’s a contemporary platform that meets the
                            delightful treasures and doesn’t fade them out.</p>

                        <h3>WHAT IS BHARAT STHALI?</h3>
                        <p className="text-justify">Your one-stop treasure trove to find sarees online from each part of India! Be it Gujarat’s jamdani patola, Telangana’s uppada pattu or Banaras’s Banarasi silk here is an exquisite collection of delightful craftsmanship!</p>

                        <h6>WHAT MAKES BHARAT STHALI THE PERFECT SAREE SHOPPING DESTINATION?</h6>

                        <p className="text-justify">Be at your own leisure and explore the vivacity the traditions of Bharat could bring to you. Your life enriched with tradition, Bharat is known for, with Bharat Sthali.

                        </p>

                        <p className="text-justify">Join us on this wonderful journey and take home the most beautiful of handloom sarees, the nine yards of elegance and opulence, which are as special as they are beautiful. Handpicked and hand-woven, these sarees are the vivid examples of what we were and what we continue to be.

                        </p>
                        <p className="text-justify">
                            Here are the sarees that are meant for every sphere of your life. From workwear to the occasions where you could use that special touch of glimmer, colour and gold!
                        </p>

                        <h3>CELEBRATE TRADITIONS WITH BHARAT STHALI</h3>
                        <p className="text-justify">
                            Making up for the perfect gift for the special women in your life, the sarees presented here are curated especially
                            for them and their occasions. Be it cotton sarees you are looking for to resemble your favourite Bollywood diva’s
                            de-glam avatar she has been sporting these days or you want Kanjivaram sarees to be a part of your wedding trousseau,
                            need pastel colours in pure linen sarees or looking for soft silk sarees that can be worn in daylight, get them all
                            here.
                        </p>
                        <p className="text-justify">
                            A range of sarees is available at your fingertips for you to explore and choose. Shop from the comforts of your
                            surrounding and look for what you want. No bargaining or haggling, but certainly many online saree India shopping
                            options such as Cash on Delivery, a 15-day returns guarantee and so on!
                        </p>

                        <h3>WHAT MAKES BHARAT STHALI THE PERFECT SAREE SHOPPING DESTINATION?</h3>
                        <p className="text-justify">
                            Be at your own leisure and explore the vivacity the traditions of Bharat could bring to you. Your life enriched with tradition,
                            Bharat is known for, with Bharat Sthali.
                        </p>
                        <p className="text-justify">
                            Join us on this wonderful journey and take home the most beautiful of handloom sarees, the nine yards of
                            elegance and opulence, which are as special as they are beautiful. Handpicked and hand-woven, these
                            sarees are the vivid examples of what we were and what we continue to be.
                        </p>

                        <p className="text-justify">
                            Here are the sarees and lehenga that are meant for every sphere of your life. From workwear to the occasions where you
                            could use that special touch of glimmer, colour and gold!
                        </p>

                        <h6>Celebrate Traditions with BharatSthali</h6>

                        <p className="text-justify">
                            Making up for the perfect gift for the special women in your life, the sarees presented here are curated especially
                            for them and their occasions. Be it cotton sarees you are looking for to resemble your favourite Bollywood diva’s de-glam avatar
                            she has been sporting these days or you want Kanjivaram sarees to be a part of your wedding trousseau, need pastel colours in pure
                            linen sarees or looking for
                            soft silk sarees that can be worn in daylight, get them all here.
                        </p>

                        <p className="text-justify">
                            A range of sarees is available at your fingertips for you to explore and choose. Shop from the comforts of your surrounding and
                            look for what you want. No bargaining or haggling, but certainly many online saree India shopping options
                            such as Cash on Delivery, a 15-day returns guarantee and so on!
                        </p>
                    </div>

                </div>
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