import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Nav from './components/Nav';
import Update from './components/Update';
import DataList from './pages/DataList';
import Home from './pages/Home';

function App() {
  return (
    <div>
     <Router>
       <Nav />
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/data-list' element={<DataList/>} />
              <Route path='/update' element={<Update/>} />
          </Routes>
     </Router>
    </div>
  );
}

export default App;
