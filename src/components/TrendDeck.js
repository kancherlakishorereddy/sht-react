import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TrendDeck extends Component {
    state={
        region:this.props.region,
        trends:this.props.trends
    }

    getVol = (trend)=>{
        if(trend.vol){
            return <p className="card-text">{(trend.vol).toLocaleString(undefined)} Tweets</p>;
        }
        else return null;
    }

    getLink = (trend)=>{
        let url = "/tweets?hashtag="
        if(trend.name[0]==='#')
            url+=trend.name.substring(1);
        else
            url+=trend.name;
        return <Link to={url} className="card-link">See Tweets</Link>
    }

    render() {
        let deck = this.state.trends.map((trend, index)=>{
            return (
                <div className="card m-2 border-dark" style={{width:"20rem"}} key={index}>
                    <div className="card-body">
                        <small className="text-muted">{index + 1}. Trending</small>
                        <h5 className="card-title">{trend.name}</h5>
                        {this.getVol(trend)}
                        {this.getLink(trend)}
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h4 className="text-center pb-2 mx-auto" style={{borderBottom:"solid 2px black"}}>Trending in <strong>{this.state.region}</strong></h4>
                <div className="pt-2 pb-4 d-flex flex-wrap justify-content-center">
                    {deck}
                </div>  
            </div>
        )
    }
}
