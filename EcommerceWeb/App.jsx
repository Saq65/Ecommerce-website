import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import { Nav } from "./nav";
import { About } from "./about";
import { Contact } from "./contact";
import { Handloom } from "./handloom";
import { Banarasi } from "./banarsi";
import { Blog } from "./blog";
import { Certificate } from "./certificate";
import { Media } from "./mediaNews";
import { Cart } from "./cart";
import { Account } from "./account";
import { SoftSilk } from "./collection/softsilk";
import { Kanjivaram } from "./collection/kanjivaram";
import { Maheshwari } from "./collection/maheshwari";
import { Raw } from "./collection/row";
import { Mysore } from "./collection/mysure";
import { Sambalpuri } from "./collection/sambhalpuri";
import { Kalamkari } from "./collection/kalamkari";
import { Madhubani } from "./collection/madhubani";
import { Bengali } from "./collection2/bengali";
import { Jaipur } from "./collection2/jaipur";
import { South } from "./collection2/south";
import { Office } from "./collection2/office";
import { Khadi } from "./collection2/khadi";
import { Blockprinted } from "./collection2/blockPrinted";
import { Bagru } from "./collection2/bagru";
import { Ajrakh } from "./collection2/ajrakh";
import { Ikkat } from "./collection2/ikkat";
import { Chanderi } from "./collection2/chanderi";
import { Blouses } from "./collection2/blouses";
import { Linen } from "./collection2/linen";
import { Karnataka } from "./collection2/karnataka";
import { Tamilnadu } from "./collection2/tamilnadu";
import { Dresses } from "./dresses";
import axios from "axios";
import { Gift } from "./gift";
import { Main } from "./maincart";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export function App() {
    const [product, setProduct] = useState({
        Items: [{ products: [] }], Items2: [{ products: [] }], Items3: [{ products: [] }], Items4: [{ produts: [] }], Items5: [{ produts: [] }], Items6: [{ produts: [] }]
        , Items7: [{ products: [] }], Items8: [{ products: [] }], Items9: [{ products: [] }], Items10: [{ prosduts: [] }], Items11: [{ products: [] }], Items12: [{ products: [] }], Items13: [{ products: [] }], Item14: [{ produts: [] }]
        , Items15: [{ products: [] }], Items16: [{ products: [], Items17: [{ products: [] }], Items18: [{ products: [] }], Items19: [{ products: [] }], Items20: [{ products: [] }], Items21: [{ products: [] }] }]
    });
    const [data, setdata] = useState(0);
    const [cart, setcart] = useState([]);
    const [total, settotal] = useState(0);

    useEffect(() => {
        axios.get('allproduct.json').then((res) => {
            setProduct(res.data);
        });
    }, []);

    //mainclick
    function Check(e) {
        if (e.target.value === "1") {

            const selectedItem = product.Items.find(item => item.id === "1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 mx-auto align-items-center">
                        <div className="col-12 col-lg-2">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-6 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                            <div className="container">
                                <span onClick={Add}><AddCircle/></span>{data}<span onClick={()=>setdata(value=>value - 1)}><RemoveCircle/></span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "2") {

            const selectedItem = product.Items.find(item => item.id === "2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "3") {

            const selectedItem = product.Items.find(item => item.id === "3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "4") {

            const selectedItem = product.Items.find(item => item.id === "4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "5") {

            const selectedItem = product.Items.find(item => item.id === "5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "6") {

            const selectedItem = product.Items.find(item => item.id === "6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "7") {

            const selectedItem = product.Items.find(item => item.id === "7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "8") {

            const selectedItem = product.Items.find(item => item.id === "8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "9") {

            const selectedItem = product.Items.find(item => item.id === "9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "10") {

            const selectedItem = product.Items.find(item => item.id === "10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen1") {

            const selectedItem = product.Items2.find(item => item.id === "linen1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen2") {

            const selectedItem = product.Items2.find(item => item.id === "linen2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen3") {

            const selectedItem = product.Items2.find(item => item.id === "linen3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen4") {

            const selectedItem = product.Items2.find(item => item.id === "linen4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen5") {

            const selectedItem = product.Items2.find(item => item.id === "linen5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen6") {

            const selectedItem = product.Items2.find(item => item.id === "linen6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen7") {

            const selectedItem = product.Items2.find(item => item.id === "linen7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen8") {

            const selectedItem = product.Items2.find(item => item.id === "linen8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen9") {

            const selectedItem = product.Items2.find(item => item.id === "linen9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen10") {

            const selectedItem = product.Items2.find(item => item.id === "linen10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift1") {

            const selectedItem = product.Items19.find(item => item.id === "gift1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "gift2") {

            const selectedItem = product.Items19.find(item => item.id === "gift2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "gift3") {

            const selectedItem = product.Items19.find(item => item.id === "gift3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift4") {

            const selectedItem = product.Items19.find(item => item.id === "gift4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift5") {

            const selectedItem = product.Items19.find(item => item.id === "gift5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift6") {

            const selectedItem = product.Items19.find(item => item.id === "gift6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift7") {

            const selectedItem = product.Items19.find(item => item.id === "gift7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift8") {

            const selectedItem = product.Items19.find(item => item.id === "gift8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift9") {

            const selectedItem = product.Items19.find(item => item.id === "gift9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift10") {

            const selectedItem = product.Items19.find(item => item.id === "gift10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift11") {

            const selectedItem = product.Items19.find(item => item.id === "gift11");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "gift12") {

            const selectedItem = product.Items19.find(item => item.id === "gift12");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "gift13") {

            const selectedItem = product.Items19.find(item => item.id === "gift13");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift14") {

            const selectedItem = product.Items19.find(item => item.id === "gift14");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift15") {

            const selectedItem = product.Items19.find(item => item.id === "gift15");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift16") {

            const selectedItem = product.Items19.find(item => item.id === "gift16");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift17") {

            const selectedItem = product.Items19.find(item => item.id === "gift17");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift18") {

            const selectedItem = product.Items19.find(item => item.id === "gift18");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift19") {

            const selectedItem = product.Items19.find(item => item.id === "gift19");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift20") {

            const selectedItem = product.Items19.find(item => item.id === "gift20");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office1") {

            const selectedItem = product.Items.find(item => item.id === "office1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "office2") {

            const selectedItem = product.Items15.find(item => item.id === "office2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office3") {

            const selectedItem = product.Items15.find(item => item.id === "office3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office4") {

            const selectedItem = product.Items15.find(item => item.id === "office4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office5") {

            const selectedItem = product.Items15.find(item => item.id === "office5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office6") {

            const selectedItem = product.Items15.find(item => item.id === "office6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office7") {

            const selectedItem = product.Items15.find(item => item.id === "office7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office8") {

            const selectedItem = product.Items15.find(item => item.id === "office8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office9") {

            const selectedItem = product.Items15.find(item => item.id === "office9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office10") {

            const selectedItem = product.Items15.find(item => item.id === "office10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras1") {

            const selectedItem = product.Items3.find(item => item.id === "banaras1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras2") {

            const selectedItem = product.Items3.find(item => item.id === "banaras2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras3") {

            const selectedItem = product.Items3.find(item => item.id === "banaras3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras4") {

            const selectedItem = product.Items3.find(item => item.id === "banaras4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras5") {

            const selectedItem = product.Items3.find(item => item.id === "banaras5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras6") {

            const selectedItem = product.Items3.find(item => item.id === "banaras6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras7") {

            const selectedItem = product.Items3.find(item => item.id === "banaras7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras8") {

            const selectedItem = product.Items3.find(item => item.id === "banaras8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras9") {

            const selectedItem = product.Items3.find(item => item.id === "banaras9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras10") {

            const selectedItem = product.Items3.find(item => item.id === "banaras10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom1") {

            const selectedItem = product.Items4.find(item => item.id === "handloom1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom2") {

            const selectedItem = product.Items4.find(item => item.id === "handloom2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom3") {

            const selectedItem = product.Items4.find(item => item.id === "handloom3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom4") {

            const selectedItem = product.Items4.find(item => item.id === "handloom4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom5") {

            const selectedItem = product.Items4.find(item => item.id === "handloom5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom6") {

            const selectedItem = product.Items4.find(item => item.id === "handloom6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom7") {

            const selectedItem = product.Items4.find(item => item.id === "handloom7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom8") {

            const selectedItem = product.Items4.find(item => item.id === "handloom8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom9") {

            const selectedItem = product.Items4.find(item => item.id === "handloom9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom10") {

            const selectedItem = product.Items4.find(item => item.id === "handloom10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal1") {

            const selectedItem = product.Items5.find(item => item.id === "bengal1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal2") {

            const selectedItem = product.Items5.find(item => item.id === "bengal2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal3") {

            const selectedItem = product.Items5.find(item => item.id === "bengal3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal4") {

            const selectedItem = product.Items5.find(item => item.id === "bengal4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal5") {

            const selectedItem = product.Items5.find(item => item.id === "bengal5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal6") {

            const selectedItem = product.Items5.find(item => item.id === "bengal6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal7") {

            const selectedItem = product.Items5.find(item => item.id === "bengal7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal8") {

            const selectedItem = product.Items5.find(item => item.id === "bengal8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal9") {

            const selectedItem = product.Items5.find(item => item.id === "bengal9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal10") {

            const selectedItem = product.Items5.find(item => item.id === "bengal10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji1") {

            const selectedItem = product.Items6.find(item => item.id === "kanji1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "kanji2") {

            const selectedItem = product.Items6.find(item => item.id === "kanji2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji3") {

            const selectedItem = product.Items6.find(item => item.id === "kanji3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji4") {

            const selectedItem = product.Items6.find(item => item.id === "kanji4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji5") {

            const selectedItem = product.Items6.find(item => item.id === "kanji5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji6") {

            const selectedItem = product.Items6.find(item => item.id === "kanji6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji7") {

            const selectedItem = product.Items6.find(item => item.id === "kanji7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji8") {

            const selectedItem = product.Items6.find(item => item.id === "kanji8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji9") {

            const selectedItem = product.Items6.find(item => item.id === "kanji9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji10") {

            const selectedItem = product.Items6.find(item => item.id === "kanji10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }else if (e.target.value === "maheshwari1") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                 b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "maheshwari2") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari3") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari4") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari5") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari6") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari7") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari8") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari9") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari10") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }


    //silk

    function handleClick(e) {
        if (e.target.value === "1") {

            const selectedItem = product.Items.find(item => item.id === "1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "2") {

            const selectedItem = product.Items.find(item => item.id === "2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "3") {

            const selectedItem = product.Items.find(item => item.id === "3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "4") {

            const selectedItem = product.Items.find(item => item.id === "4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "5") {

            const selectedItem = product.Items.find(item => item.id === "5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "6") {

            const selectedItem = product.Items.find(item => item.id === "6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "7") {

            const selectedItem = product.Items.find(item => item.id === "7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "8") {

            const selectedItem = product.Items.find(item => item.id === "8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "9") {

            const selectedItem = product.Items.find(item => item.id === "9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "10") {

            const selectedItem = product.Items.find(item => item.id === "10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //lenin

    function LinenhandleClick(e) {
        if (e.target.value === "linen1") {

            const selectedItem = product.Items2.find(item => item.id === "linen1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen2") {

            const selectedItem = product.Items2.find(item => item.id === "linen2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen3") {

            const selectedItem = product.Items2.find(item => item.id === "linen3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen4") {

            const selectedItem = product.Items2.find(item => item.id === "linen4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen5") {

            const selectedItem = product.Items2.find(item => item.id === "linen5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen6") {

            const selectedItem = product.Items2.find(item => item.id === "linen6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen7") {

            const selectedItem = product.Items2.find(item => item.id === "linen7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen8") {

            const selectedItem = product.Items2.find(item => item.id === "linen8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen9") {

            const selectedItem = product.Items2.find(item => item.id === "linen9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "linen10") {

            const selectedItem = product.Items2.find(item => item.id === "linen10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //banarasi 

    function BanarasihandleClick(e) {
        if (e.target.value === "banaras1") {

            const selectedItem = product.Items3.find(item => item.id === "banaras1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras2") {

            const selectedItem = product.Items3.find(item => item.id === "banaras2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras3") {

            const selectedItem = product.Items3.find(item => item.id === "banaras3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras4") {

            const selectedItem = product.Items3.find(item => item.id === "banaras4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras5") {

            const selectedItem = product.Items3.find(item => item.id === "banaras5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras6") {

            const selectedItem = product.Items3.find(item => item.id === "banaras6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras7") {

            const selectedItem = product.Items3.find(item => item.id === "banaras7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras8") {

            const selectedItem = product.Items3.find(item => item.id === "banaras8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras9") {

            const selectedItem = product.Items3.find(item => item.id === "banaras9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "banaras10") {

            const selectedItem = product.Items3.find(item => item.id === "banaras10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //handloom

    function HandloomhandleClick(e) {
        if (e.target.value === "handloom1") {

            const selectedItem = product.Items4.find(item => item.id === "handloom1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom2") {

            const selectedItem = product.Items4.find(item => item.id === "handloom2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom3") {

            const selectedItem = product.Items4.find(item => item.id === "handloom3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom4") {

            const selectedItem = product.Items4.find(item => item.id === "handloom4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom5") {

            const selectedItem = product.Items4.find(item => item.id === "handloom5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom6") {

            const selectedItem = product.Items4.find(item => item.id === "handloom6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom7") {

            const selectedItem = product.Items4.find(item => item.id === "handloom7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom8") {

            const selectedItem = product.Items4.find(item => item.id === "handloom8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom9") {

            const selectedItem = product.Items4.find(item => item.id === "handloom9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "handloom10") {

            const selectedItem = product.Items4.find(item => item.id === "handloom10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //bengali 

    function BengalihandleClick(e) {
        if (e.target.value === "bengal1") {

            const selectedItem = product.Items5.find(item => item.id === "bengal1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal2") {

            const selectedItem = product.Items5.find(item => item.id === "bengal2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal3") {

            const selectedItem = product.Items5.find(item => item.id === "bengal3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal4") {

            const selectedItem = product.Items5.find(item => item.id === "bengal4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal5") {

            const selectedItem = product.Items5.find(item => item.id === "bengal5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal6") {

            const selectedItem = product.Items5.find(item => item.id === "bengal6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal7") {

            const selectedItem = product.Items5.find(item => item.id === "bengal7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal8") {

            const selectedItem = product.Items5.find(item => item.id === "bengal8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal9") {

            const selectedItem = product.Items5.find(item => item.id === "bengal9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bengal10") {

            const selectedItem = product.Items5.find(item => item.id === "bengal10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //kanjivaram

    function KanjivaramhandleClick(e) {
        if (e.target.value === "kanji1") {

            const selectedItem = product.Items6.find(item => item.id === "kanji1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "kanji2") {

            const selectedItem = product.Items6.find(item => item.id === "kanji2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji3") {

            const selectedItem = product.Items6.find(item => item.id === "kanji3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji4") {

            const selectedItem = product.Items6.find(item => item.id === "kanji4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji5") {

            const selectedItem = product.Items6.find(item => item.id === "kanji5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji6") {

            const selectedItem = product.Items6.find(item => item.id === "kanji6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji7") {

            const selectedItem = product.Items6.find(item => item.id === "kanji7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji8") {

            const selectedItem = product.Items6.find(item => item.id === "kanji8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji9") {

            const selectedItem = product.Items6.find(item => item.id === "kanji9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kanji10") {

            const selectedItem = product.Items6.find(item => item.id === "kanji10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //maheshwari

    function MaheshwarihandleClick(e) {
        if (e.target.value === "maheshwari1") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "maheshwari2") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari3") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari4") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari5") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari6") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari7") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari8") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari9") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "maheshwari10") {

            const selectedItem = product.Items7.find(item => item.id === "maheshwari10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //raw saree

    function RawhandleClick(e) {
        if (e.target.value === "raw1") {

            const selectedItem = product.Items8.find(item => item.id === "raw1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "raw2") {

            const selectedItem = product.Items8.find(item => item.id === "raw2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "raw3") {

            const selectedItem = product.Items8.find(item => item.id === "raw3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "raw4") {

            const selectedItem = product.Items8.find(item => item.id === "raw4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "raw5") {

            const selectedItem = product.Items8.find(item => item.id === "raw5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "raw6") {

            const selectedItem = product.Items8.find(item => item.id === "raw6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "raw7") {

            const selectedItem = product.Items8.find(item => item.id === "raw7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "raw8") {

            const selectedItem = product.Items8.find(item => item.id === "raw8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "raw9") {

            const selectedItem = product.Items8.find(item => item.id === "raw9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "raw10") {

            const selectedItem = product.Items8.find(item => item.id === "raw10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //mysore 

    function MysorehandleClick(e) {
        if (e.target.value === "mysore1") {

            const selectedItem = product.Items9.find(item => item.id === "mysore1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "mysore2") {

            const selectedItem = product.Items9.find(item => item.id === "mysore2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "mysore3") {

            const selectedItem = product.Items9.find(item => item.id === "mysore3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "mysore4") {

            const selectedItem = product.Items9.find(item => item.id === "mysore4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "mysore5") {

            const selectedItem = product.Items9.find(item => item.id === "mysore5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //sambalpuri
    function SambalpurihandleClick(e) {
        if (e.target.value === "sambalpuri1") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "sambalpuri2") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "sambalpuri3") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "sambalpuri4") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "sambalpuri5") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "sambalpuri6") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "sambalpuri7") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "sambalpuri8") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "sambalpuri9") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "sambalpuri10") {

            const selectedItem = product.Items10.find(item => item.id === "sambalpuri10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //kalamkari 

    function KalamkarihandleClick(e) {
        if (e.target.value === "kalamkari1") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "kalamkari2") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kalamkari3") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kalamkari4") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kalamkari5") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kalamkari6") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kalamkari7") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kalamkari8") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kalamkari9") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "kalamkari10") {

            const selectedItem = product.Items11.find(item => item.id === "kalamkari10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //madhubani

    function MadhubanihandleClick(e) {
        if (e.target.value === "madhubani1") {

            const selectedItem = product.Items12.find(item => item.id === "madhubani1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "madhubani2") {

            const selectedItem = product.Items12.find(item => item.id === "madhubani2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //south

    function SouthhandleClick(e) {
        if (e.target.value === "south1") {

            const selectedItem = product.Items.find(item => item.id === "south1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "south2") {

            const selectedItem = product.Items13.find(item => item.id === "south2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "south3") {

            const selectedItem = product.Items13.find(item => item.id === "south3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "south4") {

            const selectedItem = product.Items13.find(item => item.id === "south4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "south5") {

            const selectedItem = product.Items13.find(item => item.id === "south5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "south6") {

            const selectedItem = product.Items13.find(item => item.id === "south6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "south7") {

            const selectedItem = product.Items13.find(item => item.id === "south7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "south8") {

            const selectedItem = product.Items13.find(item => item.id === "south8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "south9") {

            const selectedItem = product.Items13.find(item => item.id === "south9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "south10") {

            const selectedItem = product.Items13.find(item => item.id === "south10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //jaipur 

    function JaipurhandleClick(e) {
        if (e.target.value === "jaipur1") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "jaipur2") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "jaipur3") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "jaipur4") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "jaipur5") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "jaipur6") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "jaipur7") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "jaipur8") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "jaipur9") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "jaipur10") {

            const selectedItem = product.Items14.find(item => item.id === "jaipur10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //office

    function OfficehandleClick(e) {
        if (e.target.value === "office1") {

            const selectedItem = product.Items.find(item => item.id === "office1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove()} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                const a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "office2") {

            const selectedItem = product.Items15.find(item => item.id === "office2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={Remove} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office3") {

            const selectedItem = product.Items15.find(item => item.id === "office3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office4") {

            const selectedItem = product.Items15.find(item => item.id === "office4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office5") {

            const selectedItem = product.Items15.find(item => item.id === "office5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office6") {

            const selectedItem = product.Items15.find(item => item.id === "office6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office7") {

            const selectedItem = product.Items15.find(item => item.id === "office7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office8") {

            const selectedItem = product.Items15.find(item => item.id === "office8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office9") {

            const selectedItem = product.Items15.find(item => item.id === "office9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "office10") {

            const selectedItem = product.Items15.find(item => item.id === "office10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //khadi 

    function KhadihandleClick(e) {
        if (e.target.value === "khadi1") {

            const selectedItem = product.Items16.find(item => item.id === "khadi1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "khadi2") {

            const selectedItem = product.Items16.find(item => item.id === "khadi2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "khadi3") {

            const selectedItem = product.Items16.find(item => item.id === "khadi3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                var a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                var b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "khadi4") {

            const selectedItem = product.Items16.find(item => item.id === "khadi4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                setdata(value => value + 1);
            }
        } else if (e.target.value === "khadi5") {

            const selectedItem = product.Items16.find(item => item.id === "khadi5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                setdata(value => value + 1);
            }
        } else if (e.target.value === "khadi6") {

            const selectedItem = product.Items16.find(item => item.id === "khadi6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                setdata(value => value + 1);
            }
        } else if (e.target.value === "khadi7") {

            const selectedItem = product.Items16.find(item => item.id === "khadi7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                setdata(value => value + 1);
            }
        } else if (e.target.value === "khadi8") {

            const selectedItem = product.Items16.find(item => item.id === "khadi8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "khadi9") {

            const selectedItem = product.Items16.find(item => item.id === "khadi9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "khadi10") {

            const selectedItem = product.Items16.find(item => item.id === "khadi10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //Ikkat
    function IkkathandleClick(e) {
        if (e.target.value === "ikkat1") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "ikkat2") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "ikkat3") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ikkat4") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ikkat5") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ikkat6") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ikkat7") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ikkat8") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ikkat9") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ikkat10") {

            const selectedItem = product.Items17.find(item => item.id === "ikkat10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //Blockprinted

    function BlockhandleClick(e) {
        if (e.target.value === "block1") {

            const selectedItem = product.Items18.find(item => item.id === "block1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "block2") {

            const selectedItem = product.Items18.find(item => item.id === "block2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "block3") {

            const selectedItem = product.Items18.find(item => item.id === "block3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "block4") {

            const selectedItem = product.Items18.find(item => item.id === "block4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "block5") {

            const selectedItem = product.Items18.find(item => item.id === "block5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "block6") {

            const selectedItem = product.Items18.find(item => item.id === "block6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "block7") {

            const selectedItem = product.Items18.find(item => item.id === "block7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "block8") {

            const selectedItem = product.Items18.find(item => item.id === "block8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "block9") {

            const selectedItem = product.Items18.find(item => item.id === "block9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "block10") {

            const selectedItem = product.Items18.find(item => item.id === "block10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //gift

    function GifthandleClick(e) {
        if (e.target.value === "gift1") {

            const selectedItem = product.Items19.find(item => item.id === "gift1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "gift2") {

            const selectedItem = product.Items19.find(item => item.id === "gift2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "gift3") {

            const selectedItem = product.Items19.find(item => item.id === "gift3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift4") {

            const selectedItem = product.Items19.find(item => item.id === "gift4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift5") {

            const selectedItem = product.Items19.find(item => item.id === "gift5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift6") {

            const selectedItem = product.Items19.find(item => item.id === "gift6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift7") {

            const selectedItem = product.Items19.find(item => item.id === "gift7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift8") {

            const selectedItem = product.Items19.find(item => item.id === "gift8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift9") {

            const selectedItem = product.Items19.find(item => item.id === "gift9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift10") {

            const selectedItem = product.Items19.find(item => item.id === "gift10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift11") {

            const selectedItem = product.Items19.find(item => item.id === "gift11");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "gift12") {

            const selectedItem = product.Items19.find(item => item.id === "gift12");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "gift13") {

            const selectedItem = product.Items19.find(item => item.id === "gift13");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift14") {

            const selectedItem = product.Items19.find(item => item.id === "gift14");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift15") {

            const selectedItem = product.Items19.find(item => item.id === "gift15");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift16") {

            const selectedItem = product.Items19.find(item => item.id === "gift16");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift17") {

            const selectedItem = product.Items19.find(item => item.id === "gift17");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift18") {

            const selectedItem = product.Items19.find(item => item.id === "gift18");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift19") {

            const selectedItem = product.Items19.find(item => item.id === "gift19");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "gift20") {

            const selectedItem = product.Items19.find(item => item.id === "gift20");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //bagru

    function BagruhandleClick(e) {
        if (e.target.value === "bagru1") {

            const selectedItem = product.Items20.find(item => item.id === "bagru1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "bagru2") {

            const selectedItem = product.Items20.find(item => item.id === "bagru2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "bagru3") {

            const selectedItem = product.Items20.find(item => item.id === "bagru3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bagru4") {

            const selectedItem = product.Items20.find(item => item.id === "bagru4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bagru5") {

            const selectedItem = product.Items20.find(item => item.id === "bagru5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bagru6") {

            const selectedItem = product.Items20.find(item => item.id === "bagru6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bagru7") {

            const selectedItem = product.Items20.find(item => item.id === "bagru7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bagru8") {

            const selectedItem = product.Items20.find(item => item.id === "bagru8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bagru9") {

            const selectedItem = product.Items20.find(item => item.id === "bagru9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "bagru10") {

            const selectedItem = product.Items20.find(item => item.id === "bagru10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    //ajrakh

    function AjrakhhandleClick(e) {
        if (e.target.value === "ajrakh1") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh1");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);

                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "ajrakh2") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh2");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark w-100 m-1">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger w-100 m-1 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                setdata(value => value + 1);
                settotal((prevtotal) => prevtotal + b);
            }
        } else if (e.target.value === "ajrakh3") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh3");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal(prev => prev - b))} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ajrakh4") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh4");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ajrakh5") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh5");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ajrakh6") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh6");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ajrakh7") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh7");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ajrakh8") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh8");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ajrakh9") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh9");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={() => Remove(settotal - b)} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                let a = ` ${selectedItem.products.map((itm) => itm.price)}`;
                let b = parseFloat(a.replace(",", ""));
                settotal((prevtotal) => prevtotal + b);
                setdata(value => value + 1);
            }
        } else if (e.target.value === "ajrakh10") {

            const selectedItem = product.Items21.find(item => item.id === "ajrakh10");
            if (selectedItem) {
                setcart(old => [
                    ...old,
                    <div key={selectedItem.id} className="row w-100 h-25">
                        <div className="col-12 col-lg-4">
                            <img src={selectedItem.images} style={{ height: '150px', display: "block", width: '200px' }} className="img-thumbnail" alt={selectedItem.name} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <p>{selectedItem.products.map((nam) => nam.name)}</p>
                            <p className="fw-bold">{selectedItem.products.map((nam) => nam.price)}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button className="btn btn-dark m-1 w-100">buy</button>
                            <button onClick={Remove} className="btn btn-danger m-1 w-100 text-white">Remove</button>
                        </div>
                    </div>
                ]);
                setdata(value => value + 1);
            }
        }
    }

    function Add(){
       setdata(value=>value + 1)
    }
    function Remove(index) {
        setcart(prevCart => {
            const newCart = [...prevCart];
            newCart.splice(index, 1);
            return newCart;
        });
        setdata(value => value - 1);
    }


    return (
        <>
            <div className="container-fluid-lg">
                <BrowserRouter>
                    <ScrollToTop />
                    <div style={{ position: 'sticky', top: '0', zIndex: '90' }}><Nav data={data} /></div>
                    <Routes>
                        <Route path="/" element={<Home onClick={handleClick} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/handloom" element={<Handloom onClick={HandloomhandleClick} />} />
                        <Route path="/banarsi" element={<Banarasi onClick={BanarasihandleClick} />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/certificate" element={<Certificate />} />
                        <Route path="/media" element={<Media />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/cart" element={<Cart total={total} cart={cart} />} />
                        <Route path="/softsilk" element={<SoftSilk onClick={handleClick} />} />
                        <Route path="/kanjivaram" element={<Kanjivaram onClick={KanjivaramhandleClick} />} />
                        <Route path="/maheshwari" element={<Maheshwari onClick={MaheshwarihandleClick} />} />
                        <Route path="/raw" element={<Raw onClick={RawhandleClick} />} />
                        <Route path="/mysore" element={<Mysore onClick={MysorehandleClick} />} />
                        <Route path="/sambalpuri" element={<Sambalpuri onClick={SambalpurihandleClick} />} />
                        <Route path="/kalamkari" element={<Kalamkari onClick={KalamkarihandleClick} />} />
                        <Route path="/madhubani" element={<Madhubani onClick={MadhubanihandleClick} />} />
                        <Route path="/bengali" element={<Bengali onClick={BengalihandleClick} />} />
                        <Route path="/jaipur" element={<Jaipur onClick={JaipurhandleClick} />} />
                        <Route path="/south" element={<South onClick={SouthhandleClick} />} />
                        <Route path="/office" element={<Office onClick={OfficehandleClick} />} />
                        <Route path="/khadi" element={<Khadi onClick={KhadihandleClick} />} />
                        <Route path="/block" element={<Blockprinted onClick={BlockhandleClick} />} />
                        <Route path="/bagru" element={<Bagru onClick={BagruhandleClick} />} />
                        <Route path="/ajrakh" element={<Ajrakh onClick={AjrakhhandleClick} />} />
                        <Route path="/ikkat" element={<Ikkat onClick={IkkathandleClick} />} />
                        <Route path="/chanderi" element={<Chanderi />} />
                        <Route path="/blouse" element={<Blouses />} />
                        <Route path="/linen" element={<Linen onClick={LinenhandleClick} />} />
                        <Route path="/karnataka" element={<Karnataka />} />
                        <Route path="/tamilnadu" element={<Tamilnadu />} />
                        <Route path="/dress" element={<Dresses />} />
                        <Route path="/gift" element={<Gift onClick={GifthandleClick} />} />
                        <Route path="/main" element={<Main onClick={Check} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}