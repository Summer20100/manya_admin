import "./CSS/style.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { useCategories } from "./store/categories";
import { useProducts } from "./store/products";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import Loader from "./pages/components/Loader/Loader";

import './App.css'

function App() {
  const { 
    isError: isCategoriesError, 
    isDownloaded: isCategoriesDownloaded,
    getCategories
  } = useCategories();

  const { 
    isError: isProductsError,
    isDownloaded: isProductsDownloaded,
    getProducts
  } = useProducts();

  useEffect(() => {
    getCategories();
    getProducts();
  }, [getCategories, getProducts]);

  const isDataLoading = !isCategoriesDownloaded || !isProductsDownloaded;

  if (isCategoriesError || isProductsError) return <ErrorPage />;


  return (
    <>
      { isDataLoading && <Loader /> }
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
