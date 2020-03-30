import React, { Component } from "react";
import styles from "./PublicList.module.scss";

import CurrentProduct from "../../Marketplace/CurrentProduct/";
import SearchBar from "../SearchBar/SearchBar";
import { navigate } from "@reach/router";

import ProductProfile from "../ProductProfile/";

export default class PublicList extends Component {

    state = {
        url: ("http://makeup-api.herokuapp.com/api/v1/products.json"),
        product: [],

        newSearch: "",
        filteredProduct: [],

        loading: true
    }

    componentDidMount() {
        const banana = this.state.url;
        fetch(banana)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    product: data,
                    filteredProduct: data, loading: false
                })
                console.log(data)
            })
    }

    resultOfSearch = (e) => {
        const charTyped = e.target.value;
        this.setState({ newSearch: charTyped }, this.toFilter);
        // console.log(this.state.newSearch);
        // console.log(this.state.charTyped);
    }

    toFilter = () => {
        const filteredProduct = this.state.product.filter(item => {
            return item.name.toUpperCase().includes(this.state.newSearch.toUpperCase())
        })
        this.setState({ filteredProduct: filteredProduct });
    }

    handleChange = (value) => {
        navigate(`productprofile/${value}`)
        // fetch(http://makeup-api.herokuapp.com/api/v1/products/${id}.json)
    }

    render() {
        // console.log(this.state.newSearch);
        // console.log(this.state.charTyped);
        return (
            <section className={styles.publicListContain}>

                <div className={styles.searchContain}>
                    <SearchBar before={this.props.newSearch} after={this.resultOfSearch} />
                </div>

                <div className={styles.innerContain}>
                    {this.state.loading || !this.state.product ? (
                        <div className={styles.loadContain}>
                            <div className={styles.load}>loading...</div>
                            <div className={styles.load2}></div>
                        </div>
                    ) : (
                            <div className={styles.catalogueContain}>
                                {this.state.filteredProduct.map((something, index) => (

                                    <div className={styles.bagel} onClick={() => this.handleChange(something.id)} >
                                        <CurrentProduct productData={something} key={index} />
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
            </section>
        )
    }
}