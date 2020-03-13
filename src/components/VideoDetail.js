import React from 'react'
import {Paper , Typography} from '@material-ui/core'
import {decode} from 'he'
export default function VideoDetail( { video } ) {
    const imgSrc="https://i.ytimg.com/vi/wSksPsfqbCo/maxresdefault.jpg"
    if (!video ) return (<Paper elevation={6} style={{height : '70%'}}>
    <img height="100%" width="100%" src={imgSrc} />
</Paper>);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height : '70%'}}>
                    <iframe frameBorder="0"  height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding : '15px'}} >
            <Typography variant="h5">{decode(video.snippet.title)}</Typography>
                <Typography variant="subtitle1">{decode(video.snippet.channelTitle)} </Typography>
                <Typography variant="subtitle2">{decode(video.snippet.description)}</Typography>
                
            </Paper>
        </React.Fragment>
    )
}
