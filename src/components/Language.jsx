/*
    Name: Translator Application
    Author: George Pegiazis (https://github.com/GeorgePeg)
    Date: 13/08/2026
    Version: 1.0.0
    Copyright: © George Pegiazis | All rights reserved.
    License:  GNU General Public License v3.0, 29 June 2007
    Description: Here we handle the selection of the language.
*/
import React from "react";
import { LANGUAGES } from "../constants/languages";

export const LanguageSelect = ({value, onChange, includeAuto = false, label}) => {
    const availableLanguages = includeAuto
    ? LANGUAGES
    : LANGUAGES.filter((lang) => lang.code !== 'auto');

    return (
        <div className="language-select group">
            { label && <label className="select-label"></label>}
            <select value={value} onChange={(e) => onChange(e.target.value)} className="language-select">
                {availableLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};