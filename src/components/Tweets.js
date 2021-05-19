import React, { Component } from 'react'
import TweetDeck from './TweetDeck'
import axios from 'axios'
import Spinner from './Spinner'

export default class Tweets extends Component {
    state={
        hashtag:'',
        tweets:[],
        error:'',
        loading:false
    }
    
    handleChnage =(e)=>{
        this.setState({hashtag:e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let hashtag = e.target[0].value;
        let curTag = new URLSearchParams(this.props.location.search).get("hashtag")
        if(hashtag === curTag){
            this.getTweets(hashtag)
        }else{       
            this.props.history.push("/tweets?hashtag="+hashtag);
        }
    }

    getTweets = (hashtag)=>{
        let url = 'https://support-hashtag.herokuapp.com/tweets?hashtag='+hashtag;
        this.setState({tweets:[], hashtag, error:'', loading:true});
        axios.get(url).then((response)=>{
            let curTag = new URLSearchParams(this.props.location.search).get("hashtag")
            if(response.data.hashtag !== curTag)
                return;
            if(response.data.hashtag){
                if(response.data.tweets.length>0){
                    let tweets = response.data.tweets.map((tweet)=>{
                        return {id:tweet.id, id_str:tweet.id_str};
                    })
                    this.setState({tweets, hashtag});
                }else{
                    this.setState({error:'No Tweets Found. Try something else.'});
                }
            }else if(response.data.msg){
                this.setState({error:'Error encountered, try again in few minutes or try for another HashTag'})
            }
            this.setState({loading:false});
        }).catch(()=>{
            this.setState({error: 'Check your network connection and Try again', loading:false});
        });
    }

    getAction = ()=>{
        if(this.state.loading)
            return <Spinner/>
        else
            return <button type="submit" className="btn w-75 btn-primary" style={{maxWidth:"250px"}}>Go</button>
    }
    
    componentDidUpdate(prevProps) {
        let prevTag = new URLSearchParams(prevProps.location.search).get("hashtag");
        let curTag = new URLSearchParams(this.props.location.search).get("hashtag");
        if(prevTag !== curTag){
            this.getTweets(curTag);
        }
    }

    componentDidMount(){
        let hashtag = new URLSearchParams(this.props.location.search).get("hashtag");
        if(hashtag){
            this.getTweets(hashtag);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-12 col-md-8 px-0 py-4 mx-auto">
                    <form id="query-form" onSubmit={this.handleSubmit}>
                        <div className="mx-auto">
                            <label className="control-label">Search Twitter:</label>
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">#</span>
                                    </div>
                                    <input type="text" className="form-control" name="hashtag" placeholder="HashTag" required value={this.state.hashtag} onChange={this.handleChnage}/>
                                </div>
                            </div>

                            <h6 className="text-center my-4"><strong>Enter a HashTag</strong> in the above field and <strong>Hit Go</strong> to see recent and top tweets with the HashTag.</h6>

                            <div className="d-flex justify-content-center">
                                {this.getAction()}
                            </div>
                        </div>
                    </form>
                 </div>
                {
                    this.state.tweets.length?
                    <TweetDeck tweets={this.state.tweets} hashtag={this.state.hashtag}/>:
                    (
                        this.state.hashtag!==''?
                        (this.state.error!==''?(<div className="mx-auto alert alert-danger" role="alert" style={{width:"fit-content"}}><p className="text-center mb-0 mx-2">{this.state.error}</p></div>):null):
                        null
                    )
                }
            </div>
        )
    }
}
