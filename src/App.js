import React, { Component } from 'react';

import Button from './components/Both';
import './App.css';
import './index.scss';
import Both from './components/Both';

class App extends Component {

  render() {
    return (
      <div className="grid">
        <div><span> <a class="feature" href="#news">Go to News</a></span> <span><a class="feature"  href="#cv">Go to CV</a></span></div>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
        <button type="button" class="btn btn-secondary btn-sm">Small button</button>
        <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        <div class="media">
        <h2>Flexbox</h2>

          <div class="wrapper flex img-fluid">
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7" alt='products'  ></img>
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
        <scroll-container>
          <scroll-page id="news" style={{ color: 'red' }} >
          <p> This is news  </p>
            </scroll-page>
        <div style={{ height: 100  }}></div>
        <Both />
          <scroll-page id="cv" style={{ color: 'red' }}>
          <p> This is CV  </p>
        </scroll-page>
          </scroll-container>
      </div>
    );
  }
}

export default App;
