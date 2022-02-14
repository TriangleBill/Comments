import './App.css';
import Comments from './components/Comments';
import Likes from './components/Likes';
import Spin from './components/Spin';
import Title from './components/Title';
import { useSelector } from 'react-redux';

function App() {
  const error = useSelector(state => state.appReducer.error)

  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Likes />
            <Title />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
