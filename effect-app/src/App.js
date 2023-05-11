import React, { useState, useEffect } from "react";
import AuthContext from "./Auth-context";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logInfo = localStorage.getItem("loggedIn");
    if (logInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,
      onLogin:loginHandler,
      onLogout:logoutHandler
  }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login  />}
        {isLoggedIn && <Home  />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
