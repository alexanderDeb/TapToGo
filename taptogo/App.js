import { useState } from "react";
import Navigator from "./navigation";
import BottonNavigator from "./bottomNavigator";
import { userContext } from "./context/userContext.js";

export default function App() {
  const [user, setUser] = useState({ email: null, password: null });
  const value = { user, setUser };
  return (
    <userContext.Provider value={value}>
      {user.email !== null && user.password !== null ? (
        <BottonNavigator />
      ) : (
        <Navigator />
      )}
    </userContext.Provider>
  );
}
