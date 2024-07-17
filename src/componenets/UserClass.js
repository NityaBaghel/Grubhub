import React from "react";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummmy",
        location: "Default",
        avatar_url: "default",
      },
    };
    // console.log( this.props.name+"Child constructor");
  }


  async componentDidMount() {
    // console.log( this.props.name+"child ComponentDidMount");
    // Used to make an API call
    const data = await fetch(" https://api.github.com/users/prashantkumarsingh07");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });


  }


  render() {
    /*  destructuring */

    //  console.log(this.props.name+" child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src=" https://avatars.githubusercontent.com/u/99783341?v=4"/>

        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : prashantkumarsingh07pks@gmail.com</h2>

      </div>
    );
  }
}
