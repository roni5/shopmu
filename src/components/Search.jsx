import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'

const DATA = ["cat", "dog", "jon", "jim", "eva", "len", "liz"];



class Search extends React.Component {
state = {
data: DATA,
value: '',
list:[...DATA],
};
inputHandler = (e) => {
const list = this.state.data.filter(item =>{
return item.includes(e.target.value)
})

this.setState(prevState =>{
return{
...prevState,
list: list
}
})
}
render() {
if(this.state.list.length == 0){}
let listRender = this.state.list.map((item,i) => {
return <li key={i}>{item} </li>
})
return (
  <div className="input-group">

    <input className="form-control form-control-sm" type="text"
      name="searchTxt"
      autoComplete="off"
      id="searchTxt"
      onChange={this.inputHandler.bind(this)} />
    <span className="input-group-btn">
  <button className="btn btn-primary btn-sm">
    <i className="fa fa-search" />
  </button>
</span>
{listRender}
</div>
);
}
}


export default Search;

