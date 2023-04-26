import { useContext } from "react";
import { contextProvider } from "../Providers/AuthProvider";

const Home = () => {
    const {user} = useContext(contextProvider);
    return (
        <div>
            <h1>This is Home {user && <span>{user.name}</span>}</h1>
        </div>
    );
};

export default Home;