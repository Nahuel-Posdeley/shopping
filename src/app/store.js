import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/User/userSlice'
import cartReducer from '../reducers/Cart/cartSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  }
})