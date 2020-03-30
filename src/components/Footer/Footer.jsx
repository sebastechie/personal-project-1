import React, { Component } from "react";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
    render() {
        return (
            <section className={styles.footerContain}>

                <div className={styles.innerContain}>
                    <div className={styles.footTitle}>About us</div>
                    
                    <div className={styles.footList}>
                        <div>Stores</div>
                        <div>CSR</div>
                        <div>Customer Care</div>
                        <div>Work With Us</div>
                    </div>
                </div>

                <div className={styles.innerContain}>
                    <div className={styles.footTitle}>Services</div>
                    <div className={styles.footList}>
                        <div>FAQ</div>
                        <div>Delivery & Info</div>
                    </div>
                </div>

                <div className={styles.innerContain}>
                    <div className={styles.footTitle}>Contact</div>
                    <div className={styles.footList}>

                        <div>281Rt Siema St.</div>
                        <div>Feisille, Belgium</div>
                        <div>(315) 729-45934</div>
                        <div>info@dotcollection.bg</div>
                    </div>

                </div>




            </section>
        )
    }
}