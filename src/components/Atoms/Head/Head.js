// Css
import "./Head.css"

// React
import React from 'react';

// Header wrapper component 
const Head = ({
    text = 'Battleship',
}) => {

    // Dynamic styles
    const styles = {
        
    }
    return (
        <h2 className="head" style={styles}>{text}</h2>
    );
}
export default Head;
