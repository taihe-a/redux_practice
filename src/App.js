import React from "react";
import { connect } from "react-redux";

const App = ({ number, plus }) => (
  <div>
    <h2>{number}</h2>{" "}
    <button
      onClick={() => {
        plus(10);
      }}
    >
      10
    </button>
  </div>
);
const mapStateToProps = state => {
  return {
    number: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch({ type: "PLUS", payload: { num: num } });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
