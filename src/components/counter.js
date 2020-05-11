import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions';


const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className='jumbotrol'>
            <h2>{counter}</h2>
            <buton className="btn btn-primary btn-lg" onClick={inc}>INC</buton>
            <buton className="btn btn-primary btn-lg" onClick={dec}>DEC</buton>
            <buton className="btn btn-primary btn-lg" onClick={rnd}>RND</buton>
        </div>
    )
}

const mapToProps = (state) => {
    return {
        counter: state
    }
}


const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators(actions, dispatch);    

}

//export default connect(mapToProps, mapDispatchToProps)(Counter);
export default connect(mapToProps, actions)(Counter);