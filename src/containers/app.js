import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import DisplayItems from '../component/displayItems';

class App extends Component {
    componentDidMount() {
        console.log('did mount');
        this.props.foodItems();
    }

    render() {
        return(
            <div>
                <DisplayItems datalist={this.props.output}></DisplayItems>
            </div>
        )
    }
}
function mapStateToProps(state){ // function receives the state from reducers
    return{
        output: state.food  //props to whcih the retreived state is assigned
    }
  }
export default connect(mapStateToProps,actions)(App);