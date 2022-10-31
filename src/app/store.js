import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/User/userSlice'
import cartReducer from '../reducers/Cart/cartSlice'
import registrationReducer from '../reducers/UserRegistration/registrationSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    registration: registrationReducer,
  }
})