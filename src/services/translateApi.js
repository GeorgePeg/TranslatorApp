/*
    Name: Translator Application
    Author: George Pegiazis (https://github.com/GeorgePeg)
    Date: 13/08/2026
    Version: 1.0.0
    Copyright: © George Pegiazis | All rights reserved.
    License:  GNU General Public License v3.0, 29 June 2007
    Description: Here we handle the MyMemory Translation API (1000 words/day for free without a API key).
*/

export const translateText = async (text, source='auto', target = 'el') => {
    if (!text.trim()) return '';

    try {
        const sourceCode = source === 'auto' ? 'autodetect': source;
        const langPair = `${sourceCode}|${target}`;

        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`
        );
        if(!response.ok) {
            throw new Error('Error: Connection with translation server failed!');
        }
        const data = await response.json();
        if (data.responseData && data.responseData.translatedText) {
            return data.responseData.translatedText;
        }
        else {
            throw new Error("No translation was found!")
        }
    }
    catch (error) {
        console.log('API Error: ', error);
        throw new Error("The translation failed! Please try again!");
    }

};
