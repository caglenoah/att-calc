import React, { Component, Fragment } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material'

class AutoInput extends component {
    state = {
        open: false,
        Location_Elevation: '',
        Relative_Humidity: '',
        Atmospheric_Pressure: '',
        Temperature: '',
        Local_Vapor_Pressure: '',
        rho: '',
    }
    toggleDialog = () => this.setState({ open: !this.state.open })
    
    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.State }
        // this.props.AutoInput
        // delete payload.open
        // this.props.AutoInput(payload)
        // this. setState({open : false})
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                open: false,
                Location_Elevation: '',
                Relative_Humidity: '',
                Atmospheric_Pressure: '',
                Temperature: '',
                Local_Vapor_Pressure: '',
                rho: '',
            })
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <h1>NewQuery</h1>
                    <Button 
                        variant="contained"
                        className="sub_AutoInput"
                        onClick={this.toggleDialog} 
                    >
                        submit
                    </Button>

                </div>
                <div> 
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New UserInput To Query</DialogTitle>
                        <DialogContent>
                            <form
                                onSubmit={this.handleSubmit}
                            >
                                <TextField
                                    id="Location_Elevation"
                                    placeholder="Location_Elevation"
                                    value={this.handleTextChange} //this is where the extracted data needs to show up
                                    required />
                                <TextField
                                    id="Relative_Humidity"
                                    placeholder="Relative_Humidity"
                                    value={this.state.Relative_Humidity}
                                    onChange={handleTextChange} //this is where the extracted data needs to show up
                                />
                                <TextField
                                    id="Atmospheric_Pressure"
                                    placeholder="Atmospheric_Pressure"
                                    value={this.state.Atmospheric_Pressure}
                                    onChange={this.handleTextChange} //this is where the extracted data needs to show up
                                    required />
                                <TextField 
                                    id="Temperature"
                                    placeholder="Temperature"
                                    value={this.state.Temperature}
                                    onChange={this.handleTextChange} //this is where the extracted data needs to show up
                                    required />
                                <TextField 
                                    id="Local_Vapor_Pressure"
                                    placeholder="Local_Vapor_Pressure"
                                    value={this.state.Local_Vapor_Pressure}
                                    onChange={this.handleTextChange} //this is where the extracted data needs to show up
                                    required />
                                <TextField 
                                    id="rho"
                                    placeholder="rho"
                                    value={this.state.rho} 
                                    onChange={this.handleTextChange} // SVD * rh * 1000
                                    required />
                                </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default UserInput