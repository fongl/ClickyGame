import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    activated: [],
    score: 0
  };

  activate = id => {
    let str = id.toString();
    console.log(str);
    let list = this.state.activated;
    if (list.indexOf(str) != -1) {
      this.setState({ score: 0 });
      this.setState({ activated: [] });
    } else {
      this.setState({ score: this.state.score + 1 });
      this.state.activated.push(str);
      this.setState({ activated: this.state.activated });
      console.log(this.state.activated);
      this.shuffle(this.state.friends);
    }
  };

  shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  this.setState({friends:arr});
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Score: {this.state.score}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            activation={this.activate}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
