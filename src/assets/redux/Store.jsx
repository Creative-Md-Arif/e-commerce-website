import { configureStore } from '@reduxjs/toolkit'
import ecommerceRedcuer from './EcommerceSlice';

export const store = configureStore({
  reducer: {
    ecommerce: ecommerceRedcuer,
  },
  
});


