import { useState } from "react";
import React from "react";

export default function Aboutme(nb) {
    //this variable sotres the number of likes and starts it at 0
    const [likes, Setlikes] = useState(0);

    //this function adds 1 to the count when its called
    const likeimp = () => {
        Setlikes(likes + 1);
    };

    return (
        // this is the main div for the about me section
        //here we have the h2,p,and br for break and some css elemnts.
        <div style={{padding: '20px',textAlign: 'center'}}>
            <h2  style={{fontSize: '30px'}}>About Me</h2>
            <br></br>
            <p style={{border: '1px solid grey',padding:'20px'}}>
                Hi, My Name is Samar Chughtai, My student number is N01759596. This is
                my first assignment for Front End Programming.
            </p>
            <br></br>
            <h1>Profile Likes: {likes}</h1>
            <p>If you liked my Profile please like here:</p>
            <br></br>
            {/* this is the button when clicked it will call the likeimp function and increase the like count */}
            <button style={{border: '1px solid grey',padding: '10px'}} onClick={likeimp}>Like +1</button>
        </div>
    );
}
