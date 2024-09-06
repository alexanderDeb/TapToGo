import { useState } from "react";
import Navigator from "./navigation";
import BottonNavigator from "./bottomNavigator";
import { userContext } from "./context/cardContext.js";

export default function App() {
  const [user, setUser] = useState({ cardNo: null, password: null });
  const value = { user, setUser };
  return (
    <userContext.Provider value={value}>
      {user.cardNo !== null && user.password !== null ? (
        <BottonNavigator />
      ) : (
        <Navigator />
      )}
    </userContext.Provider>
  );
}
