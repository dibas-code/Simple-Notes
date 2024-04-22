import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services"
import Rooms from "./components/Rooms";
import DividerLine from "./components/DividerLine";

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Intro />
            <DividerLine />
            <Services />
            <DividerLine />
            <Rooms />
            <DividerLine />
        </div>
    )
}
