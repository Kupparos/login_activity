import React from "react";
import { NotificationsProvider } from "@mantine/notifications";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/contacts"
            element={
              <Contacts/>
            }
          />
            <Route path="/" element={<NotificationsProvider><Login /></NotificationsProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
