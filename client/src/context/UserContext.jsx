import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [ userAccount, setUserAccount ] = useState({
        firstName: '',  lastName:'',
        email:'',   password:'',
        isAuthor: false
    })
    const [ authorEntries, setAuthorsEntries ] = useState([])
    const [ authorToken, setAuthorToken ] = useState(false)



    useEffect( () => {
        console.log("hello")
        localStorage.setItem('author', userAccount.isAuthor)
        setAuthorToken(localStorage.getItem('author'))
    }, [userAccount.isAuthor])

    return(
        <UserContext.Provider
            value={{
                userAccount, setUserAccount,
                authorEntries, setAuthorsEntries,
                authorToken, setAuthorToken
            }}
        >
            {props.children} 
        </UserContext.Provider>
    );
}

export { UserContextProvider }