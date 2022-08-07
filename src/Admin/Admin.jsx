import React from "react";
import { Routes, Route } from "react-router-dom";


import ProductsAdmin from "./components/organisms/ProductsAdmin/ProductsAdmin";
import ProductCreateAdmin from "./components/organisms/ProductCreateAdmin/ProductCreateAdmin";
import ProductModifyAdmin from "./components/organisms/ProductModifyAdmin/ProductModifyAdmin";
import DashBoardAdmin from "./components/organisms/DashBoardAdmin/DashBoardAdmin";
import NavBarAdmin from "./components/organisms/NavBarAdmin/NavBarAdmin";
import UsersAdmin from "./components/organisms/UsersAdmin/UsersAdmin";
import ReviewsAdmin from "./components/organisms/ReviewsAdmin/ReviewsAdmin";
import OrdersAdmin from "./components/organisms/OrdersAdmin/OrdersAdmin";
import OrderDetailAdmin from "./components/organisms/OrderDetailAdmin/OrderDetailAdmin";




function Admin() {
    return (
                <div>
                    <NavBarAdmin/>
                    <div >

                        <Routes>

                            <Route exact path={"/"} element={<DashBoardAdmin/>}/>
                            <Route exact path={"/users"} element={<UsersAdmin/>}/>
                            <Route exact path={"/products"} element={<ProductsAdmin/>}/>
                            <Route exact path={"/products/create"} element={<ProductCreateAdmin/>}/>
                            <Route exact path={"/products/modify/:id"} element={<ProductModifyAdmin/>}/>
                            <Route path={"/reviews"} element={<ReviewsAdmin/>}/>
                            <Route path={"/orders"} element={<OrdersAdmin/>}/>
                            <Route path={"/orderdetail/:id"} element={<OrderDetailAdmin/>}/>
                            

                        </Routes>
                    </div>
                </div>
            
        
        
    );   
};



export default Admin;