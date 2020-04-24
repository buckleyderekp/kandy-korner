import React from "react"

export default ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__price">Price {product.price}</address>
        <div className="product__category">Category: {productType.type}</div>
    </section>
)