import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="container">
            <div class="container__inner">
                <Info />
                <About />
                <Interest />
                <Footer />
            </div>
        </div>
    );
}