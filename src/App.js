import { useSelector } from 'react-redux';
import './App.css';
import StopWatch from './components/StopWatch';
import Timer from './components/Timer';



function App() {

  const showStopWatch = useSelector(state => state.showStopWatch);

  return (
    <div className="App">
      {showStopWatch ? <StopWatch /> : <Timer />}

    </div>
  );
}

export default App;
