import React, { createContext, useEffect, useState } from 'react'
import Cookies from "js-cookie";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
export const Authcontext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [token, settoken] = useState();

    function insertToken(tkn) {
        settoken(tkn);
    }
    function Logout() {
        settoken(null);
        Cookies.remove("token");
    }
    async function getprofile() {
    return axios.get("https://university-system-production.up.railway.app/student/profile/me", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })

  }
  const { data:profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getprofile
  })
    useEffect(function () {
        if (Cookies.get("token") != null) {
            settoken(Cookies.get("token"))
        }
    },[])
    return (
        <Authcontext.Provider value={{ token, settoken, insertToken, Logout,profile }   }>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthContextProvider