import React from "react"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className = "employee__fulltime">full time: {employee.fullTime ? "yes" : "no"} </div>
        <div className = "employee__manager">manager: {employee.manager ? "yes" : "no"} </div>
        <div className = "employee__pay">pay: ${employee.hourlyRate} </div>
        <address className="employee__location">works at: {location.address}</address>
        
    </section>
)