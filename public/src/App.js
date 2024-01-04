import React, {lazy,Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const SetAvatar = lazy(() => import('./components/SetAvatar'));
const Chat = lazy(() => import('./pages/Chat'));

export default function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<> Loading... </>}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
