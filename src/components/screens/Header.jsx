import React from "react";
import Search from "./Search";

export default function Header({ searchCity }) {
    return (
        <header className="Header" >
            <h1 className="Header__title" > Weather </h1>
            <Search searchCity={searchCity} /> </header>
    );
}