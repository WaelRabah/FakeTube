import React from 'react'
import {Grid} from '@material-ui/core'
import youtube from './api/youtube'
import {SearchBar , VideoList , VideoDetail} from './components'

export default class App extends React.Component {
    constructor (props)
    {
            super(props)
        this.state={
            videos : [] ,
            selectedVideo : null ,
            defaultVids : []
        }
    }
    
    setVideos = (videos)=>{
        this.setState(
            {videos : videos}
        )

    }
    setSelectedVideo = (video)=>
    {
        
        this.setState(
            {selectedVideo : video}
        )
        
    }
    
     handleSubmit = async (searchTerm)=>{
             const response = await youtube.get('search',
             {
                 params : 
        {
                part : 'snippet' ,
                maxResults : 10 , 
                key : 'AIzaSyCpr8gW8CFlrER0cM8e-GANFwY5sJfYj7k' ,
                q : searchTerm ,
        } ,
    
    }); 
             this.setVideos(response.data.items)    
             this.setSelectedVideo(response.data.items[0])
    }
     loadDefault = async ()=>{
        const response = await youtube.get('search',
        {
            params : 
   {
           part : 'snippet' ,
           maxResults : 50 , 
           key : 'AIzaSyCpr8gW8CFlrER0cM8e-GANFwY5sJfYj7k' ,
           
   } ,

}); 
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
        response.data.items=shuffle(response.data.items)
        this.setState(
            {
                defaultVids : response.data.items.slice(0,15)
            }
        )    
        
        
}
componentDidMount ()
    {
        const def = this.loadDefault();
    }
     onVideoSelect=(video)=>{
         this.setSelectedVideo(video)
    }
    render()
    {
        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                                <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8} style={{height : '800px'}}>
                                { this.state.videos.length===0 ? this.state.selectedVideo ? <VideoDetail video={this.state.selectedVideo} /> : <VideoList videos={this.state.defaultVids} onVideoSelect={this.onVideoSelect} />  : <VideoDetail video={this.state.selectedVideo} /> }
                               
                        </Grid>
                        <Grid item xs={4}>
                              {this.state.selectedVideo ? <VideoList videos={this.state.videos.length===0 ? this.state.defaultVids : this.state.videos } onVideoSelect={this.onVideoSelect} /> :""} 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    
}
