import logo from './logo.svg';
import './App.css';
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import StateFulAddressPhoneForm from './components/StateFulAddressPhoneForm';
import UseEffectUsage from './components/UseEffectUsage';
import CustomerForm from './components/CustomerForm';
import AutocompleteComponent from './components/AutocompleteComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <HelloWorld/>
        <p>React Assignment</p>
        {/* <StateFulAddressPhoneForm /> */}
        {/* <UseEffectUsage /> */}
        {/* <CustomerForm /> */}
         <AutocompleteComponent />

      </header>
    </div>
  );
}

export default App;
