import React from "react";
import "../styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import CreatePassword from "../pages/CreatePassword";
import CreateAccount from "../pages/CreateAccount"
import SendEmail from "../pages/SendEmail";
import AccountEdit from "../pages/AccountEdit";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import MyOrder from "../pages/MyOrder";
import Orders from "../pages/Orders";
import RecoveryPassword from "../pages/RecoveryPassword";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState"

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create-password" element={<CreatePassword />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="/checkout" element={<MyOrder/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/edit-account" element={<AccountEdit/>}/>
            <Route path="/create-account" element={<CreateAccount/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
