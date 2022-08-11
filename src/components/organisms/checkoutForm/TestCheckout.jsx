import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import swal2 from 'sweetalert2';
import { loadStripe } from '@stripe/stripe-js';
import { getMsgCart, postOrder, URL_BACK } from '../../../redux/actions';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import "bootswatch/dist/cyborg/bootstrap.min.css";
import style from '../../../styles/testCheckout.module.css' 

const stripePromise = loadStripe("pk_test_51LPdB5H9O09Vk58eN5dLZfEZTY7pil4bPkqlWiYchUAjx82DR52o26b4bm8aUoEtqfJuF7BFFcS01wKLUpSJ22d900UhCklx09")

const CheckoutForm = () => {

    const dispatch = useDispatch()


    const totalPrice = useSelector((state) => state.totalPrice)
    const totalProducts = useSelector((state) => state.productsCart)
    const userLoged = useSelector((state) => state.userLoged)

    const { address, postalCode } = userLoged

    const finalProducts = totalProducts?.map(({ id, stock, amount, price }) => {
        return {
            id,
            stock,
            amount,
            price
        }
    })

    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })


        if (!error) {
            const { id } = paymentMethod

            try {
                const { data } = await axios.post(`${URL_BACK}/stripe/api/checkout`, {
                    id,
                    amount: totalPrice
                })
           

                dispatch(getMsgCart(data.msg))

                elements.getElement(CardElement).clear()

                if (data.msg === 'Successful payment') {
                    dispatch(postOrder(userLoged.id, finalProducts, address, postalCode))
                    swal2.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Compra exitosa, recibiras un e-mail con detalles de tu compra',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(() => navigate('/'), 2000)
                    window.localStorage.clear();
                    setTimeout(() => window.location.reload(), 2000)
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className='card card-body'>

            <img
                src='https://idahonews.com/resources/media/54376d60-a84a-48cf-bdac-03a3d32fbccb-full36x25_GettyImages1182622625.jpg?1595459846300'
                alt='imagen de producto'
                className='img-fluid'
            />

            <h3 className='text-center my-2'>Precio Total: $ {totalPrice}</h3>

            <div className='form-group'>
                <CardElement className='form-control' disabled={!stripe} />
            </div>

            <button className='btn btn-success'>
                Comprar/Pagar
            </button>
        </form>
    )
}

function TestCheckout() {
    return (
        <Elements stripe={stripePromise}>
            <div className={style.container}>
                <div >
                    <div>
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    );
}

export default TestCheckout;