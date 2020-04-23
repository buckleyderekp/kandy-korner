import React from "react"

export default ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__price">{product.price}</address>
        <size className="product__category"> {product.typeId}</size>
    </section>
)