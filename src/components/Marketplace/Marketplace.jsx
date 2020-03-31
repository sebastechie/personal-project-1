import React, { Component } from "react";
import styles from "./Marketplace.module.scss";
import PublicList from "./PublicList/PublicList";

export default class Marketplace extends Component {
    render() {
        return (
            <section className={styles.marketplaceContain}>
                <div class={styles.header}>
                    <p>Welcome to the <span>Marketplace</span></p>
                </div>

                <PublicList />

                <div class={styles.signUpContain}>
                    <div className={styles.innerSign}>
                        <div>
                            <div>WHAT'S COMING?</div>
                            <div>
                                <p>Sign up or Log In to have early access to the Collection's releases.</p>
                            </div>

                        </div>
                        <div onClick={this.props.signIn} className={styles.button}>
                            <div className={styles.btnContain}>
                                <button>SIGN IN</button>
                                {/* <button>REGISTER</button> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
