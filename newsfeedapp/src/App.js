import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import doge from "./doge.jpg"
import pepe from "./pepe.png"
import knuckles from "./knuckles.jpg"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';

var test = [];
test.push({greeting: "Hello"});

let load = true;


const styles = {
  card: {
    maxWidth: 345,
    boxShadow: "2px 0px 2px black",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class App extends Component {
    
    constructor(){
        super();
        this.state = {
            cards: [],
        }
    }
    
    /* 
    ** changeColor passed into toggleChanges to change the color onClick
    */
    
    changeColor = (color) => {
        this.setState({color});
    }
    
    toggleChanges = () => {
        this.changeColor(this.state.color === "red" ? "#696969" : "red");
    }
    
    test = (i, event) =>{
        const index = i;
        let updatedList = this.state.cards;
        updatedList[index].color = !updatedList[index].color;
        console.log(updatedList[index].color)
        this.setState({
            cards: updatedList
        })
    }
    
    
  render() {
    if(load){
        this.state.cards.push({image: pepe, caption: "Make America Great Again", author: "TrumpFan101", color: true});
        this.state.cards.push({image: doge, caption: "Such awesome, very wow, so goodness", author: "goodboy", color: true});
        this.state.cards.push({image: knuckles, caption: "Do u knoe da way", author: "Kony2012", color: true});
        load = false;
    }
    const list = this.state.cards;
    const posts = list.map((items, i) => {

    return(
        <li key={i}>
            <Card style = {styles.card} className={"card"}>
                <CardMedia image = {this.state.cards[i].image} style = {styles.media}/>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.state.cards[i].author}
                    </Typography>
                    <hr></hr>
                    <Typography component="p">
                        {this.state.cards[i].caption}
                    </Typography>
                    <IconButton aria-label="Add to favorites"  >
                        <FavoriteIcon onClick={this.test.bind(this, i)}
                        className={(this.state.cards[i].color) ? "changeNull" : "changeRed"}/>
                    </IconButton>
                </CardContent>
            </Card>
        </li>
      )
    })

    return (
      <div className="App">
            <h1>Redit?</h1>
            <ul>
                {posts}
            </ul>
      </div>
    );
  }
}

export default App;