import React from 'react'
import log from '../logo2-removebg-preview.png'

function Logo({ width = "100px" }) {

    return (
        <div>
            <img src={log} alt="logo" width={width} />
        </div>
    )
}

export default Logo
