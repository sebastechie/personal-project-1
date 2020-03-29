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

                <div>
                    name:  {this.state.product.name}
                </div>
                
                <div>
                    description: {this.state.product.description}
                </div>
                
            </section>
        )
    }
}

