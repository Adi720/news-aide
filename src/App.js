import React, { useEffect, useState } from "react";

import NewsCards from "./components/NewsCards.js/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";



const alanKey = '46c44c9fbd25b2e0b5ca5c28f727be802e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])
    return (
        <div>
            <h1>ALAN AI NEWS AIDE</h1>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App;
