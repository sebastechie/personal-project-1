import React, { Component } from "react";
import styles from "./HomeBanner.module.scss";

export default class HomeBanner extends Component {
    render() {
        return (
            <section className={styles.bannerContain}>
                <div>THIS IS SOME BIG TEXT ABOUT THIS MUCH</div>
                <div>2</div>
            </section>
        )
    }
}