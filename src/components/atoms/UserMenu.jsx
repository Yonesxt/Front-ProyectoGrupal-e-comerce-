import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import userPic from '../../assets/user.png';
import style from '../../styles/UserMenu.module.css'



const UserMenu = (props) => {
  return (
    <div className={style.Menu}>

      <Menu isLazy>
        <MenuButton as={Button} className={style.menuButton}
          bg="none" color="white" fontSize="1rem"
          _hover={{
            background: "none",
            color: "brand.green",
          }} _active={{
            background: "none",
            color: "white",
          }} >
          <div className={style.imgDiv}>
            <img src={userPic} className={style.img} alt='user' />
          </div>
          <h4>Mi Perfil</h4>
        </MenuButton>
        <MenuList bg="black">
          <Link to="/cart"><MenuItem bg="black" color="white" fontSize="1.2rem" _hover={{
            background: "green",
            color: "black",
          }} >

            Mi Carrito

          </MenuItem></Link>
          <Link to="/favorites"><MenuItem bg="black" color="white" fontSize="1.2rem" _hover={{
            background: "green",
            color: "black",
          }}>

            Mis Favoritos

          </MenuItem></Link>
          <Link to={`/Orders/${props.id}`} ><MenuItem bg="black" color="white" fontSize="1.2rem" _hover={{
            background: "green",
            color: "black",
          }}>

            Mis Ordenes

          </MenuItem></Link>
          <Link to="/userprofile"><MenuItem bg="black" color="white" fontSize="1.2rem" _hover={{
            background: "green",
            color: "black",
          }}>

            Información

          </MenuItem></Link>
          {props.isAdmin && <Link to="/admin"><MenuItem bg="black" color="white" fontFamily="Share Tech, sans-serif" fontSize="1.2rem" _hover={{
            background: "green",
            color: "black",
          }}>

            Panel de Administración

          </MenuItem></Link>}
        </MenuList>
      </Menu>
    </div>
  )
}

export default UserMenu