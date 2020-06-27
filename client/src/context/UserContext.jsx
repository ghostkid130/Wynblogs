import React, { useState } from 'react';

export const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [ userAccount, setUserAccount ] = useState({
        firstName: '',  lastName:'',
        email:'',   password:'',
        isAuthor: false
    })

    return(
        <UserContext.Provider
            value={{
                userAccount, setUserAccount
            }}
        >
            {props.children} 
        </UserContext.Provider>
    );
}

export { UserContextProvider }