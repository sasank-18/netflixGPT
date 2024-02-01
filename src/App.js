import Body from './Components/Body';
import "./index.css"
import { Provider } from 'react-redux';
import { store } from './reduxStore/store';

function App() {

  
  return (
    <Provider store= {store}>
    
    <Body/>
    
    </Provider>
  );
}

export default App;
