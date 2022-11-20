import { BrowserRouter } from 'react-router-dom'
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const isLogged = JSON.parse(localStorage.getItem("userLogged"));

  return (
    <div className="App">
      <BrowserRouter>
        {!isLogged ?
          <PublicRoute />
          :
          <PrivateRoute />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
