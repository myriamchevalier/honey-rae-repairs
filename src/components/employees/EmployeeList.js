import React, { useEffect, useState } from "react"

export const EmployeeList = () => {


    const [employees, setEmployees] = useState([])
    const [specialtiesMessage, displaySpecialties] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(
                (employeeArray) => {
                    setEmployees(employeeArray)
                },
            )

        },
        []
    )
    useEffect(() => {
            const employeeSpecialty = employees.map(employee => employee.specialty)
            displaySpecialties(employeeSpecialty.join(", "))
        }
    , [employees]
    
    )


    return (
        <> 
            <div>
                Specialties: { specialtiesMessage }
            </div>
            {employees.map(
                (employeeObject) => {
                    return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                })}
        </>
    )
}