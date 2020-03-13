import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'
export default function VideoList({videos , onVideoSelect}) {
    const listOfVideos = videos.map( (video , id) =>{
        return (
            <VideoItem video={video} key={id} onVideoSelect={onVideoSelect} />
        )
    })
    return (
        <Grid container spacing={1}>
                {listOfVideos}
        </Grid>
    )
}
