import logo from './logo.svg';
import './App.css';
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import MyForm from './components/ReactAssignment1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <HelloWorld/>
        <p>React Assignment</p>
        <MyForm />
      </header>
    </div>
  );
}

export default App;
