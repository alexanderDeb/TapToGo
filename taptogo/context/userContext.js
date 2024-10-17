import React from "react";

export const userContext = React.createContext({
  user: { email: null, password: null },
  setUser: () => {},
});
