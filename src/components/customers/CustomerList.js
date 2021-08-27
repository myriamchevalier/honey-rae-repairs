import React, { useEffect, useState } from "react"

export const CustomerList = () => {

    //useState() hook returns 2 things : an array, and a function
    //useState is invoked to return state (customers) and a function to 
    //modify state (setCustomers)
    const [customers, setCustomers] = useState([]) //init. value is an empty array
    const [totalCustomerMessage, updateMessage] = useState("") // here, we will be returning a message, so useState() initial value is a blank string

    //useEffect takes 2 arguments. A function, and an empty array.
    //in this case, your function will be your fetch call to the API
    // but instead of storing the returned data in a dataAccess module, in a defined variable,
    // we call the function we defined earlier to modify state and pass it the argument
    // of customerArray, in this case, since we are fetching customers.
    useEffect(
        () => {
            console.log("init")
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

    //useEffect() hook is just like an event listener
    //below, we define a hook to display a message that lets the user know how many customers they have
    // it will only run if you call the variable in which it is stored (see userState), here totalCustomerMessage
    useEffect(
        () => {
            console.log("second")
            if (customers.length === 1){
                updateMessage("You have 1 customer")
            } else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers] //code runs when customersArray changes.
    )
    //We return jsx, which will contain our html. Interpolation with React does not 
    // require $ before the curly brackets.
    // We wrap our html in two seemingly empty "html" element, but this is actually jsx.
    // It is called a fragment.
    // React only allows to return one element from jsx. 
    // React doesn't like element that have no key (a unique identifier, think id)
    return (
        <>
            <div>{totalCustomerMessage}</div>
            {customers.slice(0, 5).map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                })}
        </>
    )
}