import React, { Component } from 'react'
import { Paper , TextField } from '@material-ui/core'
export default class SearchBar extends Component {
    constructor (props)
    {
        super(props) ; 
        this.state={
            searchTerm : ''
        }
    }
    handleChange = (e)=>{
        const name = e.target.name
        const val = e.target.value
        
            this.setState (
                {
                     [name] : val       
                }
            )
            
    }
    handleSubmit = (e)=>{
        const {searchTerm} = this.state ; 
        const { onFormSubmit } = this.props ; 
        onFormSubmit(searchTerm)
        e.preventDefault()
        this.setState(
            {
                searchTerm : ''
            }
        )
    }
    render() {
        
        return (
            <Paper elevation={6} style={{padding : '25px'}}>
                <form onSubmit={this.handleSubmit}>
                <TextField variant="filled" color="primary" fullWidth name={"searchTerm"} value={this.state.searchTerm} label="Search" onChange={this.handleChange} />
                    
                    
                </form>             
            </Paper>
        )
    }
}
