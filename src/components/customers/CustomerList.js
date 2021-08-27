import React, { useEffect, useState } from "react"

export const CustomerList = () => {

    //useState is invoked to return state (customers) and a function to 
    //modify state (setCustomers)
    const [customers, setCustomers] = useState([])

    //useEffect takes 2 arguments. A function, and an empty array.
    //in this case, your function will be your fetch call to the API
    // but instead of storing the returned data in a dataAccess module, in a defined variable,
    // we call the function we defined earlier to modify state and pass it the argument
    // of customerArray, in this case, since we are fetching customers.
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(
                (customerArray) => {
                    setCustomers(customerArray)
                },
            )

        },
        []
    )
    //We return jsx, which will contain our html. Interpolation with React does not 
    // require $ before the curly brackets.
    // We wrap our html in two seemingly empty "html" element, but this is actually jsx.
    // It is called a fragment.
    // React only allows to return one element from jsx. 
    return (
        <>
            {customers.map(
                (customerObject) => {
                    return <h2>{customerObject.name}</h2>
                })}
        </>
    )
}