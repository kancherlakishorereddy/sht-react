import {React, useEffect} from 'react'

export default function TweetEmbed({id, status, finishRender}) {
    useEffect(() => {
        let el = document.getElementById(id);
        if(status){
            window.twttr.widgets.createTweet(id, el,
                {
                  conversation: 'all',    // or all
                  cards: 'visible',  // or hidden
                  align: "center", // or left or right
                }).then(()=>{finishRender(false)});
        }
    }, [id, status, finishRender]);
    return (
        <div id = {id}>
        </div>
    )
}
