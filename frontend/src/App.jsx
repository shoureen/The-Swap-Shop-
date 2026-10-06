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

  <Route
    path="/create-listing"
    element={<CreateListing />}
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;