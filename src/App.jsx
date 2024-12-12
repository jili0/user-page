import { useState, createContext } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter.jsx";

export const userContext = createContext();

const App = () => {
  const [user, setUser] = useState({
    name: "Mustermann",
    email: "muster-email@test.com",
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      <RouterProvider router={appRouter} />
    </userContext.Provider>
  );
};
export default App;
