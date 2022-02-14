import React from 'react';
import { connect } from 'react-redux'
import { decrementLikes, incrementLikes } from './../redux/actions';

function Likes(props) {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDicrementLikes}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log('mapStateToProps >', state);
  const {likesReducer} = state
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDicrementLikes: () => dispatch(decrementLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)