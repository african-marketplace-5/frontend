import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Browse from './components/Browse'

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Search />
      <Browse />
    </div>
  );
}

export default App;
