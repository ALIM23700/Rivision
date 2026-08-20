import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({isloggedin,children}) => {
 if (!isloggedin){
    return <Navigate to="/" replace></Navigate>
 }
 else
    return children;
}

export default Protected