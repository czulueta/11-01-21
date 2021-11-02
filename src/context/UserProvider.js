import React, { useState, useContext } from "react"


export const { UserContext } = React.createContext()

export default function UserProvider(props){
  return(
    <UserProvider>
      {props.children}
    </UserProvider>
  )
}