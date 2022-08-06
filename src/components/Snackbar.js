import React from "react";
import './Snackbar.css'

const Snackbar = (props) => {


    return (
        <div className="snackbar"
        id={props.showSnackbar ? 'show' : 'hide'}
        style={{backgroundColor: '#3f4370'}}>
            <div className="symbol"><h1>&#x2713;</h1></div>
            <div className="message">movie added to favorite</div>
        </div>
    )
}

export default Snackbar;