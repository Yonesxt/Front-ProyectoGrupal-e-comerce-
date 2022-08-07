import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBarAdmin.module.css";


function NavBarAdmin(){
  return (
    <>
      <nav className={style.NavContainer}>
        <NavLink to={`/admin/users`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Usuarios</h3>
          </button>          
        </NavLink>
        <NavLink to={`/admin/reviews`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Reseñas</h3>
          </button>          
        </NavLink> 
        <NavLink to={`/admin/products`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Productos</h3>
          </button>          
        </NavLink>     
        <NavLink to={`/admin/orders`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Ordenes</h3>
          </button>          
        </NavLink>           
      </nav>
    </>
  );
};

export default NavBarAdmin;