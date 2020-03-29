import React, { Component } from "react";
import styles from "./NavItem.module.scss";

import { Link } from "@reach/router";

export default class NavItem extends Component {
    render() {
        return (
            <section className={styles.navitem}>
                <div className={styles.itemContain}>
                    <Link to={this.props.route}><p>{this.props.name}</p>
                    </Link>
                </div>
            </section>
        )
    }
}