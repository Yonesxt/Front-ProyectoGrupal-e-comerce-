import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { getUserByEmail, getUsers } from "../../../../redux/actions";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import style from "./SearchBarUserAdmin.module.css"


export default function SearchBar (){
    const dispatch = useDispatch()
    const [value,setValue] = useState("")

    function inputChangeHandler(e){
    e.preventDefault()
    setValue(e.target.value)
    
    }

    async function submitHandler(e){
        e.preventDefault()
        await dispatch(getUserByEmail(value))
        dispatch(getUsers());

    }
   
   
    return (

        


        <div className={style.container}>
            
            <form className={style.searchbox}>
                <button className={style.searchbtn} type="submit" onClick={(e)=> submitHandler(e)}>
                <FaSearch className={style.icon} aria-hidden='true' id="searchbar-icon"/>
                </button>

                
                <input className={style.search}
                 type="text"
                 placeholder="Search Users by email..."
                 onChange={(e) => inputChangeHandler(e)}                                     
                 id="searchbar-input"
                 />
                
            </form>
        </div>
    )
}