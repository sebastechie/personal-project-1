import React, { Component } from "react";
import styles from "./Navbar.module.scss";

import NavItem from "./NavItem/NavItem";


export default class Navbar extends Component {
    render() {
        return (
            <section className={styles.navContain}>

                <div className={styles.itemContain}>
                    <NavItem route="/home" name="homeyyy" />
                    <NavItem route="/gallery" name="Gallgalls" />
                    <NavItem route="/marketplace" name="KETKET" />
                    <NavItem route="/contact" name="Contact" />
                </div>

                <div className={styles.logoContain}>
                    dot Collection
                </div>
                
            </section>
        )
    }
}