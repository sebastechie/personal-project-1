import React, { Component } from "react";
import styles from "./ProductProfile.module.scss";





export default class ProductProfile extends Component {

    state = {
        product: [],
    }

    componentDidMount() {
        const id = window.location.pathname.substring(
            window.location.pathname.lastIndexOf("/") + 1

        );
        console.log(id)

        fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    product: data,

                })
                console.log(data)
            })
    }

    render() {
        return (
            <section className={styles.profileContain}>
                <div className={styles.innerContain}>
                    <div className={styles.imgContain}>

                        <img src={this.state.product.image_link} alt="product image" />


                    </div>

                    <div className={styles.details}>

                        <div className={styles.wrap}>
                            <div className={styles.title}>name</div>
                            <div className={styles.sub1}> {this.state.product.name}</div>
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.title}>brand</div>
                            <div className={styles.sub}> {this.state.product.brand}</div>
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.title}>price</div>
                            <div className={styles.sub}> £{this.state.product.price}</div>
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.title}>category</div>
                            <div className={styles.sub}>{this.state.product.category}</div>
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.title}>product</div>
                            <div className={styles.sub}>{this.state.product.product_type}</div>
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.title}>description</div>
                            <div className={styles.subdesc}>{this.state.product.description}</div>
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.title}>product link</div>
                            
                            <a href={this.state.product.product_link}> Click here </a>
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.title}>website link</div>
                            <a href={this.state.product.website_link}> Click here </a>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

