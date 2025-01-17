import "./CSS/style.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { useCategories } from "./store/categories";
import { useProducts } from "./store/products";
import { useClients } from "./store/clients";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import Loader from "./pages/components/Loader/Loader";
import { ErrorNotification, MessageNotification } from "./pages/components/Notification"

import './App.css'

function App() {
  const { 
    isError: isCategoriesError, 
    isDownloaded: isCategoriesDownloaded,
    message: messageCategories, 
    error: errorCategories,
    getCategories
  } = useCategories();

  const { 
    isError: isProductsError,
    isDownloaded: isProductsDownloaded,
    message: messageProducts, 
    error: errorProducts,
    getProducts
  } = useProducts();

  const { 
    isError: isClientsError,
    isDownloaded: isClientsDownloaded,
    message: messageClients,
    error: errorClients,
    getClients
  } = useClients();

  useEffect(() => {
    getCategories();
    getProducts();
    getClients();
  }, [getCategories, getProducts, getClients]);


  const closeNotification = () => {
    useCategories.getState().clearNotifications();
    useProducts.getState().clearNotifications();
    useClients.getState().clearNotifications();
  };


  const isDataLoading = !isCategoriesDownloaded || !isProductsDownloaded || !isClientsDownloaded;

  if (isCategoriesError) return <ErrorPage />;
  if (isProductsError) return <ErrorPage />;
  if (isClientsError) return <ErrorPage />;


  return (
    <>
      { isDataLoading && <Loader /> }

      {errorCategories && <ErrorNotification message={errorCategories} onClose={closeNotification} />}
      {errorProducts && <ErrorNotification message={errorProducts} onClose={closeNotification} />}
      {errorClients && <ErrorNotification message={errorClients} onClose={closeNotification} />}
      
      {messageCategories && <MessageNotification message={messageCategories}  onClose={closeNotification}/>}
      {messageProducts && <MessageNotification message={messageProducts}  onClose={closeNotification}/>}
      {messageClients && <MessageNotification message={messageClients}  onClose={closeNotification}/>}

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
