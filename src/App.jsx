import { useSelector } from "react-redux";
import './App.css';
import Likes from './likes';
import Title from './title';
import Comments from './comments';
import Spin from './spin';

function App() {
  const error = useSelector(state => state.appReducer.error);
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default App;
