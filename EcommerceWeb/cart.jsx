export function Cart(props) {
    return (
        <div className="container-fluid-lg col-12">
            <h2 className="text-center ">Cart</h2>
            <p className="text-center text-decoration-underline">continue shopping</p>
            <div className="row w-100 align-items-center justify-content-center">
                <div className="col-lg-8">
                    {props.cart}
                </div>
                <div style={{position:"sticky",top:"0"}} className="col-lg-4 col-12">
                    <div style={{position:'fixed',top:'300px'}}>
                        Total:{props.total} <br />
                        <button className="btn btn-dark text-white">CHECK OUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
