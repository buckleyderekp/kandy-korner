import React from "react"
import LocationList from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"
import ProductList from "./Products/ProductList"
import { ProductProvider } from "./Products/ProductProvider"
import { EmployeeProvider } from "./Employees/EmployeeProvider"
import { ProductTypeProvider } from "./Products/ProductTypeProvider"
import EmployeeList from "./Employees/EmployeeList"
import "./Dashboard.css"

export default () => (
    <>

        <ProductProvider>
            <ProductTypeProvider>
                <ProductList />
            </ProductTypeProvider>
        </ProductProvider>

        <LocationProvider>
            <EmployeeProvider>
                <EmployeeList />
                <LocationList />
            </EmployeeProvider>
        </LocationProvider>

    </>
)