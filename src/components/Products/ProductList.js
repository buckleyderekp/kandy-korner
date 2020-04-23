import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product.css"

export default () => {
    const { products } = useContext(ProductContext)

    return (
        <>
        <h2>Products</h2>
        <div className="products">
        {
            products.map(pro => <Product key={pro.id} product={pro} />)
        }
        </div>
        </>
    )
}