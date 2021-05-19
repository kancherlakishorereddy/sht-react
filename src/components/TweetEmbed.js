import {React, useEffect} from 'react'
import Spinner from './Spinner'

export default function TweetEmbed({id, status}) {
    useEffect(() => {
        let el = document.getElementById(id);
        if(status){
            window.twttr.widgets.createTweet(id, el,
                {
                  conversation: 'all',    // or all
                  cards: 'visible',  // or hidden
                  align: "center", // or left or right
                }).then(()=>{
                    let ch = el.children;
                    el.removeChild(ch[0]);
                });
        }
    }, [id, status]);
    return (
        <div id = {id} style={{minHeight:"50px"}}>
            <Spinner/>
        </div>
    )
}
