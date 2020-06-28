import React, { useState } from 'react';

export const BlogContext = React.createContext()

const BlogContextProvider = (props) => {

    const [ blogEntry, setBlogEntry ] = useState({})


    return(
        <BlogContext.Provider
            value={{
                blogEntry, setBlogEntry
            }}
        >
            {props.children} 
        </BlogContext.Provider>
    );
}

export { BlogContextProvider }