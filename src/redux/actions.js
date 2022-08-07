import axios from 'axios';
import swal from 'sweetalert';

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME'
export const GET_DETAIL = 'GET_DETAIL'
export const BAN_USER = 'BAN_USER'
export const UPGRADE_USER = 'UPGRADE_USER'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const CLEANER = 'CLEANER'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const PAGINACION = 'PAGINACION'
export const GET_USER_BY_EMAIL = 'GET_USER_BY_EMAIL'
export const GET_FILTER_PRICE = 'GET_FILTER_PRICE'
export const GET_FILTER_BRAND = 'GET_FILTER_BRAND'
export const GET_ORDER_BY_NAME = 'GET_ORDER_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_FILTERS = 'GET_FILTERS'
export const GET_CATE = 'GET_CATE'
export const TOKEN = 'TOKEN'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
export const TOTAL_PRICE = 'TOTAL_PRICE'
export const GET_PRODUCTS_CART = 'GET_PRODUCTS_CART'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const GET_COMMENTS_ID = 'GET_COMMENTS_ID'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const POST_FAVORITE = 'POST_FAVORITE'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const UPDATE_STOCK = 'UPDATE_STOCK'
export const UPDATE_ROL = 'UPDATE_ROL'
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_MSG_CART = 'GET_MSG_CART'
export const POST_ORDERS = 'POST_ORDERS'
export const GET_ALL_USERS_ORDER = 'GET_ALL_USERS_ORDER'
export const NUMBER_PAGE = 'NUMBER_PAGE'
export const GET_ORDER_BY_ID = 'GET_ORDER_BY_ID'



export function getProducts(loc) {
    return async function (dispatch) {
        let json = '';
        loc ? json = await axios(`http://localhost:3001/api/products?name=${loc}`) :
            json = await axios('http://localhost:3001/api/products');
        const data = await json.data;
        return dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    };
};

export function getProductByName(name) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/products?name=${name}`)
        const data = json.data
        return dispatch({
            type: GET_PRODUCT_BY_NAME,
            payload: data
        })
    }
}
export function getOrderById(id) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/orders/${id}`)
        const data = json.data
        return dispatch({
            type: GET_ORDER_BY_ID,
            payload: data
        })
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/product/${id}`)
        const data = json.data
        return dispatch({
            type: GET_DETAIL,
            payload: data
        })
    }
}
export function getUsers() {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/users/`)
        const data = json.data
        return dispatch({
            type: GET_ALL_USERS,
            payload: data
        })
    }
}
export function getUserByEmail(email) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/user/${email}`)
        const data = json.data
        return dispatch({
            type: GET_USER_BY_EMAIL,
            payload: data
        })
    }
}
export function getAllByidUser(id) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/orders/` , {id})
        const data = json.data
        return dispatch({
            type: GET_ALL_USERS_ORDER,
            payload: data
        })
    }
}

export function getFilterBrand() {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/products/brand/all`)
        const data = json.data
        return dispatch({
            type: GET_FILTER_BRAND,
            payload: data
        })
    }
}

export function getFilters(category) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post('http://localhost:3001/api/products/filter', (category))
            return dispatch({ type: GET_FILTERS, payload: data })
        }
        catch (error) {
            return swal({
                title: "No existen resultados para este filtro.",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })
        }
    }
}

export function banUser(body) {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:3001/api/admin/ban', (body))
        return dispatch({
            type: BAN_USER,
            payload: data
        })
    }
}
export function updateProduct(id, update) {
    return async function (dispatch) {
        const { data } = await axios.put('http://localhost:3001/api/products/', ({id, update}))
        return dispatch({
            type: UPDATE_PRODUCT,
            payload: data
        })
    }
}
export function changeRole(id) {
    return async function (dispatch) {
        const { data } = await axios.put('http://localhost:3001/api/users/role/' , (id) )
        return dispatch({
            type: UPDATE_ROL,
            payload: data
        })
    }
}
export function updateStock(id, stock) {
    return async function (dispatch) {
        const { data } = await axios.put('http://localhost:3001/api/products/stock', ({id, stock}))
        return dispatch({
            type: UPDATE_STOCK,
            payload: data
        })
    }
}
export function deleteProduct(id) {
    return async function (dispatch) {
        const { data } = await axios.put('http://localhost:3001/api/product/'  + id )
        return dispatch({
            type: DELETE_PRODUCT,
            payload: data
        })
    }
}
export function upgradeToAdmin(body) {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:3001/api/admin/upgrade', (body))
        return dispatch({
            type: UPGRADE_USER,
            payload: data
        })
    }
}

export function getCate() {
    return async function (dispatch) {
        const json = await axios('http://localhost:3001/api/categories')
        const data = json.data
        return dispatch({
            type: GET_CATE,
            payload: data
        })
    }
}

export function getAllCategories() {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/categories`)
        const data = json.data
        return dispatch({
            type: GET_ALL_CATEGORIES,
            payload: data
        })
    }
}


export function cleaner() {
    return {
        type: CLEANER
    }
}

// export function setProfile(u) {
//     return dispatch ({
//         type: SET_PROFILE,
//         payload: found
//     })
// }

export function getTotalPrice(payload) {
    return {
        type: TOTAL_PRICE,
        payload: payload
    }
}

export function getProductCart(payload) {
    return {
        type: GET_PRODUCTS_CART,
        payload: payload
    }
}

export function getMsgCart(payload) {
    return {
        type: GET_MSG_CART,
        payload: payload
    }
}
///////////////////////////////////   POSTS     ///////////////////////////////////////////



// export async function postProfile (u) {
//         const { data } = await axios.post(`http://localhost:3001/api/users/`, u)
//         return data
// }

export function token(tok, user) { 
    return async function (dispatch) {
        
        const { data } = await axios.post('http://localhost:3001/api/profile',user,
            {
                headers: {
                    'Authorization': `Bearer ${tok}`
                }
            }
        )
        return dispatch({ type: TOKEN, payload: data })
    }
}

export function crateComment(comment) {
    return async function (dispatch) {
        const { data } = await axios.post('http://localhost:3001/api/commentary', (comment))
        return dispatch({ type: CREATE_COMMENT, payload: data })
    }
}

export function getComments(id) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/commentary?productId=${id}`)
        const data = json.data
        return dispatch({
            type: GET_COMMENTS_ID,
            payload: data
        })
    }
}
export function getAllOrder() {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/orders`)
        const data = json.data
        return dispatch({
            type: GET_ALL_ORDERS,
            payload: data
        })
    }
}

export function editComment(comment) {
    return async function (dispatch) {
        const { data } = await axios.put('http://localhost:3001/api/commentary', comment)
        return dispatch({ type: EDIT_COMMENT, payload: data })
    }
}

export function deleteComment(id) {
    return async function (dispatch) {
        const { data } = await axios.delete(`http://localhost:3001/api/commentary?id=${id}`)
        return dispatch({ type: DELETE_COMMENT, payload: data })
    }
}

///////////////////////////////////   POSTS     ///////////////////////////////////////////

export function createProduct(payload) {
    return async function (dispatch) {
        const json = await axios.post(`http://localhost:3001/api/products/`, payload)
        const data = await json.data
        return dispatch({
            type: CREATE_PRODUCT,
            payload: data
        })
    }
}

export function favoritePost(idProducts,idUser) {
    return async function (dispatch) {
        console.log(idProducts,idUser)
        const json = await axios.post(`http://localhost:3001/api/favorite`, idProducts,idUser)
        const data = await json.data
        return dispatch({
            type: POST_FAVORITE,
            payload: data
        })
    }
}

export function postOrder(id, products, shipmentAddress, postalCode) {
    return async function (dispatch) {
        // console.log(products,idUser)
        const {data} = await axios.post(`http://localhost:3001/api/orders`,{UserId: id, products, shipmentAddress, postalCode})
        return dispatch({
            type: POST_ORDERS,
            payload: data
        })
    }
}

//////////////////////////////////////   PUTS   /////////////////////////////////////////

export function changeProfile(id, user) {
    return async function (dispatch) {
        const { data } = await axios.put(`http://localhost:3001/api/users/edit/${id}`, user);
        console.log('aqui en action para el put',user)
        // return dispatch({
        //     type: TOKEN,
        //     payload: user
        // })
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

export function paginacion(payload) {
    return async function (dispatch) {
        return dispatch({
            type: PAGINACION,
            payload: payload
        })
    }
}

export function numberPage(payload) {
    return async function (dispatch) {
        return dispatch({
            type: NUMBER_PAGE,
            payload: payload
        })
    }
}
