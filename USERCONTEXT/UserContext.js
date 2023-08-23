import React, { createContext, useEffect, useState } from 'react';

 export const userContext=createContext();

const UserContext = (props) => {

    const [user,setUser]=useState();

    useEffect(()=>{
    const person=window.localStorage.getItem('user')
    setUser(JSON.parse(person));
    },[])
  return (
    <userContext.Provider value={{user,setUser}}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserContext;
