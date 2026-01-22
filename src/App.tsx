import React from "react";

import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import { UserProvider } from "./utils/userContext";

const App: React.FC = () => {
  return (
    <div>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </div>
  );
};

export default App;
