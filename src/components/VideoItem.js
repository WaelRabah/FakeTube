import React from 'react'
import {Grid , Paper ,Typography} from '@material-ui/core'
import {decode} from 'he'
export default function VideoItem({video , onVideoSelect}) {
    return (
        <Grid item xs={12}>
                <Paper style={{display : 'flex' , alignItems : 'center',cursor : 'pointer'}} onClick={()=> onVideoSelect(video)}>
                    <img style={{marginRight : '10px',width : '200px'}} alt={"thumbnail"} src={video.snippet.thumbnails.medium.url} />
                    <Typography variant="subtitle1">
                        {decode(video.snippet.title)}
                    </Typography>
                   
                   
                
                </Paper>
        </Grid>
    )
}
