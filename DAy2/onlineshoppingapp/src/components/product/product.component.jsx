import React, { Component, useState } from "react";
import Rating from "../rating/rating.component";
import { Link } from "react-router-dom";

const Product = props => {
  const [currLikes, setcurrLikes] = useState(props.productdetails.likes);
  return (
    <div className="col-md-3 my-1">
      <div className="card">
        <Link to={`/productdetails/${props.productdetails.id}`}>
          <img
            src={props.productdetails.imageUrl}
            alt={props.productdetails.name}
            style={{ height: "150px" }}
            className="card-img-top"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.productdetails.name}</h5>
          <p className="card-text">₹. {props.productdetails.price}</p>
          <p className="card-text">
            <Rating rating={props.productdetails.rating} color="orange" />
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setcurrLikes(currLikes + 1)}
          >
            {currLikes} <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button className="btn btn-danger mx-1">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

// export default class Product extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { currLikes: this.props.productdetails.likes };
//   }

//   IncrementLikes() {
//     console.log("U clicked !");
//     // this.props.productdetails.likes++;// For react props are readonly
//     //this.state.currLikes++; // For react state is immutable
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }
//   render() {
//     return (
//       <div className="col-md-3">
//         <div className="card">
//           <img
//             src={this.props.productdetails.imageUrl}
//             alt={this.props.productdetails.name}
//             style={{ height: "150px" }}
//             className="card-img-top"
//           />
//           <div className="card-body">
//             <h5 className="card-title">{this.props.productdetails.name}</h5>
//             <p className="card-text">₹. {this.props.productdetails.price}</p>
//             <p className="card-text">
//               <Rating
//                 rating={this.props.productdetails.rating}
//                 color="orange"
//               />
//             </p>
//             <button
//               className="btn btn-primary"
//               onClick={() => this.IncrementLikes()}
//             >
//               {" "}
//               {this.state.currLikes} <i className="fa-solid fa-thumbs-up"></i>
//             </button>
//             <button
//               className="btn btn-danger mx-1"
//               onClick={() =>
//                 this.props.DeleteAProduct(this.props.productdetails.id)
//               }
//             >
//               <i className="fa-solid fa-trash"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
