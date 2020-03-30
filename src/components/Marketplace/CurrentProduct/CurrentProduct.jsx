import React, { Component } from "react";
import styles from "./CurrentProduct.module.scss"

export default class Current extends Component {
    render() {
        return (
            <section className={styles.currentContain}>

                <div className={styles.imgContain}>
                    <div className={styles.img}>
                        <img src={this.props.productData.image_link} alt="image" />
                    </div>
                </div>

                <div className={styles.detailsContain}>

                    <div className={styles.name}>
                        {this.props.productData.name}
                    </div>

                    <div className={styles.brand}>
                        by {this.props.productData.brand}
                    </div>

                    <div className={styles.price}>
                        £{this.props.productData.price}
                    </div>

                    {/* <div className={styles.tagline}>
                        <a href={this.props.productData.product_link}>Loink</a>
                    </div> */}

                    {/* <div className={styles.description}>
                        description: {this.props.productData.description}
                    </div> */}

                </div>

            </section>
        )
    }
}