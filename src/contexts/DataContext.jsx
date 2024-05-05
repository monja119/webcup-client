import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    return (
        <DataContext.Provider value={{
            user,
            setUser,
            token,
            setToken
            }}>
            {children}
        </DataContext.Provider>
    );
    
}

export function useData() {
  return useContext(DataContext);
}