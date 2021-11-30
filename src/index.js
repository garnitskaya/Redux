import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
//import { dec, inc, rnd } from './actions';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer); //store-хранилище

const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);
//*1
//const incDispatch = () => dispatch(inc());
//const decDispatch = () => dispatch(dec());
//const rndDispatch = (value) => dispatch(rnd(value));

//document.getElementById('inc').addEventListener('click', incDispatch);
//document.getElementById('dec').addEventListener('click', decDispatch);
//document.getElementById('rnd').addEventListener('click', () => {
//    const value = Math.floor(Math.random() * 10);
//    rndDispatch(value);
//});

//*2
//const bindActionCreator = (creator, dispatch) => (...args) => {
//    dispatch(creator(...args));
//}

//const incDispatch = bindActionCreator(inc, dispatch);
//const decDispatch = bindActionCreator(dec, dispatch);
//const rndDispatch = bindActionCreator(rnd, dispatch);

//document.getElementById('inc').addEventListener('click', incDispatch);
//document.getElementById('dec').addEventListener('click', decDispatch);
//document.getElementById('rnd').addEventListener('click', () => {
//    const value = Math.floor(Math.random() * 10);
//    rndDispatch(value);
//});


//* 3

//const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//    {
//        incDispatch: inc,
//        decDispatch: dec,
//        rndDispatch: rnd
//    }, dispatch);

//document.getElementById('inc').addEventListener('click', incDispatch);
//document.getElementById('dec').addEventListener('click', decDispatch);
//document.getElementById('rnd').addEventListener('click', () => {
//    const value = Math.floor(Math.random() * 10);
//    rndDispatch(value);
//});

//*4

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});

ReactDOM.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>,
    document.getElementById('root')
);