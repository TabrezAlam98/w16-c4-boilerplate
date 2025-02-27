import{GET_PRODUCT_DATA_FAILURE,GET_PRODUCT_DATA_REQUEST,GET_PRODUCT_DATA_SUCCESS}from "./actionTypes"
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case GET_PRODUCT_DATA_REQUEST:
      return{
        ...state,
        isLoading: true,
  isError: false,
  filterData: [],
  products: [],
      }
      case GET_PRODUCT_DATA_SUCCESS:
      return{
        ...state,
        isLoading: false,
  isError: false,
  filterData: payload,
  products: payload,
      }
      case GET_PRODUCT_DATA_FAILURE:
      return{
        ...state,
        isLoading: false,
  isError: true,
  filterData: [],
  products: [],
      }
      default:
        return state
  }
};
export { reducer };