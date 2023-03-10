import './App.css';
import PostAPI from './utils/PostAPI';

function App() {
  const handleClick = () => {
    PostAPI.getPosts();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
