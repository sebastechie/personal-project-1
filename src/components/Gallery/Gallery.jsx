import React, { Component } from "react";
import styles from "./Gallery.module.scss";

export default class Gallery extends Component {
    render() {
        return(
            <section className={styles.galleryContain}>
                <div className={styles.innerContain}>
                    <div><p>COMING SOON...</p></div>
                </div>
            </section>
        )
    }
}