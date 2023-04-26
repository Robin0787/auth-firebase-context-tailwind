import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../__firebase.init";

export const contextProvider = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const instance = onAuthStateChanged(auth, (user) => {
            console.log('Auth state changed',user);
            setUser(user);
            setLoading(false);
        })
        return () => {
            unsubscribe(instance);
        }
    },[]);

    const authInfo = {user, setUser, loading, createUser, logIn, logOut};
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;