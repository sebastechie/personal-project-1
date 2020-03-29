import React, { Component } from "react";
import styles from "./Marketplace.module.scss";
import PublicList from "./PublicList/PublicList";





export default class Marketplace extends Component {
    render() {
        return(
            <section className={styles.marketplaceContain}>
                WELCOME TO MARKETPLACE
            
                {/* <MarketList /> */}
                
                
                <PublicList />
            
                <div onClick={this.props.signIn} className={styles.button}>
                    <button>SIGN IN HERE!</button>
                    {/* <button route="/private/upcoming">SIGN IN HERE!</button> */}
                </div>

            </section>
        )
    }
}
