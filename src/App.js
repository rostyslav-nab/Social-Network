import React from 'react'
import './App.css'
import {Header} from "./components/Header/Header"
import {Navbar} from "./components/Navbar/Navbar"
import {Profile} from "./components/Profile/Profile"
import {Route} from "react-router-dom"
import {Footer} from "./components/Footer/Footer"
import {Dialogs} from "./components/Dialogs/Dialogs"


export const App = (props) => {
    return (
        <div className='appWrapper'>
            <div className="row">
                <div className="col-12 header">
                    <Header/>
                </div>
                <div className="col-2 navbar">
                    <Navbar/>
                </div>
                <div className="col-10 content">
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer/>
                </div>
            </div>

        </div>
    )
}