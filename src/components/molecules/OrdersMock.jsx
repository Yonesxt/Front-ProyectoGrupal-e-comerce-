import React from 'react'

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
        <div>
            <h2>Profile Settings</h2>
            <img src={Muser.picture} alt="user" />
            <h2>{Muser.username}</h2>
            <div>
                <h4>Email: ${Muser.email}</h4>
                <h4>Address: ${Muser.address}</h4>

            </div>
        </div>
    </div>
  )
}

export default SettingsMock