import React, { Component } from "react";
import styles from "./PrivateList.module.scss";

// import UpcomingProduct from ".";
import UpcomingProduct from "../UpcomingProduct";

import { firestore } from "../../../firebase";

import { queries } from "@testing-library/react";
import SearchBar from "../SearchBar";


export default class MarketListUpcoming extends Component {

    state = {
        upcomingProducts: [],
        newSearch: "",
        filteredProduct: []

    }


    componentDidMount() {
        firestore
            // .collection("products")
            .collection("upcoming-products")
            .get()
            .then((query) => {
                const shoe = query.docs.map(doc => doc.data());
                this.setState({
                    upcomingProducts: shoe,
                    filteredProduct: shoe
                })
            })
    }

    resultOfSearch = (e) => {
        const charTyped = e.target.value;
        this.setState({ newSearch: charTyped }, this.toFilter);
        console.log(this.state.newSearch);
        // console.log(this.state.charTyped);
    }

    toFilter = () => {
        let filteredProduct = this.state.upcomingProducts.filter(item => {
            return item.name.toUpperCase().includes(this.state.newSearch.toUpperCase())
        })
        this.setState({ filteredProduct });
    }


    render() {
        return (
            <section className={styles.marketListContain}>

                <div className={styles.searchContain}>
                    <div>
                        <SearchBar before={this.props.newSearch} after={this.resultOfSearch} />
                    </div>

                    <div className={styles.listHeader}>
                        <span>VIP</span> // SEE THE LIST BELOW THE UPCOMING RELEASES
                    </div>
                </div>

                <div className={styles.listContain}>

                    <div className={styles.catalogueContain}>
                        {this.state.filteredProduct.map((item, index) => (
                            <UpcomingProduct data={item} key={index} />
                        ))}
                    </div>

                </div>


            </section>
        )
    }
}