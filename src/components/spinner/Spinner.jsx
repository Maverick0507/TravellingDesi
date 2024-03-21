import React from 'react'
import './style.css'
const Spinner = () => {
    return (
        <div style={{paddingTop:'10%', display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner
