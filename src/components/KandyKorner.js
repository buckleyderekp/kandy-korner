import React from "react"
import LocationList from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"
import ProductList from "./Products/ProductList"
import { ProductProvider } from "./Products/ProductProvider"

export default () => (
    <>
     <LocationProvider>
         <LocationList />
     </LocationProvider>
     <ProductProvider>
         <ProductList/>
     </ProductProvider>

    </>
)