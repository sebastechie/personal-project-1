import React, { Component } from "react";
import styles from "./Routes.module.scss";

import { Router, globalHistory } from "@reach/router";

import Home from "../components/Home";
import Gallery from "../components/Gallery/Gallery";
import Marketplace from "../components/Marketplace/Marketplace";
import Contact from "../components/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";
// import MarketListUpcoming from "../components/Marketplace/Upcoming/MarketListUpcoming";
import Upcoming from "../components/Marketplace/PrivateList/";
import firebase, { providers } from "../firebase";


export default class Routes extends Component {

    state = {
        user: null
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState ({ user: result.user})
            })
            .then(result => {
                globalHistory.navigate("private/upcoming")
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return(
            <Router className={styles.routerContain}>

                <Home path="home"/>
                <Gallery path="gallery"/>
                <Marketplace path="marketplace" signIn={this.signIn}/>
                <Contact path="contact"/>
                

                <PrivateRoutes path="private" user={this.state.user}>
                    <Upcoming path="upcoming" user={this.state.user} />
                    {/* <Upcoming path="upcoming" user={this.state.user} /> */}
                </PrivateRoutes>
                
            </Router>
        )
    }
}