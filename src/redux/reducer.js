const initialState = {
    ShopItems: [],
    ProductDetails: {},
    CategoriesPage: [],
    CartPage: []
  };
  
  export default function Reducer(state = initialState, {type, payload}) {
    switch(type) {
        case "FETCH_API":
            return {...state, ShopItems: payload}
        case "FETCH_API_BY_ID":         
          return {
            ...state,
            ProductDetails: payload,
          };
        case "FETCH_CATEGORIES":
          return {
            ...state, CategoriesPage: payload
          }
          case "ADD_TO_CART":
            const isItem = state.CartPage.find(item => item.id === payload.id)
            if(isItem){
              return {
                ...state,
                CartPage: state.CartPage.map(item => {
                if(item.id === payload.id && item.count < 5 ){
                  return {...item, count: item.count + 1}
                } else {
                  return item
                }
                })
              }
            }
            else { 
              return {
                ...state,
                CartPage: [...state.CartPage, {...payload, count: 1}]
              }
            }
          case "REMOVE_FROM_CART":
            return {
              ...state, CartPage: state.CartPage.filter(item => item.id != payload.id)
            }
        default:
            return state
    }
  }