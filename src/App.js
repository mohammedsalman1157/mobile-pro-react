// src/App.js
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecentProducts from "./components/RecentProducts";
import SimilarProducts from "./components/SimilarProducts";
import SelectedProduct from "./components/SelectedProduct";

function App() {
    return (
        <div>
            <Navbar />
            <SelectedProduct />
            <SimilarProducts />
            <RecentProducts />
            <Footer />
        </div>
    );
}

export default App;
