import { Link, useNavigate } from "react-router-dom";
import homeImage from "./Images/karwa_chauth_sarees_3024x.webp";
import homeImage2 from "./Images/bharatsthali_sarees_home_300x.webp";
import F1 from "./Images/f1.webp";
import F2 from "./Images/f2.webp";
import F3 from "./Images/f3.webp";
import F4 from "./Images/handloom.webp";
import F5 from "./Images/f5.webp";
import F6 from "./Images/f6.webp";
import F7 from "./Images/f7.webp";
import F8 from "./Images/f8.webp";
import o from "./Images/offer0.webp";
import d from "./Images/d.webp";
import offer from "./Images/offer1.webp";
import o2 from "./Images/offer2.webp";
import c1 from "./Images/handloom-industry-in-india_540x.webp";
import c2 from "./Images/mobile_wedding_banner_540x.jpg";
import c3 from "./Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "./Images/bharatsthali-logo_360x.avif";
import "./ecommerce.css";
import { CurrencyRupee, EmailOutlined, Facebook, Instagram } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home(props) {
    const navigate = useNavigate();
    const [product, setProduct] = useState({ Items: [{ products: [] }] });
    useEffect(() => {
        axios.get("allproduct.json").then((res) => {
            setProduct(res.data)
        })
    },);

    function Image(e, id) {
        const ids = product.Items.find(itm => itm.id === id);
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
            const width = ids.width;
            const id = ids.id;
            navigate('/main', { state: { info: info, info2: info2, img1: img1, img2: img2, img3: img3, price: price, desc: desc, desc2: desc2, length: length, width: width,id:id } })
        }
    }

    return (
        <div id="home" className="container-fluid-lg">
            <div className="home-image w-100">
                <div id="card1" style={{ border: 'none' }} className="card">
                    <img id="img" data-src="//www.bharatsthali.com/cdn/shop/files/karwa_chauth_sarees_{width}x.jpg?v=1662621034"
                        data-aspectratio="1.621782178217822"
                        data-sizes="auto"
                        alt="Karwa Chauth Sarees Online"
                        style={{ objectPosition: "top center" }} src={homeImage} className="img-fluid opacity-100 w-100" />
                    <div className="card-img-overlay">
                        <div className="card-body">
                            <div id="cardtext" className="card-text text-white text-center mt-5">
                                <h3 style={{ fontFamily: 'Georgia', fontWeight: 'bold', color: '#ffffff' }}>Your Love for Sarees</h3>
                                <h2 style={{ fontFamily: 'Georgia', fontWeight: 'bold', color: '#ffffff' }}>Beautifully Crafted Handloom Sarees</h2>
                                <p style={{ fontFamily: 'Arial', color: '#ffffff', fontSize: '18px' }}>By Indian Artisans</p>
                                <div className="btn">
                                    <button onClick={() => navigate("/gift")} className="btn btn-dark text-white fw-bold m-2">SHOP THIS</button>
                                    <button onClick={() => navigate("/banarsi")} className="btn btn-dark fw-bold m-2">SHOP BANARASI</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*mobile */}

                <div className="w-100 mx-auto h-100" id="card2">
                    <div className="card">
                        <img src={homeImage2} className="img-fluid" data-src="//www.bharatsthali.com/cdn/shop/files/bharatsthali_sarees_home_{width}x.jpg?v=1709469770"
                            data-aspectratio="0.8"
                            data-sizes="auto"
                            alt="Sarees Online India"
                            style={{ objectPosition: "top center" }} />
                        <div className="card-img-overlay">
                            <div id="cardtext" className="card-text mt-5 text-center" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', color: '#ffffff' }}>
                                <h5 style={{ fontFamily: ' var(--typeBasePrimary), var(--typeBaseFallback);', fontWeight: 'bold', }}>Your Love for Sarees</h5>
                                <h2 style={{ fontFamily: 'Georgia', fontWeight: 'bold' }}>Beautifully Crafted Handloom Sarees</h2>
                                <p style={{ fontFamily: 'Arial', fontSize: '18px' }}>By Indian Artisans</p>
                                <div className="btn">
                                    <button onClick={() => navigate("/gift")} className="btn btn-dark text-white fw-bold m-2">Shop This</button>
                                    <button onClick={() => navigate("/banarsi")} className="btn btn-dark fw-bold m-2">Shop Banarasi</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="sareelist">
                    <h5 className="text-center m-3">CHOOSE YOUR SAREE ONLINE</h5>
                </div>

            </div>
            <div id="sarilist" className="row w-100">
                <div className="col-6 col-lg-3  bg-white">
                    <div onClick={() => navigate("/linen")} className="card m-3">
                        <img src={F1} className="img-fluid" alt="" />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <button className="bg-white text-dark border border-0 p-1">LENIN SAREES</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3  bg-white">
                    <div onClick={() => navigate("/banarsi")} className="card m-3">
                        <img src={F2} className="img-fluid" alt="" />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <button className="bg-white text-dark border border-0 p-1">BANARASI SAREES</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3  bg-white">
                    <div onClick={() => navigate("/softsilk")} className="card m-3">
                        <img src={F3} className="img-fluid" alt="" />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <button className="bg-white text-dark border border-0 p-1">BRIDAL SILK SAREES</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3  bg-white">
                    <div onClick={() => navigate("/handloom")} className="card m-3">
                        <img src={F4} className="img-fluid" alt="" />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <button className="bg-white text-dark border border-0 p-1">HANDLOOM SILK</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3  bg-white">
                    <div onClick={() => navigate("/blouse")} className="card m-3">
                        <img src={F5} className="img-fluid" alt="" />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <button className="bg-white text-dark border border-0 p-1">READY MADE BLOUSE</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3  bg-white">
                    <div onClick={() => navigate("/kanjivaram")} className="card m-3">
                        <img src={F6} className="img-fluid" alt="" />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <button className="bg-white text-dark border border-0 p-1">KANJIVARAM SAREE</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3  bg-white">
                    <div onClick={() => navigate("/ikkat")} className="card m-3">
                        <img src={F7} className="img-fluid" alt="" />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <button className="bg-white text-dark border border-0 p-1">IKKAT SAREE</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3  bg-white">
                    <div onClick={() => navigate("/maheshwari")} className="card m-3">
                        <img src={F8} className="img-fluid" alt="" />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <button className="bg-white text-dark border border-0 p-1">MAHESHWARI</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="offer mt-5 w-100">
                <div className="row w-100 justify-content-center">
                    <div className="col-12 col-lg-6">
                        <div className="card w-100 h-70 border border-dark m-2">
                            <div className="d-flex">
                                <img src={offer} alt="" className="img-fluid w-25 h-70" />
                                <img src={o} className="img-fluid w-25 h-70" alt="" />
                                <div className="mt-5 mx-5 text-center">
                                    <p>  UP TO <br />
                                        <span className="fw-bold h2">30% OFF</span> <br />
                                        ETHNIC SAREES
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="card border border-dark m-2 w-100 h-70">
                            <div className="d-flex">
                                <img src={F7} alt="" className="img-fluid w-25 h-70" />
                                <img src={o2} className="img-fluid w-25 h-70" alt="" />
                                <div className="mt-5 mx-5 text-center">
                                    <p> UP TO <br />
                                        <span className="h2 fw-bold">30% OFF</span> <br />
                                        HANDLOOM SAREES
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addvertise">
                    <div className="card h-100 w-100">
                        <iframe id="YouTubeVideo-ba1b5e9c-3109-42e0-bb95-2da230a450c8" height={"700px"} className="video-div " data-type="youtube" data-video-id="GDLt1CA8Ohg" frameborder="0" allowfullscreen="true" autoplay allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Bharatsthali Sarees &amp; Dress Material @ Wedding Shopping Chandigarh" src="https://www.youtube.com/embed/GDLt1CA8Ohg?autohide=0&amp;cc_load_policy=0&amp;controls=0&amp;fs=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.bharatsthali.com&amp;widgetid=1" tabindex="-1"></iframe>
                    </div>
                </div>
                <div className="container-fluid-lg mt-5">
                    <h3 className="text-center">FESTIVE COLLECTION</h3>
                </div>
                <div id="product" className="row align-items-center mx-auto justify-content-center w-100">
                    {product.Items.map((resp, index) => (
                        <div className="col-lg-2 col-sm-2 col-xs-2 col-5 m-2" key={index}>
                            <div className="card">
                                <img style={{ cursor: 'pointer' }} onClick={(e) => Image(e, resp.id)} id={resp.id} src={resp.images} className="img-fluid" alt="" />
                                <h6 className="text-center d-none fw-lighter">{resp.id}</h6>
                                <div className="card-body">
                                    <div id="homecardtext" className="card-text">
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
                    <h3 style={{ cursor: 'pointer' }} className="text-center bg-dark text-white w-50 fw-lighter mt-3"><Link to="/softsilk" className="text-white text-decoration-none">VIEW ALL</Link></h3>
                </div>
                <div className="container-fluid-auto mx-auto w-100 mt-5">
                    <div className="card p-2">
                        <img src="https://www.bharatsthali.com/cdn/shop/files/bharatsthali-home_1800x.jpg?v=1618763039" className="img-fluid w-100" alt="img" />
                        <div id="sticker" className="card-img-overlay w-25 p-2 mx-3 mt-3">
                            <div className="card-body bg-light text-dark">
                                <h4 className="fw-lighter">IMPRESSIVE</h4>
                                <h3>ETHNIC SAREES ONLINE</h3>
                                <p className="text-justify ">
                                    More than 5000 designs in sarees are available in stock. A range of pure silk sarees is available at your fingertips for you to explore and choose. Shop from the comforts of your surrounding and look for what you want. No bargaining or haggling, but certainly various options for online sari shopping in India, such as Cash on Delivery, a 2-day returns guarantee and so on!
                                </p>
                            </div>
                        </div>
                        <div id="sticker2" className="card-img-overlay ">
                            <div className="card-body bg-light text-dark">
                                <h4 className="fw-lighter">IMPRESSIVE</h4>
                                <h3>ETHNIC SAREES ONLINE</h3>
                                <p className="text-justify ">
                                    More than 5000 designs in sarees are available in stock. A range of pure silk sarees is available at your fingertips for you to explore and choose. Shop from the comforts of your surrounding and look for what you want. No bargaining or haggling, but certainly various options for online sari shopping in India, such as Cash on Delivery, a 2-day returns guarantee and so on!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="container">
                    <h3 className="text-center">FROM THE JOURNAL</h3>
                    <p className="d-flex justify-content-center p-2">
                        <Link to="/blog" className="text-dark text-center border bg-white text-decoration-none">VIEW ALL</Link>
                    </p>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row w-100">
                        <div className="col-lg-4 col-12">
                            <div className="card h-50">
                                <img src={d} className="img-fluid h-100" alt="" />
                                <div className="card-body">
                                    <div className="card-text">
                                        <p className="text-center">Jul 17, 2023</p>
                                        <h6 className="text-center">Which Cities are Famous for Silk Sarees in India?</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="card h-50">
                                <img src="https://www.bharatsthali.com/cdn/shop/articles/linen_and_khadi_fabric_difference_540x.jpg?v=1650717864" alt="" className="img-fluid h-100" />

                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <p className="text-center">Apr 23, 2022</p>
                                    <h6 className="text-center">Linen vs Khadi. Which is better Linen or Khadi? Why Linen is so expensive.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="card h-50">
                                <img src="https://www.bharatsthali.com/cdn/shop/articles/Linen_Brands_in_India_fbe43a74-92bb-4341-98ad-5099877e1508_540x.jpg?v=1650725913" alt="" className="img-fluid h-100" />

                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <p className="text-center">Apr 23, 2022</p>
                                    <h6 className="text-center">Best five linen brands in India! (Top 5) Never go Wrong with Linen Fabric</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid" id="info">
                <h3>SAREES SHOPPING ONLINE</h3>
                <p className="text-justify">Bharatsthali has become the best online shopping site in Sarees & ready made Blouses.
                    Bharatsthali brings you an array of silk sarees, cotton sari and linen handloom sarees online.
                    Famously known as pure silk saree brand in India, Bharatsthali Kanchipuram silk sarees are crisp and sheer!
                    A perfect place to buy hand loom silk sari from the best online shopping website for a popular bridal,
                    party wear & reception saree choice.
                    The Bharatsthali Saree, Lehenga & blouse comes from Banaras, South India, Bihar, Rajasthan, Kolkata and our fabric
                    has a shining, shimmering, raw and smooth texture. If you are looking to create a dazzling entry to a wedding or special event,
                    this has to be your go-to option! If you are looking for our nearby silk saree store in your city,
                    you can find store locator option form contact us page.</p>

                <h3>ETHNIC SAREE BRAND IN INDIA</h3>
                <p className="text-justify">BharatSthali has become a major brand in saris in India. Its a perfect place for doing shopping for cotton
                    sarees and party wear dresses, where you are buying directly from the weavers of India. Find your near by Bharatsthali sarees store
                    for a perfect saree experience</p>
                <h3>HAND CRAFTED SAREES ONLINE IN INDIA</h3>
                <p className="text-justify">BharatSthali has become the one stop destination to buy ready made sari blouses online in India. Exquisite and elegant,
                    the saree & blouse online collection at Bharatsthali is worth checking out.</p>
                <h3>WHY BHARATSTHALI FOR SAREES & BLOUSES?</h3>
                <h6>EACH ONLINE SAREE & BLOUSE IS DELIVERED WITH CARE</h6>
                <p className="text-justify">
                    Vibrant, smooth and lustrous- the handwoven sarees at Bharatsthali are everything that a sari symbolizes. Deemed as the pride of various states of India and a must for ceremonies and religious affairs,
                    this saree adds a dash of festivity and tradition to your wardrobe.
                </p>
                <p>These handloom weaves are crafted with the purest of silk yarn, shiniest of threads, magnificent of patterns and require painstaking efforts. Capable of turning out to be your most-treasured wardrobe staple, the saris with Bharatsthali could be low-keys,
                    something that can be worn daily or a potential dreamlike ensemble reserved for special occasions.</p>

                <h3>WHAT MAKES BHARATSTHALI A ONE-STOP BLOUSE SHOPPING DESTINATION?</h3>
                <h6>DIVERSIFY COLLECTION OF BLOUSES</h6>
                <p>A highly diversified range of readymade blouses with sarees awaits you at Bharatsthali! Whether you are looking for a classic investment of Kanjivaram Sari or Banarasi Sari or sleeveless blouses, a formal wear Chanderi with a dash of contemporary, an elegant Kalamkari, Ajrakh or Ikkat drape to vibe with the Bohemian spirit in you, you get them all here! An all-women team handpicks the sarees.
                    The Government of India has certified Bharatsthali silk sarees with Silk Mark India, vouching for their authenticity and purity.</p>
                <p>So, if you don’t want to wander from one shop to another and wish to buy only authentic handloom sarees, Bharatsthali is where you should be! Make your wedding shopping and everyday saree with blouse shopping a lot easier with Bharatsthali!</p>
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