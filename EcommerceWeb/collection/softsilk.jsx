import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ecommerce.css";
import { Link, useNavigate } from "react-router-dom";
import c1 from "../Images/handloom-industry-in-india_540x.webp";
import c2 from "../Images/mobile_wedding_banner_540x.jpg";
import c3 from "../Images/mobile_wedding_banner_newssss_540x.webp";
import logo from "../Images/bharatsthali-logo_360x.avif";
import { CurrencyRupee, Instagram, Facebook, EmailOutlined, TuneOutlined } from "@mui/icons-material"
import { Modal } from "react-bootstrap";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";

export function SoftSilk(props) {
    const [product, setProduct] = useState({ Items: [{ products: [] }] });
    const [write, setwrite] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('allproduct.json').then((res) => {
            setProduct(res.data);
        });
    }, []);

    function Image(e, id) {
        const ids = product.Items.find(itm=>itm.id === id);
        if(ids){
            const info = ids.images;
            const info2 = ids.products.map(nm=>nm.name);
            const img1 = ids.images2;
            const img2 = ids.images3;
            const img3 = ids.images4 ;  
            const price = ids.products.map(pric=>pric.price);
            const desc = ids.desc;
            const desc2 = ids.desc2;
            const length =  ids.length;
            const id = ids.id;
            const width = ids.width;
            navigate('/main',{state :{ info : info,info2:info2,img1:img1,img2:img2, img3:img3,price:price,desc:desc,desc2:desc2,length:length,width:width,id:id}})
        }
    }

    return (
        <>
            <div className="container-fluid-lg">
                <div id="silkoffer" className="container-fluid text-center mt-4">
                    <h3>MADE WITH LOVE <span className="h6 fw-lighter">   Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</span></h3>
                </div>
                <div id="sareeInfo " className="m-4 mx-3">
                    <h5 className="">SOFT SILK SAREES ONLINE</h5>
                    <p className="text-justify">
                        BharatSthali brings you the widest and choicest selection of soft silk sarees for online shopping at reasonable prices.
                        Browse through and get, set and go for the sleek, sexy and stylish look for festive occasions or better,
                        give your routine days a beautiful and classy push.
                        Whether your choice is golden zari border or a plain saree, pastels or peppy colours, motifs or embroidery.
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
                    {product.Items.map((resp, index) => (
                        <div className="col-lg-2 col-6" key={index}>
                            <div className="card">
                                <img style={{cursor:'pointer'}} onClick={(e) => Image(e, resp.id)} id={resp.id} src={resp.images} className="img-fluid" alt="" />
                                <h6 className="text-center d-none fw-lighter">{resp.id}</h6>
                                <div className="card-body">
                                    <div className="card-text">
                                        {resp.products.map((itm, i) => (
                                            <div key={i}>
                                                <h6 className="text-justify text-center">{itm.name}</h6>
                                                <p><span><CurrencyRupee className="fs-6" /></span>{itm.price}</p>
                                                <button className="btn btn-dark d-none w-100" value={resp.id}>Add to Cart</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 mx-3">
                    <h3>SOFT SILK SAREES ONLINE ON BHARATSTHALI</h3>
                    <p className="text-justify">
                        Exuding the same opulence of silk and intricacy of silk fiber, the soft silk collection of sarees at <Link to="/">BharatSthali.com</Link>
                        is everything you need to maintain a soft and sleek look. The perfect blend of grace and flow, soft silk selection is stylish,
                        colourful and affordable. Suitable for women of all age groups, for everyday use as well as on a special occasion,
                        these soft sarees are a milder and toned down version of traditional <Link to="/softsilk">silk saree</Link> nonetheless elegant, classy and rich like a silk saree.
                    </p>
                    <h3>WHY BHARATSTHALI FOR SOFT SILK SAREES IN INDIA?</h3>
                    <p className="text-justify">
                        Revive and relive your tradition the way you want to! If you think a traditional heirloom silk saree is a cumbersome affair as a workwear, lighten it up with silk saree online available at BharatSthali.
                        Presenting you the colours, textures and patterns of India at one place,
                        it is your one-stop destination to bring the traditional hues of the country back to your wardrobe.
                    </p>
                    <h3>ONE STOP DESTINATION FOR SOFT SILK SAREES</h3>
                    <p className="text-justify">
                        Blending history and tradition, floral motifs and regal opulence in the form of sarees in soft silk by BharatSthali is a never before
                        collection at never before prices. Just browse through, order and get your favourite saree at a reasonable price,
                        delivered right at your doorsteps anywhere in India and outside the country.
                    </p>
                    <p className="text-justify">
                        You can buy soft silk saree for your wife or a perfect blend of colours in soft silk for your mother too.
                        Here at BharatSthali, you will see a perfect gift for your sister or grandmother mother too in a pure & soft silk fabric
                        of love.
                    </p>
                    <h3>HOW / WHEN TO WEAR A SOFT SILK SAREE?</h3>
                    <p className="text-justify">Team up your sarees weaved in soft silk with a traditional three-fourth sleeve blouse or trendy backless choli, rest assured, you can wear a saree in threads of soft silk like a diva!
                        Make the entire ensemble shinier by sporting a pair of anklets and dangling Jhumkas.</p>
                    <p className="text-justify">
                        Wear a silk saree, whenever you want to! Rock a birthday saree on your colleague’s birthday, to an official lunch or wear it to make a romantic dinner all the more special.
                    </p>
                    <h3>WHAT’S SO SPECIAL ABOUT BHARATSTHALI SAREES IN TRADITIONAL SOFT SILK?</h3>
                    <p className="text-justify">
                        Bring the sexy back in your way and in a traditional way. Suave and glamorous, the soft silk sarees online shopping at
                        BharatSthali is in your budget. Don’t let the ‘price’ tag of silk limit you or the maintenance of silk hold you back from
                        wearing it on occasions that demand the richness and luxury of silk but also make you weigh your options if at all it is
                        worth it. For such times and special moments, when you don’t want to go overboard but of course want to do the right
                        amount of sexy and classy, soft silk sarees could be your favourite pick! Wahi silk ki richness, wahi shaan, jab kam daamo mein mile, toh koi kyu na le, soft silk collection of sarees at BharatSthali!
                    </p>
                    <p className="text-justify">
                        These soft silk dresses has become popular in Chennai, Mumbai, Kolkata, Hyderabad, Bangalore and now showing lots of interest for pure silk among the customer of Trivadnrum, Cochin, Indore, Delhi and Chandigarh too. Our customers are praising our quality material and so we are able to reach more customers in Delhi,
                        Mumbai, Bangalore and Chennai. The entire India is showing interest for these soft silk sarees.
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
        </>
    );
}
