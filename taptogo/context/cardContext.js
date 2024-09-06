import React from "react";

export const userContext = React.createContext({
  user: { cardNo: null, password: null },
  setUser: () => {},
});
