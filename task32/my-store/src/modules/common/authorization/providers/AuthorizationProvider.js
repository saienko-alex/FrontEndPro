import React, { createContext } from 'react'
import { useState } from 'react';

export const AuthorizationContext = createContext(null);



function AuthorizationProvider({children}) {
    const [user, setUser] = useState(null);

    function login(username, password, role) {
        setUser({
            username,
            role,
        })
    }
function logout() {
    setUser(null);
}

    const contextValue = {
        user,
        isAuthorized: !!user,
        login,
        logout,
    }
  return (
    <AuthorizationContext.Provider value={contextValue}>
        {children}
    </AuthorizationContext.Provider>
  )
}

export default AuthorizationProvider