import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../__firebase.init";

export const contextProvider = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {user, createUser, logIn};

    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;