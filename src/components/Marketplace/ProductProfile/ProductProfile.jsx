import React, { Component } from "react";
import styles from "./ProductProfile.module.scss";


// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================

// export default class ProductProfile extends Component {

// state = {
//     url: ("http://makeup-api.herokuapp.com/api/v1/products.json"),
//     product: [],
//     loading: true
// }

// componentDidMount() {
//     const banana = this.state.url;
//     fetch(banana)
//         .then(res => res.json())
//         .then(data => {
//             this.setState({
//                 product: data,
//                 loading: false
//             })
//             console.log(data)
//         })
// }
//     render() {
//         return (
//             <section className={styles.profileContain}>
//                 this is the product profile page



//                 <div>
//                     {this.props.productData2.name}
//                 </div>

//                 <div>
//                     {this.props.productData2.description}
//                 </div>

//             </section>
//         )
//     }
// }


// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================


export default class ProductProfile extends Component {

    render() {
        return (
            <section className={styles.profileContain}>
                
                
                this is the product profile page

            </section>
        )
    }
}