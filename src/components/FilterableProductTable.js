import { Component } from "react";

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


class ProductRow extends Component {
  render() {
    const product = this.props.product;
    return (
      <tr>
        <th> {product.name}</th>
        <th> {product.price} </th>
      </tr>
    )
  }
}


class CategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colspan="2"> {category}</th>
      </tr>
    )
  }
}


class ProductTable extends Component {
  render() {
    let lastCategory = null;
    const rows = [];
    const products = this.props.products;

    products.forEach((product) => {
      if (lastCategory !== product.category) {
        rows.push(<CategoryRow category={product.category} key={product.category}/>)
      } else {
        rows.push(<ProductRow product={product} key={product.name}/>)
      }
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}


class SearchBar extends Component {
  render() {
    return (
      <form>
        <input
          placeholder="Search..."
          type="text"
        />
        <p className="checkbox"> <input type="checkbox"/> Only show product in stock </p>
      </form>
    );
  }
}



class FilterableProductTable extends Component {
  render() {
    return (
      <div className="filter-product-table">
        <SearchBar />
        <ProductTable products={PRODUCTS}/>
      </div>
    )
  }
}
export default FilterableProductTable;
