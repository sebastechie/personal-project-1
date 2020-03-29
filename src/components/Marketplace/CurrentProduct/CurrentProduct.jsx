import React, { Component } from "react";
import styles from "./CurrentProduct.module.scss"

export default class Current extends Component {
    render() {
        return (
            <section className={styles.currentContain}>
                
{/*                 
                <div className={styles.img}>
                    <img src={this.props.productData.image_url} alt="drink image"/>
                </div> */}

                <div className={styles.name}>
                    name: {this.props.productData.name}
                </div>

                <div className={styles.tagline}>
                    id: {this.props.productData.id}
                </div>
                
                <div className={styles.tagline}>
                    <a href={this.props.productData.product_link}>Loink</a>
                </div>
                
                <div className={styles.description}>
                    description: {this.props.productData.description}
                </div>
                
                {/* <div className={styles.lol}>
                    {this.props.theData.boil_volume.value}
                </div> */}

            </section>
        )
    }
}