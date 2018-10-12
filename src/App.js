import React, { Component } from 'react';


import './App.css';
import './index.scss';
import Both from './components/Both';
import Header from './components/header';
import SearchForm from './components/SearchForm';
import NewsLetter from './components/NewsLetter';
import Input, { root } from './components/Input';
import Refs from './components/Refs';
import Select from './components/Select';

class App extends Component {

  render() {
    return (
      <div className="grid">
        <Header className="container" >
          <p className="clearfix text-primary"> </p>
        </Header>
        <div className="clearfix">
          <div class="row">
            <div class="col-6 col-md-4"><span> <a className="feature" href="#news">Go to News</a></span> <span><a className="feature" href="#cv">Go to CV</a></span></div>
            <div class="col-6 col-md-4"><SearchForm /></div>
            <div class="col-6 col-md-4"> <Select className=" p-3 mb-2  dropdown-menu"
          values={["Mobx.", "State.", "Should.", "Be.", "Synchronous."]}
          onSelect={value => prompt(value)}
        /> </div>
          </div>
        </div>
        <div className="p-3 mb-2 bg-secondary text-white"> Roni Mc </div>
        <Refs />

          <div className="media">
            <div id="scrollUp" ></div>
               <div className="wrapper flex bg-white img-fluid">
            <div><span> <img src="https://unsplash.it/240/240?image=440" alt='products'  ></img>
            <p>New Range out soon </p> </span>
            </div>
            <div><span> <img src="https://unsplash.it/240/240?image=61"></img>
            <p className="text-primary">New Range  out soon </p> </span>
            </div>
            <div><span> <img src="https://unsplash.it/240/240?image=409"></img>
            <p className="text-secondary">New Range  out soon</p> </span>
            </div>
            <div><span> <img src="https://unsplash.it/240/240?image=640"></img>
            <p>New Range  out soon</p> </span>
            </div>
            <div><span> <img src="https://unsplash.it/240/240?random"></img>
            <p>New Range  out soon</p> </span>
            </div>
            <div><span> <img src="https://unsplash.it/240/240?image=44"></img>
            <p>New Range  out soon</p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range  out soon</p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range out soon </p> </span>
            </div>
            <div><span> <img src="http://fakeimg.pl/240x240/666/?text=7"></img>
            <p>New Range out soon </p> </span>
            </div>
          </div>
        </div>
        <scroll-container>
          <scroll-page id="news" style={{ color: 'red' }} >
          <div className="title"> This is News  </div>
            </scroll-page>
        <div style={{ height: 100  }}></div>
        <Both />
          <scroll-page id="cv" >
            <div > <h1 className="title"> This is CV </h1>
              <p className="text-primary" >Put your feelings into it, your heart, it's your world. Now we'll take the almighty fan brush. If you didn't have baby clouds, you wouldn't have big clouds.
              Clouds are free. They just float around the sky all day and have fun. If we're gonna walk though the woods, we need a little path. Let's do it again then, what the heck.
             Just go back and put one little more happy tree in there.</p> <p>Everything is happy if you choose to make it that way. There he comes.
             Play with the angles. Now then, let's play. It just happens - whether or not you worried about it or tried to plan it.</p>
            </div>
          </scroll-page>
          <NewsLetter /> <input />
        </scroll-container>

      </div>
    );
  }
}

export default App;
