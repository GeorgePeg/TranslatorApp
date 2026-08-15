/*
    Name: Translator Application
    Author: George Pegiazis (https://github.com/GeorgePeg)
    Date: 15/08/2026
    Version: 1.0.0
    Copyright: © George Pegiazis | All rights reserved.
    License:  GNU General Public License v3.0, 29 June 2007
    Description: Here we handle the functionalities of the translation card.
*/
import React from "react";
import { ArrowLeftRight, Languages } from "lucide-react";

export const ControlBar = ({onSwap, onTranslate, disabledSwap, isLoading}) => {
    return (
        <div className="control-bar">
            <button onClick={onSwap}
            disabled={disabledSwap}
            className="swap-button"
            title="Swap Languages"
            type="button">
                <ArrowLeftRight size={20} />
            </button>
            <button onClick={onTranslate}
            disabled={isLoading}
            className="translate-button"
            type="button">
                <Languages size={18} />
                {isLoading ? 'Translating...' : 'Translate'}
            </button>
        </div>
    );
};