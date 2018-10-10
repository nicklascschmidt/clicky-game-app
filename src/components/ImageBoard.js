import React from "react";
import ImageCard from './ImageCard';
import characters from '../resources/characterList.json';

class ImageBoard extends React.Component {
    state = {
        characters: characters,
        charactersClickedArray: [],
        characterClicked: ''
    };


    handleImageClick = (event) => {
        // captures 'value' of clicked element
        // console.log('Clicked value-- ',event.target.getAttribute('value'));
        let character = event.target.getAttribute('value');
        let charactersClickedArrayUpdated = this.state.charactersClickedArray.concat(character);

        this.setState({
            characterClicked: character
        }, () => {
            // console.log('this.state.charactersClickedArray',this.state.charactersClickedArray);

            // from App.js
            this.props.handleIncrementScore(this.state.characterClicked,this.state.charactersClickedArray);

            // call this after bc handleIncrementScore() needs to loop through the array before updating the array
            this.setState({
                charactersClickedArray: charactersClickedArrayUpdated
            }, () => {
                this.checkReset(this.props.gameOver);
            });
        });

    }

    shuffleCharacters = () => {
        let shuffledCharacterArray = [];
        do {
            let randomNum = Math.floor(Math.random()*characters.length);
            let currentCharacter = characters[randomNum];
            let found = false;
            for (let m=0; m < shuffledCharacterArray.length; m++) {
                if (currentCharacter === shuffledCharacterArray[m]) {
                    found = true;
                }
            }
            if (found !== true) {
                shuffledCharacterArray.push(currentCharacter);
            }
        }
        while (shuffledCharacterArray.length < characters.length)

        this.setState({
            characters: shuffledCharacterArray
        })
    }

    checkReset = (gameOver) => {
        // console.log('gameOver-- ', gameOver);
        if (gameOver) {
            this.setState({
                charactersClickedArray: [],
                characterClicked: ''
            }, () => {
                // console.log(this.state);
            });
        }
        this.props.getGameOver(gameOver);
    }

    componentDidMount() {
        this.shuffleCharacters();
        // console.log(this.state.characters);
    }

    loadCards = () => {
        return (
            this.state.characters.map( (character,idx) => (
                <ImageCard 
                name={character.name}
                image={character.image}
                onClick={ (event) => {
                    this.handleImageClick(event);
                    this.shuffleCharacters();
                }}
                key={idx}
                />
            ))
        )
    }

    render() {
        return (
            <div className='d-flex flex-wrap justify-content-around'>
                {this.loadCards()}
            </div>
        )
    }
};

export default ImageBoard;
