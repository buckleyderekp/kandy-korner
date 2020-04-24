import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../Location/LocationProvider"
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const manager = useRef()
    const fullTime = useRef()
    const employeePay = useRef()

    const constructNewEmployee = () => {
        const isManager = (manager.current.value === "yes" ? true : false)
        const isFullTime = (fullTime.current.value === "yes" ? true : false)
        const locationId = parseInt(location.current.value)
        const hourlyPay = parseInt(employeePay.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId: locationId,
                manager: isManager,
                fulltime: isFullTime,
                hourlyRate: hourlyPay
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeePay">Hourly Pay: </label>
                    <input
                        type="text"
                        id="employeePay"
                        ref={employeePay}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Hourly Rate"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Is this employee full time: </label>
                    <select
                        defaultValue=""
                        name="fullTime"
                        ref={fullTime}
                        id="isFullTime"
                        className="form-control"
                    >
                        <option value="0">Select option</option>
                            <option>Yes</option>
                            <option>No</option>
                        
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Is this employee a manager: </label>
                    <select
                        defaultValue=""
                        name="manager"
                        ref={manager}
                        id="isManager"
                        className="form-control"
                    >
                        <option value="0">Select option</option>
                            <option>Yes</option>
                            <option>No</option>
                        
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}