import React, { useContext } from 'react'
import { Authcontext } from '../../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';
import Cookies from "js-cookie";

const ProtectedRouts = ({ children }) => {


  if (Cookies.get("token") == null) {
    return <Navigate to="/rolelogin" />
  }
  return children;
}

export default ProtectedRouts