import React, { Component } from 'react'
import TweetEmbed from 'react-tweet-embed'

export default class TweetDeck extends Component {
    state={
        hashtag:this.props.hashtag,
        tweets:this.props.tweets,
        total:this.props.tweets.length,
        cnt:Math.min(this.props.tweets.length, 24)
    }
    addMore = ()=>{
        let cnt = this.state.cnt;
        cnt += 9;
        this.setState({cnt});
    }
    render() {
        let list = this.state.tweets.slice(0, this.state.cnt)
        const deck = list.map((tweet,index)=>{
            return (
                <div className="mx-auto" key={tweet.id_str+index}>
                    <TweetEmbed id={tweet.id_str} options={{align:"center"}}/>
                </div>
            )
        })
        return (
            <div>
                <h4 className="text-center w-75 pb-2 mx-auto" style={{borderBottom:"solid 2px black"}}>#{this.state.hashtag}</h4>
                <div className="col-12 col-md-8 pt-2 pb-4 mx-auto">
                    {deck}
                </div>
                <div className="text-center">
                    {this.state.cnt < this.state.total?
                        <button type="button" className="btn btn-outline-primary w-25" onClick={this.addMore}>See More Tweets</button>:
                        <a href={"https://twitter.com/search?q=%23"+this.state.hashtag} target="_null" className="btn btn-outline-primary">
                            See on &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#1DA1F2" width="16" height="16" className="bi bi-twitter" viewBox="0 2 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            &nbsp; Twitter
                        </a>
                    }
                </div>
            </div>
        )
    }
}