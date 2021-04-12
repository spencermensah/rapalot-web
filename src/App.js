import logo from './logo.svg';
import './App.css';

import RapService from './services/RapService.js';
import ButtonAppBar from './Componets/ButtonAppBar.js';
import MultilineTextFields from './Componets/MultilineTextFields.js';
import SwipeableTemporaryDrawer from './Componets/SwipeableTemporaryDrawer.js';

function App() {

  // 

  return (
    <div className="App">
      <ButtonAppBar/>
      <MultilineTextFields/>
      <SwipeableTemporaryDrawer/>
    </div>
  );
}

export default App;
