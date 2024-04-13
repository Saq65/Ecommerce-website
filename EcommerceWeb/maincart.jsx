import React, { useState } from "react";
import "./ecommerce.css"
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import Slider from "react-slick";

export function Main(props) {

    const [realimg, setrealimg] = useState();
    //  const { id } = useParams();
    function FuncImage(e) {
        if (e.target.id === "img1") {
            setrealimg(
                <img src={location.state.img1} className="img-fluid" alt="" />
            )
            document.getElementById('imgmain').style.display = "none"

        } else if (e.target.id === "imgmain2") {
            setrealimg(
                <img src={location.state.info} className="img-fluid" alt="" />
            )
            document.getElementById('imgmain').style.display = "none"

        } else if (e.target.id === "img2") {
            setrealimg(
                <img src={location.state.img2} className="img-fluid" alt="" />
            )
            document.getElementById('imgmain').style.display = "none"
        } else if (e.target.id === "img3") {
            setrealimg(
                <img src={location.state.img3} className="img-fluid" alt="" />
            )
            document.getElementById('imgmain').style.display = "none"
        }
    }
    // useEffect(() => {
    //     axios.get('allproduct.json').then(res => {
    //         setProduct(res.data);
    //     });
    // }, []);
    const location = useLocation();
    //   const productItem = product.Items15.find(item => String(item.id) === id);

    // function show() {
    //     console.log(productItem);
    // }

    const Setting = {
        dots: true,
        speed: 500,
        autoplay: true,
        arrows: true,
        infinite: true,
        slideToShow: 1,
        slideToScrll: 1
    }
    /* const navigate = useNavigate();
     useEffect(() => {
         axios.get('allproduct.json').then((res) => {
             console.log(res.data)
             setProduct(res.data);
         });
     }, []);*/

    /* function AddToCart(e,id){
         var data = product.Items.find(itm=>itm.id === id)
         var data2 = product.Items15.find(itm => itm.id === id);
         var data3 = product.Items3.find(itm=>itm.id === id);
         var data4 = product.Items19.find(itm=>itm.id === id);
      
         if(data){
             const a = data.products.map(nm=>nm.name);
             navigate('/cart',{state:{a:a}});
         }else if(data2){
             const b= data2.products.map(nm=>nm.name);
             console.log(b);
         }else if(data3){
             const c = data3.products.map(nm=>nm.name);
             console.log(c)
         }else if(data4){
             const c = data4.products.map(nm=>nm.name);
             console.log(c)
         }
 
     }*/

    return (
        <div className="container-fluid-lg">
            <div id="desktop">
                <div className="row mx-auto w-100">
                    <div className="col-lg-2 col-2">
                        <Card className="m-2" style={{ height: '120px' }}>
                            <img onClick={FuncImage} id="img1" src={location.state.img1} style={{ cursor: 'pointer' }} className="img-fluid w-100 h-100" alt="no data" />
                        </Card>
                        <Card className="m-2" style={{ height: '120px' }}>
                            <img onClick={FuncImage} src={location.state.info} style={{ cursor: 'pointer' }} id="imgmain2" className="img-fluid w-100 h-100" alt="no data" />
                        </Card>
                        <Card className="m-2" style={{ height: '120px' }}>
                            <img onClick={FuncImage} id="img2" style={{ cursor: 'pointer' }} src={location.state.img2} className="img-fluid w-100 h-100" alt="no data" />
                        </Card>
                        <Card className="m-2" style={{ height: '120px' }}>
                            <img onClick={FuncImage} id="img3" style={{ cursor: 'pointer' }} src={location.state.img3} className="img-fluid w-100 h-100" alt="no data" />
                        </Card>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="">
                            {realimg}
                            <img src={location.state.info} style={{ cursor: 'pointer' }} id="imgmain" className="img-fluid h-25" alt="" /> <br />

                        </div>
                    </div>
                    <div className="col-lg-6 col-6">
                        <div id="maintext" className="card body p-3">
                            <h5>{location.state.info2}</h5>
                            <h6 className="fw-bold font-monospace">Price:{location.state.price}</h6>
                            <p className="fw-lighter">Tax included</p>
                            <hr />
                            <div style={{ backgroundColor: '#F7F7F7' }} className="container">
                                <h6 className="fw-bold font-monospace">CUSTOMIZED (OPTIONAL) </h6>
                                <input type="checkbox" name="checkbox" id="check" />
                                <span style={{ fontSize: 'x-small' }} className="fw-lighter fs-6" id="check"> FREE FALL STITCHING AND ONE EXTRA BLOUSE (ONLY AVAILABLE WITH PREPAID ORDERS) (+₹0.00)</span>
                                <h6 className="fw-bold font-monospace">Contact No (For Delivery Concerns) </h6>
                                <input type="number" className="form-control" placeholder="e.g. 081234 56789" name="mobno." id="number" />
                                <button id={location.state.id} value={location.state.id} onClick={props.onClick} className="btn btn-dark text-white w-100 m-3">ADD TO CART</button>
                            </div>
                            <div className="container-fluid">
                                <h6 className="fw-bold font-monospace">description:</h6>
                                <p className="fw-lighter fs-6">{location.state.desc}</p>
                                <p className="text-justify">{location.state.desc2}.</p>
                            </div>
                            <div className="size">
                                <h6 className="fw-bold font-monospace">SIZE & FIT</h6>
                                <p>{location.state.length}</p>
                                <p>{location.state.width}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div>
                {productItem && (
                    <>
                        <h2>{productItem.name}</h2>
                    </>
                )}
            </div> */}

            {/*mobile*/}
            <div id="mobileslide" className="container-fluid">
                <Slider {...Setting}>
                    <Card className="" >
                        <img onClick={FuncImage} id="img1" src={location.state.img1} style={{ cursor: 'pointer' }} className="img-fluid h-100" alt="" />
                    </Card>
                    <Card className="" >
                        <img onClick={FuncImage} src={location.state.info} style={{ cursor: 'pointer' }} id="imgmain2" className="img-fluid h-100" alt="" />
                    </Card>
                    <Card className="" >
                        <img onClick={FuncImage} id="img2" style={{ cursor: 'pointer' }} src={location.state.img2} className="img-fluid h-100" alt="" />
                    </Card>
                    <Card className="" >
                        <img onClick={FuncImage} id="img3" style={{ cursor: 'pointer' }} src={location.state.img3} className="img-fluid h-100" alt="" />
                    </Card>
                </Slider>
                <div className="name mt-4 p-2">
                    <p>{location.state.info2}</p>
                </div>
                <div className="price mt-2 p-2">
                    <h6 className="fw-bold font-monospace">Price:{location.state.price}</h6>
                </div>
                <div style={{ backgroundColor: '#F7F7F7' }} className="container-fluid p-2 informaition">
                    <h6 className="fw-bold font-monospace">CUSTOMIZED (OPTIONAL) </h6>
                    <input type="checkbox" name="checkbox" id="check" />
                    <span style={{ fontSize: 'x-small' }} className="p fw-lighter" id="check"> FREE FALL STITCHING AND ONE EXTRA BLOUSE (ONLY AVAILABLE WITH PREPAID ORDERS) (+₹0.00)</span>
                    <h6 className="fw-bold font-monospace">Contact No (For Delivery Concerns) </h6>
                    <input type="number" className="form-control" placeholder="e.g. 081234 56789" name="mobno." id="number" />
                    <div className="d-flex justify-content-center mt-2">
                        <button id={location.state.id} value={location.state.id} onClick={props.onClick} className="btn btn-dark text-white w-100 mt-2">ADD TO CART</button>
                    </div>
                    <div className="desc mt-3">
                        <h6 className="fw-bold font-monospace">description:</h6>
                        <p style={{ fontSize: 'small' }}>{location.state.desc}</p>
                        <p style={{ fontSize: 'small' }} className="text-justify">{location.state.desc2}.</p>
                    </div>
                    <div className="size">
                        <h6 className="fw-bold font-monospace">SIZE & FIT</h6>
                        <p>{location.state.length}</p>
                        <p>{location.state.width}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
