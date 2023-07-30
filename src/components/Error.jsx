import React from 'react'

const Error = (err) => {
    return (
        <div>
            <h2>{err}</h2>
            <h4>Check your Internet Connection!</h4>
            <h4>Or Try Again Later!</h4>
        </div>
    )
}

export default Error