import React, { Component } from "react";
import styles from "./SearchBar.module.scss";


export default class SearchBar extends Component {
    render() {
        return (
            <section>
                i am searchbar

                <input
                // type="text"
                placeholder={"helloooo"}
                value={this.props.before}
                onChange={this.props.after}
                
                
                
                />
            </section>
        )
    }
}