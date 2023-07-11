import axios from "axios"
import { GLOBAL_VARIABLE_API } from "../globalVariableApi/global-variable-api";

export const fetchApi = () => {
    return async function (dispatch, getState) {
        const response = await axios.get(`${GLOBAL_VARIABLE_API}/products?offset=0&limit=10`);
        dispatch(
        {
            type: "FETCH_API",
            payload: response.data
        }
       )
    }
}
export const fetchApiByID = (id) => {
    return async function (dispatch, getstate) {
        const response = await axios.get(`${GLOBAL_VARIABLE_API}/products/${id}`);
        dispatch(
            {
                type: "FETCH_API_BY_ID",
                payload: response.data
            }
        )
    }
}
export const fetchCategories = (id) => {
    console.log(id)
    return async function (dispatch, getstate) {
        const response = await axios.get(`${GLOBAL_VARIABLE_API}/categories/${id}/products?offset=0&limit=10`);
        dispatch(
            {
                type: "FETCH_CATEGORIES",
                payload: response.data
            }
        )
    }
}
export const sendToCart = (item) => {
    return {
        type: "SEND_TO_CART",
        payload: item
    }
}
export const productDetail = (item) => {
    return {
        type: "PRODUCT_ITEM",
        payload: item
    }
}
export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}
export const removeFromCart = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: item
    }
}