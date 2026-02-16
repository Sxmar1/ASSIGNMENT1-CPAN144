import React from 'react';
//This is the navbar componet.
export default function navbar(nb) {
    return (
        //This is the main nav bar with a green background and padding
        <nav style={{ padding: '12px', backgroundColor: 'Green' }}>
            {/* These are 3 buttons where when you click on one of them they will go to their pages like home button will go to the home Page */}
            <button style={{marginRight: '20px'}} onClick={() => nb.onNavigate('Home')}>Home</button>
            <button style={{marginRight: '20px'}} onClick={() => nb.onNavigate('Money Counter')}>Money Counter</button>
            <button style={{marginRight: '20px'}} onClick={() => nb.onNavigate('About Me')}>About Me</button>
        </nav>
    );
}