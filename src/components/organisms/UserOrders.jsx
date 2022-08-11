import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { crateComment, getAllByidUser } from "../../redux/actions";
import style from "../../styles/UserOrders.module.css";
import swal2 from 'sweetalert2';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from '@chakra-ui/react'

const UserOrders = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getAllByidUser(id))
  }, [])

  const allOrders = useSelector((state) => state.UserOrders)

  // ----------------------------------------------------------
  const usercurrent = useSelector(state => state.userLoged)
  const idUser = usercurrent.id
  const [input, setInput] = useState({
    text: '',
    rating: 0,
    productId: '',
    userId: idUser
  })

  const myOrders = allOrders.filter((e) => e.UserId === idUser)

  const [option, setOption] = useState(true)

  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleOption(e) {
    e.preventDefault(e)
    const idPro = e.target.value
    setInput({
      ...input,
      productId: idPro
    })
    setOption(false)
  }

  function handleText(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      text: e.target.value
    });
  }

  function handleRating(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      rating: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    dispatch(crateComment(input));
    setInput({
      text: '',
      rating: 0,
      productId: '',
      userId: idUser
    })
    setOption(true)
    swal2.fire({
      position: 'center',
      icon: 'success',
      title: 'Gracias por su comentario',
      showConfirmButton: false,
      timer: 1500
    })
    onClose()
  }

  const optionsRating = [
    {
      value: '1',
    },
    {
      value: '2',
    },
    {
      value: '3',
    },
    {
      value: '4',
    },
    {
      value: '5',
    },
  ]

  return (
    <div className={style.container}>
      <h2 className={style.Title}> Mis ordenes</h2>

      {myOrders && myOrders.length ? (
        <>
          {myOrders.map((order) => {
            return (
              <div className={style.Card} key={order.id}>
                <div>
                  <h4 className={style.firstInfo}> {order.date.slice(0, 10)} </h4>
                </div>
                {order.Products.map((item) => {
                  return (
                    <div className={style.productDiv}>
                      <div className={style.divImg}>
                        <img src={item.image} alt="item" />
                      </div>
                      <div className={style.productDivinfo}>
                        <div >
                          <h3>{item.name}</h3>
                          <h3 className={style.productDivinfobrand}>{item.brand}</h3>
                        </div>
                        <div>
                          <h3>$ {item.price}</h3>
                        </div>
                      </div>
                      <div className={style.productDivinfo}>
                        {
                          option
                            ?
                            <button value={item.id} onClick={e => handleOption(e)} className={style.btn}> Opciones</button>
                            :
                            <>
                              <Link to={`/details/${item.id}`}>
                                <button className={style.btn}> Ver detalle</button>
                              </Link>
                              <button className={style.btn} onClick={onOpen}> Dejar Reseña</button>
                            </>
                        }
                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Escribe tu comentario y calificanos.</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <fieldset>
                                <div className={style.numbers}>
                                  {
                                    optionsRating.map(({ value }) => {
                                      return (
                                        <div >
                                          <div>
                                            <input className={style.numberInput} type="radio" id={value} name="rating" value={value} onChange={e => handleRating(e)}
                                            />
                                            <label for="huey">{value}</label>
                                          </div>
                                        </div>
                                      )
                                    })
                                  }
                                </div>
                              </fieldset>
                              <Textarea placeholder='Escribe tu comentario aqui...' value={input.text} onChange={e => handleText(e)} className={style.texarea} />
                            </ModalBody>
                            <ModalFooter>
                              <button colorScheme='blue' mr={3} onClick={onClose} className={style.btnModal}>
                                Cancelar
                              </button>
                              <button variant='ghost' onClick={(e) => handleSubmit(e)} className={style.btnModal}>Crear Comentario</button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </div>
                    </div>
                  )
                })}
              </div>
            );
          })}
        </>
      ) : (
        <div>
          No encontramos Ordenes asignadas a tu usuario :C
        </div>
      )}
    </div>
  );
};

export default UserOrders;
