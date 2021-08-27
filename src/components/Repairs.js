import React from "react"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./employees/EmployeeList.js"

export const Repairs = () => {
    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>
            <CustomerList />
            <EmployeeList />
        </>
    )
}