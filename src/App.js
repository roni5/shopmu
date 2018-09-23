import React, { Component } from 'react';
import './App.css';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div><span> Home </span> <span> News </span></div>
        <button type="button" class="btn primary">Primary</button>
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
        <button type="button" class="btn btn-secondary btn-sm">Small button</button>
        <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        <div class="media">
          <h2>Flexbox</h2>
          <div class="wrapper flex ">
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range out soon </p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p className="text-primary">New Range  out soon </p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p class="text-secondary">New Range  out soon</p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range  out soon</p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range  out soon</p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range  out soon</p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range  out soon</p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range of  coming out soon </p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range of  coming out soon </p> </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
