import React, { useState,forwardRef,useImperativeHandle } from "react";
import './Snackbar.css'

const Snackbar = forwardRef((props, ref) => {

    const [showSnackbar, setShowSnackbar] = useState(false)

    useImperativeHandle(ref, () => ({
        show() {
            setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false)
            }, 2000);
        }
    }))

    return (
        <div className="snackbar"
        id={showSnackbar ? 'show' : 'hide'}
        style={{backgroundColor: '#00F593'}}>
            <div className="symbol"><h1>&#x2713;</h1></div>
            <div className="message">movie added to favorite</div>
        </div>
    )
})

export default Snackbar;