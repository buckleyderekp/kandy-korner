import React from "react"
import LocationList from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"
import ProductList from "./Products/ProductList"
import { ProductProvider } from "./Products/ProductProvider"
import { EmployeeProvider } from "./Employees/EmployeeProvider"
import { ProductTypeProvider } from "./Products/ProductTypeProvider"
import EmployeeList from "./Employees/EmployeeList"

export default () => (
    <>
        <LocationProvider>
            <ProductProvider>
                <ProductTypeProvider>
                    <EmployeeProvider>
                        <LocationList />
                        <ProductList />
                        <EmployeeList />
                    </EmployeeProvider>
                </ProductTypeProvider>
            </ProductProvider>
        </LocationProvider>

    </>
)