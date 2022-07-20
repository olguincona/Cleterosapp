import React, { createContext } from 'react'

export const contexto = createContext([{name:'Marco'}, {price:150}, {quantity:10}]);
const { Provider } = contexto;
const CustomProvider = ({ children }) => {
  return (
    <Provider>
    {children}
    </Provider>
  )
}

export default CustomProvider
