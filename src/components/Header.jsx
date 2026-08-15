/*
    Name: Translator Application
    Author: George Pegiazis (https://github.com/GeorgePeg)
    Date: 13/08/2026
    Version: 1.0.0
    Copyright: © George Pegiazis | All rights reserved.
    License:  GNU General Public License v3.0, 29 June 2007
    Description: Creating the header section of the application 
*/
import React from "react";
import { Languages } from "lucide-react";

export const Header = () => {
    return (
        <header className="app-header">
            <div className="logo-container">
                <Languages className="logo-icon" size={36}/>
                <h1>Ultimate Language Translator</h1>
            </div>
            <p className="app-subtitle">
                Translate anything in any language!
            </p>
        </header>
    );
};