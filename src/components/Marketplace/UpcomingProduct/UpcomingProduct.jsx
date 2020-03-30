import React, { Component } from "react";
import styles from "./UpcomingProduct.module.scss";


export default class UpcomingProduct extends Component {
    render() {
        return (
            <section className={styles.productContain}>
                
                {/* <div className={styles.image}>
                    {this.props.data.image}
                </div> */}
                <div className={styles.name}>
                    {this.props.data.name}
                </div>
                <div className={styles.style}>
                    {this.props.data.style}
                </div>
                <div className={styles.price}>
                    £{this.props.data.price}
                </div>
            </section>
        )
    }
}