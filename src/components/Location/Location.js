import React from "react"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <address className="location__handicap">This location is handicap accessible: {location.handicapAccessible ? "yes" : "no"}</address>
        <div className="location__squareFootage">square footage: {location.squareFootage}</div>
    </section>
)