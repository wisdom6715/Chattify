import { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext(null);

// The provider function to wrap around components that need access to the context
export default function AuthCreateContext({ children }) {
    const [storedInfo, setStoredInfo] = useState({ name: "", password: "" });

    return (
        <AuthContext.Provider value={{ storedInfo, setStoredInfo }}>
            {children}
        </AuthContext.Provider>
    );
}
