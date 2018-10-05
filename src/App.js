import React, { Component } from 'react';

import Search from './components/Search';
import './App.css';
import './index.scss';
import Both from './components/Both';
import Header from './components/header';

class App extends Component {

  render() {
    return (
      <div className="grid">
        <Header class="container" >
          <p class="text-primary"> Hello World</p>

          </Header>
        <div><span> <a className="feature" href="#news">Go to News</a></span> <span><a class="feature" href="#cv">Go to CV</a></span>

        </div>


        <div class="p-3 mb-2 bg-white text-white">

          </div>
        <div class="media">
          <div id="scrollUp" ></div>
        <h2>Flexbox</h2>

          <div class="wrapper flex bg-primary img-fluid">
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
          <div className="title"> This is News  </div>
            </scroll-page>
        <div style={{ height: 100  }}></div>
        <Both />
          <scroll-page id="cv" style={{ color: 'red' }}>
            <div > <h1 className="title"> This is CV </h1>
              <p>Put your feelings into it, your heart, it's your world. Now we'll take the almighty fan brush. If you didn't have baby clouds, you wouldn't have big clouds.
              Clouds are free. They just float around the sky all day and have fun. If we're gonna walk though the woods, we need a little path. Let's do it again then, what the heck.
             Just go back and put one little more happy tree in there.</p> <p>Everything is happy if you choose to make it that way. There he comes.
             Play with the angles. Now then, let's play. It just happens - whether or not you worried about it or tried to plan it.</p>
            </div>
          </scroll-page>
        </scroll-container>

      </div>
    );
  }
}

export default App;
