import React from "react";

class Score extends React.Component {
    constructor() {
        super();

        this.state = {
            score: 0,
            topScore: 0,
            totalCount: 0
        };
        this.handleIncrementScore = this.handleIncrementScore.bind(this);
    }

    handleIncrementScore = () => {
        this.setState({ score: this.state.score + 1 });
    };

    handleIncrementCount = () => {
        this.setState({ totalCount: this.state.totalCount + 1 });
    };

    handleResetScore = () => {
        this.setState({ score: 0 });
    }

    handleTopScore = () => {
        if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score});
        }
    }

    handleEndGame = (props) => {
        console.log(props);
        if (this.state.totalCount === props.count) {
            this.handleResetScore();
        }
    }

    render() {
        return (
            <span className="navbar-item mb-0 h3 col-4 align-center">Score: {this.state.score} | Top Score: {this.state.topScore}</span>
        );
    }
}

export default Score;
