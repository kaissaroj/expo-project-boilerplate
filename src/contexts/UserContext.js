import React from "react";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const DEFAULT_STATE = {
  isAuth: false,
  appError: null,
};

function userReducer(state, action) {
  switch (action.type) {
    case "login": {
      return { ...state, isAuth: true };
    }
    case "logout": {
      return { ...state, isAuth: false };
    }
    case "error": {
      return { ...state, appError: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, DEFAULT_STATE);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function userState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("userState must be used within a UserProvider");
  }
  return context;
}
function userDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("userDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, userState, userDispatch };
