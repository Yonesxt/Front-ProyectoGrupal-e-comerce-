import React from 'react';
import menu from '../../assets/menu.png'
import style from '../../styles/toggleMenu.module.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import SearchBar from './seacrbar';
import { useSelector } from 'react-redux';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'

export default function DrawerExample() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const userLoged = useSelector(state => state.userLoged)
    const btnRef = React.useRef()
    const log = isAuthenticated ? 'Salir' : 'Iniciar sesion'

    const handleSubmit = () => user ? logout() : loginWithRedirect()

    const links = [
        {
            to: '/',
            name: 'inicio',
        },
        {
            to: '/allProducts',
            name: 'Productos',
        },
        {
            to: '/cart',
            name: 'Carrito',
        },
    ]

    const prof = [
        {
            to: '/favorites',
            name: 'Mis favoritos'
        },
        {
            to: `/Orders/${userLoged.id}`,
            name: 'Mis ordenes'
        },
        {
            to: '/userprofile',
            name: 'Informacion personal'
        }
    ]

    return (
        <div className={style.toggleMenu}>
            <div className={style.menuButton}>
                <span>Menu</span>
                <Button ref={btnRef} colorScheme='transparent' onClick={onOpen}>
                    <img src={menu} alt='menu'/>
                </Button>
            </div>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg="gray.900">
                    <DrawerCloseButton color="white"/>

                    <DrawerHeader color="brand.lightGray">
                        Menu
                    </DrawerHeader>

                    <DrawerBody display='flex' flexDir='column' justifyContent='flex-start' overflow="hidden" >
                        
                        <div className={style.searchbar}>
                            <SearchBar/>
                        </div>

                        {links.map(({ to, name }) => (
                            <Link to={to} key={name}>
                                <Button bg="brand.green" borderRadius='4px' m='7px 0 7px' w='100%' onClick={onClose} _hover={{
                                    background: "brand.darkGreen",
                                    color: "white"
                                }}>
                                    <span>
                                        {name}
                                    </span>
                                </Button>
                            </Link>
                        ))}

                        <div>
                            {isAuthenticated &&
                                <Menu isLazy>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        bg="brand.green" borderRadius='4px' m='7px 0 7px' w='100%'
                                        _hover={{
                                            bg: "brand.darkGreen"
                                        }}
                                        _active={{
                                            bg: "brand.darkGreen",
                                        }}
                                    >
                                        Mi Perfil
                                        <HamburgerIcon ml='10px' />
                                    </MenuButton>
                                    <MenuList bg='brand.darkGreen' outline='none'>
                                        {prof && prof.map((link, index) => {
                                            return (
                                                <Link to={link.to} key={index}>
                                                    <MenuItem _hover={{ bg: 'brand.green', color: 'black' }} onClick={onClose}>
                                                        {link.name}
                                                    </MenuItem>
                                                </Link>
                                            )
                                        })}
                                    </MenuList>
                                </Menu>
                            }
                        </div>
                        <Button bg={log === 'Salir' ? "red" : "brand.purple"} color="white" borderRadius='4px' m='7px 0 7px' w='100%' onClick={handleSubmit} _hover={{
                            background: "white",
                            color: "black"
                        }}>
                            <span>{log}</span>
                        </Button>
                    </DrawerBody>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}