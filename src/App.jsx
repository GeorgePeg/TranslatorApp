/*
    Name: Translator Application
    Author: George Pegiazis (https://github.com/GeorgePeg)
    Date: 15/08/2026
    Version: 1.0.0
    Copyright: © George Pegiazis | All rights reserved.
    License:  GNU General Public License v3.0, 29 June 2007
    Description: Here we handle the main page of the translator application.
*/
import React from "react";
import { Header } from './components/Header';
import { LanguageSelect } from './components/Language';
import { TextCard } from './components/TextCard';
import { ControlBar } from './components/ControlBar';
import { useTranslation } from './hooks/useTranslations';
import './App.css';

function App() {
    //Initialization of the App
    const {
        sourceLang,
        setSourceLang,
        targetLang,
        setTargetLang,
        inputText,
        setInputText,
        outputText,
        setOutputText,
        isLoading,
        error,
        copied,
        handleTranslate,
        handleSwapLanguages,
        handleCopy,
        handleClear,
        handleSpeech,
    } = useTranslation();

    return (
        <div className="app-container">
            <Header />
            <main className="translation-card">
                <div className="language-controls">
                    <LanguageSelect
                    value={sourceLang}
                    onChange={setSourceLang}
                    includeAuto={true}
                    label="From"
                    />
                    <LanguageSelect
                    value={targetLang}
                    onChange={setTargetLang}
                    includeAuto={false}
                    label="To"
                    />
                </div>
                <div className="text-cards-container">
                    <TextCard
                    value={inputText}
                    onChange={setInputText}
                    placeholder="Type or paste your text here..."
                    onSpeak={() => handleSpeech(inputText, sourceLang)}
                    onClear={handleClear}
                    />
                    <TextCard
                    value={outputText}
                    onChange={setOutputText}
                    placeholder="Translation results will apear here..."
                    onSpeak={() => handleSpeech(outputText, targetLang)}
                    onClear={handleClear}
                    onCopy={() => handleCopy(outputText)}
                    copied={copied}
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <ControlBar
                onSwap={handleSwapLanguages}
                onTranslate={handleTranslate}
                disabledSwap={sourceLang === 'auto'}
                isLoading={isLoading}
                />
            </main>
        </div>
    );
};
export default App;