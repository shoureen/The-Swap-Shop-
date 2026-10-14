import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

     <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/marketplace"
    element={<Marketplace />}
  />

  <Route
    path="/listing/:id"
    element={<ListingDetails />}
  />
  <Route path="/login" element={<Login />} />

  <Route
    path="/create-listing"
    element={<CreateListing />}
  />
  <Route
    path="/register"
    element={<Register />}
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;