import { useState } from "react"
import { useHistory } from "react-router-dom"


export const EmployeeHireForm = () => {
    const [employee, updateEmployee] = useState([])
    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        fetch("http://localhost:8088/employees", fetchOptions)
            .then(res => res.json())
            .then(
                () => history.push("/employees")
            )
    }

    return (
        <>
            <form className="employeeForm">
                <h2 className="employeeForm__title">New Employee</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Employee name"
                            onChange={
                                (event) => {
                                    const copy = { ...employee }
                                    copy.name = event.target.value
                                    updateEmployee(copy)
                                }
                            } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="specialty">Specialty:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Technical specialty"
                            onChange={
                                (event) => {
                                    const copy = { ...employee }
                                    copy.specialty = event.target.value
                                    updateEmployee(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <button className="btn btn-primary" onClick={saveEmployee}>
                    Hire Employee
                </button>
            </form>
        </>
    )
}