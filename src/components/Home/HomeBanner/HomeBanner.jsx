import React, { Component } from "react";
import styles from "./HomeBanner.module.scss";

export default class HomeBanner extends Component {
    render() {
        return (
            <section className={styles.bannerContain}>
                <div>VIEW OUR PRODUCTS IN OUR MARKETPLACE.</div>
                <div></div>
            </section>
        )
    }
}