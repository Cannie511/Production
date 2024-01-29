import logo from './logo.svg';
import './App.scss';
import Nav from './component/Nav';
import Listfriend from './component/Listfriend';
import { BrowserRouter } from "react-router-dom";
import Main from './component/Main';
import UserDetail from './component/UserDetail';
function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Listfriend />
      <div className="App">
        <header className="App-header">

          <div style={{ display: 'flex', width: '100%', margin: 0, padding: 0, justifyContent: 'center' }}>
            <Main />

          </div>
        </header>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
