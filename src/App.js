import React, { Component } from 'react';
import './App.css';
import Profile from './user/Profile.js';

const user = {
  fullName: 'Mostafa Ali Jafari',
  avatar: "https://avatars2.githubusercontent.com/u/6865268?s=460&v=4",
  job: "FrontEnd Developer",
  summary: `Around 6 years of Experience in developing web applications and frameworks using HTML 4/5, CSS2/CSS3, JavaScript/Angular/React.
   Proficient in building Web User Interface (UI) using latest W3C/WCAG Web Standards that are cross browser compatible.
   Delivered engaging and visually compelling web designs with user-friendly UI that are cross-browser compatible and mobile responsive.`,
   github:"https://github.com/MTaheriii",
   linkedin:"https://www.linkedin.com/in/mostafa-ali-jafari/",

}

export const UserContext = React.createContext({});

class App extends Component {
  render() {
    return (
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    );
  }
}

export default App;
