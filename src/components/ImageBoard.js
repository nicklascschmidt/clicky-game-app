import React from "react";
import ImageCard from './ImageCard';
import characters from '../resources/characterList.json';
// import Score from './Score';

class ImageBoard extends React.Component {
    state = {
        characters: characters
    };

    handleImageClick = () => {
        console.log('image clicked');
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

    componentDidMount() {
        this.shuffleCharacters();
        console.log(this.state.characters);
    }

    loadCards = () => {
        return (
            this.state.characters.map( (character,idx) => (
                <ImageCard 
                name={character.name}
                image={character.image}
                onClick={ () => {
                    console.log('this',this);
                    this.handleImageClick();
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







// class ImageBoard extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     // Don't call this.setState() here!
//     //     this.state = { characters: this.shuffleCharacters(characters) };
//     //     // this.handleClick = this.handleClick.bind(this);
//     // }
//     state = {
//         // characters: this.shuffleCharacters(characters)
//         characters: characters
//     };

//     handleImageClick = () => {
//         alert('click happened');
//         // Score.handleIncrementScore();
//     }

//     shuffleCharacters = (array) => {
//         // const shuffledCharacterArray = array => array
//         //     .map(a => [Math.random(), a])
//         //     .sort((a, b) => a[0] - b[0])
//         //     .map(a => a[1]);
//         let shuffledCharacterArray = [];
//         do {
//             let randomNum = Math.floor(Math.random()*characters.length);
//             // console.log(randomNum,characters[randomNum]);
//             let currentCharacter = characters[randomNum];
//             let found = false;
//             for (let m=0; m < shuffledCharacterArray.length; m++) {
//                 if (currentCharacter === shuffledCharacterArray[m]) {
//                     found = true;
//                 }
//             }
//             if (found !== true) {
//                 shuffledCharacterArray.push(currentCharacter);
//             }
//             // console.log(shuffledCharacterArray.length,characters.length);
//         }
//         while (shuffledCharacterArray.length < characters.length)

//         // console.log('shuffledCharacterArray',shuffledCharacterArray);

//         this.setState({
//             characters: shuffledCharacterArray
//         })
//         return shuffledCharacterArray;
//     }

//     componentDidMount() {
//         this.shuffleCharacters();
//         console.log(this.state.characters);
//     }

//     render() {
//         return (
//             <div className='d-flex flex-wrap justify-content-around'>
//                 {this.state.characters.map( (character,idx) => (
//                     <ImageCard 
//                     name={character.name}
//                     image={character.image}
//                     onClick={ () => this.handleImageClick() }
//                     key={idx}
//                     />
//                 ))}
//             </div>
//         )
//     }
// };