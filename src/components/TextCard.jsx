/*
    Name: Translator Application
    Author: George Pegiazis (https://github.com/GeorgePeg)
    Date: 15/08/2026
    Version: 1.0.0
    Copyright: © George Pegiazis | All rights reserved.
    License:  GNU General Public License v3.0, 29 June 2007
    Description: Here we handle the translation card.
*/
import React from "react";
import { Volume2, Copy, Check, X } from "lucide-react";

export const TextCard = ({
    value,
    onChange,
    placeholder,
    readOnly = false,
    onSpeak,
    onCopy,
    onClear,
    copied = false,
    isLoading = false,
}) => {
    return (
        <div className={`text-card ${readOnly ? 'read-only' : ''}`}>
            <textarea value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={placeholder}
            readOnly={readOnly}
            className="text-area"
            maxLength={5000}
            />
            <div className="card-footer">
                <div className="action-buttons">
                    {/*Speaker Button*/}
                    {value && onSpeak && (
                        <button onClick={onSpeak}
                        className="icon-button"
                        title="Listen"
                        type="button">
                            <Volume2 size={18}/>
                        </button>
                    )}
                    {/*Copy Button*/}
                    {value && onCopy && (
                        <button onClick={onCopy}
                        className="icon-button"
                        title="Copy to clipboard"
                        type="button">
                            {copied ? <Check size={18} color="#22c55e"/> : <Copy size={18} />}
                        </button>
                    )}
                    {/*Clear Button*/}
                    {value && !readOnly && onClear && (
                        <button onClick={onClear}
                        className="icon-button"
                        title="Clear text"
                        type="button">
                            <X size={18}/>
                        </button>
                    )}
                </div>
                {/*Voice Indicator*/}
                {isLoading && <span className="loading-spinner">Translating...</span>}
            </div>
        </div>
    );
};