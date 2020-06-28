import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [ userAccount, setUserAccount ] = useState({
        firstName: '',  lastName:'',
        email:'',   password:'',
        isAuthor: false
    })

    useEffect( () => {
        localStorage.setItem('author', userAccount.isAuthor)
    }, [userAccount.isAuthor])

    return(
        <UserContext.Provider
            value={{
                userAccount, setUserAccount,
            }}
        >
            {props.children} 
        </UserContext.Provider>
    );
}

export { UserContextProvider }