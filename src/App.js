import React, { Component } from "react";
import { connect } from 'react-redux'

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from './actions'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      smurfs: ''
    }
  }

  componentDidMount(){
    fetchSmurfs()
  }


  render() {
    return (
      <div className="App">
        <Header />
  
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapToStateProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    errors: state.errors
  }
}
export default connect(mapToStateProps, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.