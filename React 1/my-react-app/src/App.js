import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


function Greeting(props){
  return (
    <h1> Hello, {props.name} </h1>
  )
}

function App() {
  return (
    <div>
      <Header name ="Anna" color= "purple"/>
      <Main />
      <Sidebar />
    </div>
  )
}

export default App;
