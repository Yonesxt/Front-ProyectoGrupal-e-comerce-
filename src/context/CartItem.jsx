import React, { createContext, useState, useEffect, useContext } from "react";
import swal2 from 'sweetalert2';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const initialState = {
        total: 0,
        products: []
    }

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
                    if (inCart.amount === inCart.stock) {
                        swal2.fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'No hay suficientes productos en el stock',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        return productInCart;
                    } else {
                        return { ...inCart, amount: inCart.amount + 1 };
                    }
                } else return productInCart;
            })

        } else {
            newItems = [...cartItems, { ...itemToAdd, amount: 1 }]
            swal2.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto agregado a tu carrito',
                showConfirmButton: false,
                timer: 1500
            })
        }

        updateState({ products: newItems });
    };

    const deleteAll = itemToDelete => {
        const cartItems = state.products

        const inCart = cartItems.find(({ id }) => id === itemToDelete.id);

        let itemDelete

        if (inCart) {
            itemDelete = cartItems.filter(({ id }) => id !== itemToDelete.id)
        }

        swal2.fire({
            position: 'center',
            icon: 'error',
            title: 'Producto eliminado de tu carrito',
            showConfirmButton: false,
            timer: 1500
        })

        updateState({ products: itemDelete });
    }

    const deleteItemToCart = itemToDelete => {
        const cartItems = state.products

        const inCart = cartItems.find(({ id }) => id === itemToDelete.id);

        let itemDelete

        if (inCart.amount === 1) {

            itemDelete = cartItems.filter(({ id }) => id !== itemToDelete.id)

            swal2.fire({
                position: 'center',
                icon: 'error',
                title: 'Producto eliminado de tu carrito',
                showConfirmButton: false,
                timer: 1500
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
