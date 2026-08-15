/*
    Name: Translator Application
    Author: George Pegiazis (https://github.com/GeorgePeg)
    Date: 13/08/2026
    Version: 1.0.0
    Copyright: © George Pegiazis | All rights reserved.
    License:  GNU General Public License v3.0, 29 June 2007
    Description: Here we handle the translations. We also handle the swap, the 
    copy-to-clipboard and the text-to-speech features. 
*/

import { useState } from "react";
import { translateText } from '../services/translateApi';

export const useTranslation = () => {

    //Default Initialization
    const [sourceLang, setSourceLang] = useState('auto');
    const [targetLang, setTargetLang] = useState('el');
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [copied, setIsCopied] = useState(false);

    //Translation Execution
    const handleTranslate = async () => {
        if(!inputText.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const result = await translateText(inputText, sourceLang, targetLang);
            setOutputText(result);
        }
        catch (error) {
            setError(error.message || 'Προέκυψε προβλήμα κατά την μετάφραση!');
        }
        finally {
            setIsLoading(false);
        }
    };
    // Swapping Languages
    const handleSwapLanguages = () => {
        if (sourceLang === 'auto') return;
        setSourceLang(targetLang);
        setTargetLang(sourceLang);
        setInputText(outputText);
        setOutputText(inputText);
    };
    // Clear the Input/Output fields
    const handleClear = () => {
        setInputText('');
        setOutputText('');
        setError(null);
    };
    // Copy the Output to clipboard
    const handleCopy = async (textToCopy) => {
        if (!textToCopy) return;
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); //Return after 2 seconds
        } 
        catch (err) {
            console.log('Αποτυχία αντιγραφής!', err);
        }
    };
    // Text-to-Speech through SpeechSynthesis native browser API 
    const handleSpeech = (text, lang) => {
        if (!text) return;

        if (!('speechSynthesis' in window)) {
            alert('Ο browser δεν υποστηρίζει την λειτουργία εκφώνησης για τα κείμενα!');
            return;
        }
        window.speechSynthesis.cancel(); //Deleting the previous synthesis
        const utterance = new SpeechSynthesisUtterance(text);
        const langMap = {
            'el': 'el-GR',
            'en': 'en-US',
            'de': 'de-DE',
            'pl': 'pl-PL',
            'nl': 'nl-NL',
            'ro': 'ro-RO',
            'pt': 'pt-PT',
            'it': 'it-IT',
            'es': 'es-ES',
            'fr': 'fr-FR',
            'ja': 'ja-JP',
            'zh': 'zh-CN',
            'ar': 'ar-SA',
            'hu': 'hu-HU'
        };
        
        utterance.lang = langMap[lang] || (lang === 'auto' ? 'el-GR' : lang);
        window.speechSynthesis.speak(utterance);
    };

    return {
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
        handleClear,
        handleTranslate,
        handleCopy,
        handleSpeech,
        handleSwapLanguages,
    };
};