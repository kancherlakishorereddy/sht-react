import {React, useEffect} from 'react'
import Spinner from './Spinner'

export default function TweetEmbed({id, status}) {
    useEffect(() => {
        console.log("using effect on: "+id);
        let el = document.getElementById(id);
        if(status){
            console.log("script loadwd on: "+id);
            console.log("loading tweet: "+id);
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
