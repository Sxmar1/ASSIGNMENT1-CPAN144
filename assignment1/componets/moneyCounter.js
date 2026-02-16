import { useState } from 'react';
import React from 'react';

export default function MoneyCounter(nb) {
    //this makes a state called money starting at 0
    const [money, setMoney] = useState(0);
    //this is a function to add 1 to the current balance
    const Increase = () => {
        setMoney(money + 1);
    };

    //this is a function to subtract 1 from the current balance
    const Decrese = () => {
        setMoney(money - 1);
    };

    return (
        //this is the main div for the counter
        <div style={{ border: '1px solid grey', padding: '20px', margin: '10px' }}>
            <h2 style={{ fontSize: '20px' }}>Money Deposit Counter:</h2>
            <br></br>
            <p style={{ fontSize: '20px' }}>Balance: ${money}</p>
            <br></br>

            {/* this is a button when you press it it will Increase the balance using the increae funtion. */}
            <button style={{
                marginRight: '10px',
                border: '1px solid green',
                padding:'5px',
                fontWeight: 'bold'}} onClick={Increase}>Increase</button>

            {/* this is a button when you press it it will Decrese the balance using the Decrese funtion. */}
            <button style={{
                marginRight: '10px', 
                border: '1px solid red',
                padding:'5px',
                fontWeight: 'bold'}} onClick={Decrese}>Decrese</button>
        </div>
    )
}