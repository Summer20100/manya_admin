import "./CSS/style.css";
import { BrowserRouter, Routes, Route } from "react-router" 
import { useCategories } from "./store/categories";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage"
import ErrorPage from "./pages/ErrorPage"
import Loader from "./pages/components/Loader/Loader";

import './App.css'

function App() {
  const { isError, isDownloaded } = useCategories();

  if (isError) return <ErrorPage />;

  return (
    <>
      { !isDownloaded && <Loader /> }
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
