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
    if (product.stocked === false) {
      return(
        <tr>
          <td style={{color: "red"}}> {product.name}</td>
          <td style={{color: "red"}}> {product.price} </td>
        </tr>
      )
    } else {
      return(
        <tr>
          <td style={{color: "grey"}}> {product.name}</td>
          <td style={{color: "grey"}}> {product.price} </td>
        </tr>
      )
    }
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
    // const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    this.props.products.forEach((product) => {
      // if (product.name.indexOf(filterText) === -1) {
      //   return;
      // }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (lastCategory !== product.category) {
        rows.push(<CategoryRow category={product.category} key={product.category}/>)
      }
      rows.push(<ProductRow product={product} key={product.name}/>)
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
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    console.log(e);
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <form>
        <input
          placeholder="Search..."
          type="text"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p className="checkbox">
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          Only show product in stock
        </p>
      </form>
    );
  }
}


class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(product) {
    this.setState({filterText: product})
  }

  handleInStockChange (stock) {
    this.setState({inStockOnly: stock})
  }

  render() {
    return (
      <div className="filter-product-table">
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange} />
        <ProductTable products={PRODUCTS}/>
      </div>
    )
  }
}
export default FilterableProductTable;
