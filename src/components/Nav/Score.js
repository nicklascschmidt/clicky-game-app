import React from "react";

const Score = (props) => (
    // <div>sup</div>
    <span className="navbar-item mb-0 h3 col-4 align-center">Score: {props.state.score} | Top Score: {props.state.topScore}</span>
)

export default Score;
