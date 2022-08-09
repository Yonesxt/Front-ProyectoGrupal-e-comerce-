import {
    UPDATE_STOCK,
    POST_FAVORITE,
    GET_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_DETAIL,
    CLEANER,
    CREATE_PRODUCT,
    PAGINACION,
    BAN_USER,
    UPGRADE_USER,
    GET_ALL_CATEGORIES,
    GET_USER_BY_EMAIL,
    GET_FILTERS,
    GET_CATE,
    GET_ALL_USERS,
    GET_ALL_USERS_ORDER,
    TOKEN,
    UPDATE_PRODUCT,
    TOTAL_PRICE,
    GET_PRODUCTS_CART,
    GET_FILTER_BRAND,
    GET_COMMENTS_ID,
    CREATE_COMMENT,
    DELETE_COMMENT,
    DELETE_PRODUCT,
    UPDATE_ROL,
    GET_MSG_CART,
    NUMBER_PAGE,
    GET_ALL_ORDERS,
    GET_ORDER_BY_ID,
    GET_ALL_COMMENTS,
    DELETE_FAVORITE,
    GET_USER_FAVORITES,
} from './actions'

const initialState = {
    data: [],
    copyData: [],
    searchedProducts: [],
    detail: [],
    clean: [],
    productsPerPage: 15,
    pages: 1,
    productsToRender: [],
    filterPrice: [],
    categories: [],
    allCategories: [],
    allUsers: [],
    searchedUser: [],
    laptos: [],
    filters: [],
    filterBrands: [],
    cate: [],
    token: [],
    totalPrice: 0,
    productsCart: [],
    userLoged: {},
    commentsUserXProduct: [],
    commentsCreateXProduct: [],
    msgCart: '',
    commentsUser: [],
    UserOrders:[],
    allOrders:[],
    currentOrder:[],
    allComments:[],
    UserFavs:[],
    
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                data: payload,
                copyData: payload,
            }
        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                searchedProducts: payload
            }
            case GET_ALL_USERS_ORDER:
                return {
                ...state,
                UserOrders: payload
            }
            case GET_ALL_COMMENTS:
                return {
                ...state,
                allComments: payload
            }
            case GET_ORDER_BY_ID:
                return {
                ...state,
                currentOrder: payload
            }
            case GET_USER_FAVORITES:
                return {
                ...state,
                UserFavs: payload
            }
        case GET_ALL_ORDERS:
            return {
                ...state,
                allOrders: payload
            }
        case CREATE_PRODUCT:
            return {
                ...state,
            }
            case UPDATE_STOCK:
            return {
                ...state,
            }
        case POST_FAVORITE:
            return {
                ...state,
            }
        case DELETE_FAVORITE:
            return {
                ...state,
            }
            case BAN_USER:
            return {
                ...state,
            }
        case UPDATE_ROL:
            return {
                ...state,
            }
            case UPGRADE_USER:
            return {
                ...state,
            }
            case DELETE_PRODUCT:
            return {
                ...state,
            }

            case GET_DETAIL:
                return {
                ...state,
                detail: payload
            }
            case UPDATE_PRODUCT:
                return {
                ...state,
            }
            case GET_USER_BY_EMAIL:
            return {
                ...state,
                searchedUser: payload,
            };
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: payload
            }
        case CLEANER:
            return {
                ...state,
                detail: []
            }
            case PAGINACION:
            return {
                ...state,
                productsToRender: payload   //state.data.slice(payload, payload + state.productsPerPage)
            }
            case NUMBER_PAGE:
                return {
                    ...state,
                    pages: payload
                }
                case GET_FILTERS:
                    return {
                ...state,
                data: payload,
                filters: payload,
                laptos: payload,
            }
        case GET_FILTER_BRAND:
            return {
                ...state,
                filterBrands: payload
            }
        case GET_CATE:
            return {
                ...state,
                cate: payload
            }
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: payload,
            }
        case TOKEN:
            return {
                ...state,
                userLoged: payload
            }
        case TOTAL_PRICE:
            return {
                ...state,
                totalPrice: payload
            }
        case GET_PRODUCTS_CART:
            return {
                ...state,
                productsCart: payload
            }
        case GET_COMMENTS_ID:
            return {
                ...state,
                commentsUserXProduct: payload
            }
        case CREATE_COMMENT:
            return {
                ...state,
                commentsCreateXProduct: payload
            }
        case DELETE_COMMENT:
            return {
                ...state,
                // commentsCreateXProduct: payload
            }
        case GET_MSG_CART:
            return {
                ...state,
                msgCart: payload
            }
        default: return state;
    }
}


export default rootReducer;