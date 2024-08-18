
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import store from './Utils/store';

function App() {
  return (
    <div  >
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
