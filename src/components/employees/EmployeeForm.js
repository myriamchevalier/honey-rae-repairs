import { useState } from "react"
import { useHistory } from "react-router-dom"


export const EmployeeHireForm = () => {
    const [employee , updateEmployee] = useState([])
    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()
        //add more code for saving to permanent state here
        // also, refresh page to employees by using history.push
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
                                    const copy = {...employee}
                                    employee.name = event.target.value
                                    updateTicket(copy)
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
                                    const copy = {...employee}
                                    employee.specialty = event.target.value
                                    updateTicket(copy)
                                }
                            }/>
                    </div>
                </fieldset>
                </form>
        </>
    )
}