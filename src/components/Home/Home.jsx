import React, { Component } from "react";
import styles from "./Home.module.scss";
import HomeBanner from "./HomeBanner";


export default class Home extends Component {
    render() {
        return (
            <section>
                <section className={styles.homey}>
                    <div className={styles.introContain}>
                        <div className={styles.imgLeft}>
                        </div>
                        <div className={styles.imgMid}>
                        </div>
                        <div className={styles.imgRight}>
                        </div>
                    </div>

                    <div className={styles.introText}>
                        <div>
                            <p>Welcome To The Collection</p>
                            <p>browse x get x inspire</p>
                        </div>
                    </div>

                    <div className={styles.homeBody}>
                        <div className={styles.imgBody}>
                            <p>IMAGE</p>
                        </div>
                        <div className={styles.textBody}>
                            <div>Embrace the change</div>
                            <div>Here at dotCollection, we are always looking for the next best trend. Authentic, exotic, heroic - not necessarily in that order but you get the gist. Come and check us out!</div>
                        </div>
                    </div>

                </section>
                <section>
                    <HomeBanner />
                </section>
            </section>
        )
    }
}