import React, { useContext } from "react"
import Product from "./Product"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider"
import "./Product.css"

export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)

    return (
        <>
        <h2>Products</h2>
        <div className="products">
        {
            products.map(pro => {
                
                const matchingProductType = productTypes.find(type => type.id === pro.typeId) || {}
                
               return <Product key={pro.id} product={pro} 
                   productType={matchingProductType}/>
            })
        }
        </div>
        </>
    )
}