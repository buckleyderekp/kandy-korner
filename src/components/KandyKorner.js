import React from "react"
import LocationList from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"
import ProductList from "./Products/ProductList"
import { ProductProvider } from "./Products/ProductProvider"
import { ProductTypeProvider } from "./Products/ProductTypeProvider"

export default () => (
    <>
        <LocationProvider>
            <ProductProvider>
                <ProductTypeProvider>
                    <LocationList />
                    <ProductList />
                </ProductTypeProvider>
            </ProductProvider>
        </LocationProvider>

    </>
)