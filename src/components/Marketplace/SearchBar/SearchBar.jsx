import React, { Component } from "react";
import styles from "./SearchBar.module.scss";


export default class SearchBar extends Component {
    render() {
        return (
            <section>
                {/* <div>
                    <p>What are you looking for?</p>
                </div> */}
                <div className={styles.searchContain}>
                    <input
                        className={styles.search}
                        placeholder={"What are you looking for?"}
                        value={this.props.before}
                        onChange={this.props.after}
                    />
                </div>
            </section>
        )
    }
}