import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './../src/Store';
import Main from './../src/App/Screens/MainScreen';

function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}

export default App;
