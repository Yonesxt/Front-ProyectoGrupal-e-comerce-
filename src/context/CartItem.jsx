import React, { createContext, useState, useEffect, useContext } from "react";
import swal from 'sweetalert';
import { useSelector } from 'react-redux'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const initialState = {
        total: 0,
        products: []
    }

    const mensaje = useSelector((state) => state.msgCart)

    const [state, setState] = useState(() => {
        try {
            const productInLocalStorage = localStorage.getItem('cartState');
            return productInLocalStorage
                ? JSON.parse(productInLocalStorage)
                : initialState;
        } catch (error) {
            return initialState
        }
    });
    
    useEffect(() => {
        localStorage.setItem('cartState', JSON.stringify(state))
    }, [state]);


    const updateState = (props) => {
        setState({
            ...state,
            ...props
        })
    }

    const addItemToCart = itemToAdd => {
        const cartItems = state.products
        const inCart = cartItems.find(({ id }) => id === itemToAdd.id);

        let newItems

        if (inCart) {
            newItems = cartItems.map((productInCart) => {
                if (productInCart.id === itemToAdd.id) {
                    if(inCart.amount === inCart.stock){
                        swal({
                            title: "No hay suficientes productos en el stock",
                            input: "text",
                            showCancelButton: true,
                            confirmButtonText: "Guardar",
                            cancelButtonText: "Cancelar",
                            buttons: {
                                cancel: 'ok'
                            }
                        })
                        return productInCart;
                    }else {
                        return { ...inCart, amount: inCart.amount + 1};
                    }
                } else return productInCart;
            })

        } else {
            newItems = [...cartItems, { ...itemToAdd, amount: 1 }]
            swal({
                title: "Producto añadido al carrito",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })
        }

        
        
        updateState({ products: newItems });
    };

    const deleteAll = itemToDelete => {
        const cartItems = state.products

        const inCart = cartItems.find(({ id }) => id === itemToDelete.id);

        let itemDelete

        if(inCart){
            itemDelete = cartItems.filter(({ id }) => id !== itemToDelete.id)
        }

        swal({
            title: "Producto eliminado del carrito",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            buttons: {
                cancel: 'ok'
            }
        })

        updateState({ products: itemDelete });
    }

    const deleteItemToCart = itemToDelete => {
        const cartItems = state.products

        const inCart = cartItems.find(({ id }) => id === itemToDelete.id);

        let itemDelete

        if (inCart.amount === 1) {

            itemDelete = cartItems.filter(({ id }) => id !== itemToDelete.id)
            
            swal({
                title: "Producto eliminado del carrito",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })

            updateState({ products: itemDelete });
        } else {
            itemDelete = cartItems.map((productInCart) => {
                if (productInCart.id === itemToDelete.id) {
                    return { ...inCart, amount: inCart.amount - 1 };
                } else {
                    return productInCart
                }
            });

            updateState({ products: itemDelete });
        }
    }

    const storage = {
        state,
        effects: {
            addItemToCart,
            deleteItemToCart,
            deleteAll
            // deleteAllCart
        }
    }

    return (
        <CartContext.Provider
            value={storage}
        >
            {children}
        </CartContext.Provider>
    )
};













































        // if (inCart) {
        //     newItems = cartItems.map((productInCart) => {
        //         if (productInCart.id === itemToAdd.id) {
        //             return { ...inCart, amount: inCart.amount + 1};
        //         } else return productInCart;
        //     })

        // } else {
        //     newItems = [...cartItems, { ...itemToAdd, amount: 1 }]
        //     swal({
        //         title: "Producto añadido al carrito",
        //         input: "text",
        //         showCancelButton: true,
        //         confirmButtonText: "Guardar",
        //         cancelButtonText: "Cancelar",
        //         buttons: {
        //             cancel: 'ok'
        //         }
        //     })
        // }