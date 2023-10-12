import './App.css';
import Navbar from './myComponent/Navbar/Navbar';
import TaskMainBody from './myComponent/TaskMainBody/TaskMainBody';
import TaskTopSide from './myComponent/TaskMainBody/TaskTopSide/TaskTopSide';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskTopSide />
      <div className='container-fluid' style={{ marginTop: '30px' }}>
        <TaskMainBody />
      </div>
    </div>
  );
}

export default App;
