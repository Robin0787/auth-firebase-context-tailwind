import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
function App() {

  return (
    <div className="w-4/5 mx-auto">
      <Header />
      <Outlet />
      <Toaster />
    </div>
  )
}

export default App;
