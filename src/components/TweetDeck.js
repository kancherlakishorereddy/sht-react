import React, { Component } from 'react'
import Spinner from './Spinner';
import TweetEmbed from './TweetEmbed'

export default class TweetDeck extends Component {
    state={
        script:false,
        hashtag:this.props.hashtag,
        tweets:this.props.tweets,
        total:this.props.tweets.length,
        cnt:Math.min(this.props.tweets.length, 16),
        tweetRender: true
    }

    finishRender=(status)=>{
        if(this.state.tweetRender)
            this.setState({tweetRender:status})
    }
    
    addMore = ()=>{
        let cnt = this.state.cnt;
        cnt += 8;
        this.setState({cnt, tweetRender:true});
    }
    
    componentDidMount () {
        const script = document.createElement("script");
        script.setAttribute("id", "widget-js");
        script.src="https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload=()=>{
            this.setState({script:true});
            let btn = document.getElementById("tweet-btn");
            window.twttr.widgets.createHashtagButton(
                this.state.hashtag, btn,
                {
                  size: "large"
                }
            );
        }
    }

    componentWillUnmount () {
        let script = document.getElementById("widget-js");
        document.body.removeChild(script);
    }

    render() {
        let list = this.state.tweets.slice(0, this.state.cnt)
        const deck = list.map((tweet,index)=>{
            return (
                <div className="mx-auto" key={tweet.id_str+index}>
                    <TweetEmbed id={tweet.id_str} status={this.state.script} finishRender={this.finishRender}/>
                </div>
            )
        })
        return (
            <div className="w-100">
                <h4 className="text-center pb-2 mx-auto" style={{borderBottom:"solid 2px black"}}>#{this.state.hashtag}</h4>
                <div className="mx-auto">
                    {deck}
                    {this.state.tweetRender?<Spinner/>:null}
                </div>
                <div className="d-flex flex-wrap justify-content-center text-center my-4">
                    <div className="m-2">
                        {this.state.cnt < this.state.total?(this.state.tweetRender?<button type="button" className="btn btn-outline-primary" disabled>See More Tweets</button>:
                            <button type="button" className="btn btn-outline-primary" onClick={this.addMore}>See More Tweets</button>):
                        null}
                    </div>
                    <div className="m-2 align-self-center" id="tweet-btn"/>
                </div>
            </div>
        )
    }
}