import React from "react";
import ProductItem from "./ProductItem";
import { HiChevronDown } from "react-icons/hi";

class ProductCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    const url = this.props.url;
    const bearer = "Bearer X_wzQnCXru50dXpuqu8WAPwz7nlTLNvr8ZRueNkZjsE";
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: bearer,
        Host: "api.producthunt.com",
        Origin: "https://producthuntfetch.netlify.app/",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.posts);
        this.setState({ products: res.posts.slice(0, 10), loading: false });
      });
  }

  render() {
    return (
      <div
        className={`${this.props.title.toLowerCase()} px-4 md:pl-16 md:pr-8 mb-8`}
      >
        <h2 className="text-2xl font-bold mb-2">{this.props.title}</h2>
        {this.state.loading ? (
          <svg
            className="animate-spin h-5 w-5 mr-3 bg-green-400"
            viewBox="0 0 24 24"
          />
        ) : (
          <>
            <ul
              className={`product-list-${this.props.title} rounded-lg rounded-b-none  bg-white `}
            >
              {this.state.products.map((product, index) => (
                <ProductItem key={index} {...product} />
              ))}
            </ul>
            <div className="show-more bg-white p-2 flex items-center justify-center hover:bg-gray-100 cursor-pointer rounded-b-lg">
              <span>
                <HiChevronDown />
              </span>
              <span> Show More</span>
            </div>
          </>
        )}
        {/* <ul className="product-category"></ul> */}
      </div>
    );
  }
}

export default ProductCategory;
