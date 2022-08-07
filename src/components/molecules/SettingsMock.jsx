import React from 'react'
import style from '../../styles/SettingsMock.module.css'
import User from '../../assets/user.png'


const SettingsMock = () => {

    let Muser = {
        id: "110418360648568730405", 
        email: "yones.rpy@gmail.com",
        lastname: "Perez Yones",
       firstname: "Rodrigo ",
        username: "yones.rpy",
        picture: "https://lh3.googleusercontent.com/a-/AFdZucpYhEGbMMWsYEiWe79aGHA5Xhtu_8Twy3SlI3EDbQ=s96-c",
        address:"avenida siempre viva 149"
    }



  return (
    <div>
        <div className={style.wrapper}>
            <h2  className={style.title}>Profile Settings</h2>
            <div  className={style.contimg}>
                <img  className={style.img} src={User} alt="user" />
            </div>
            <h2 className={style.title}>{Muser.username}</h2>
            <div  className={style.info}>
                <h4>Email: {Muser.email}</h4>
                <h4>Address: {Muser.address}</h4>

            </div>
        </div>
    </div>
  )
}

export default SettingsMock