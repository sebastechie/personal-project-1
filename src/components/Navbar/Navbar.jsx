import React, { Component } from "react";
import styles from "./Navbar.module.scss";

import NavItem from "./NavItem/NavItem";


export default class Navbar extends Component {
    render() {
        return (
            <section className={styles.navContain}>

                <div className={styles.itemContain}>
                    <NavItem className={styles.navitem} route="/home" name="Home" />
                    <NavItem className={styles.navitem} route="/marketplace" name="Marketplace" />
                    <NavItem className={styles.navitem} route="/gallery" name="Friday Night 101" />
                    {/* <NavItem route="/contact" name="Contact" /> */}
                    {/* <NavItem route="/productprofile" name="Profile temp" /> */}
                </div>

                <div className={styles.logoContain}>
                    dot Collection
                </div>
                
            </section>
        )
    }
}