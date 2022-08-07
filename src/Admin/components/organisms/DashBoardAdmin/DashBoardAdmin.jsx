import React, { useState } from "react";
//import { NavLink } from "react-router-dom";

import style from "./DashBoardAdmin.module.css";
//import axios from "axios";
//import {GoMail} from "react-icons/go"
//import {BsBoxSeam} from "react-icons/bs"

function DashBoard(){


  return (
          <div className={style.container} >
            <div className={style.flex}>
              <h3 className={style.text}>Bienvenido al panel de administracion!</h3>              
              <h3 className={style.subtext}>Usa las diferentes opciones de arriba para moverte</h3>              
            </div>
          </div>


  );
};

export default DashBoard;