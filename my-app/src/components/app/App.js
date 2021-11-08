import React from "react";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello React</p>
      </header>
    </div>
  );
}
*/

export const App = (p) => {
  const {name , age} = p
  const background = Math.random() > 0.5 ? "red" : "green";
  console.log('p',p);
  return (
    <div style={{ background }}>
      App {name} {age}
      <MainTitle />
      <SubTitle/>
      
     
    </div>
  );
};


const MainTitle = () => <p style={{fontSize: '20px'}}>Main Title</p>;

/*class MainTitle2 extends React.Component {
       render() {
           return (
               <p style={{fontSize: '20px'}} >MainTitle2</p>
           );
       }
   }
*/

class SubTitle extends React.Component {
  render() {

    const background = Math.random() > 0.5 ? "orange" : "blue"; 

    return <p style={{background}}>SubTitle</p>;
  }
}

export default App;
