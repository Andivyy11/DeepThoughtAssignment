import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Jboard from './components/JourneyBoard/Jboard';
import NoticeBoard from './components/NoticeBoard/NoticeBoard';
import data from './projectModel.json'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Main'>
      <div className='Top'>
          <h1>{data.title}</h1>
          <button className='blue-btn'>Submit Task</button>
      </div>
      <div className='Mid'>
      {
        (data.tasks).map((task,index) => <div>
        <div className='Desc' key={index}>
          <h3>{task.task_title}</h3>
          <p>{task.task_description}</p>
        </div>
        <div className='CardContainer'>
          {
            (task.assets).map((c) => <Card data={c}/>)
          }
        </div>
        </div>)
      }
       
      </div>
      <Jboard/>
      <NoticeBoard/>
      </div>
      <div className='absolute-icons'>
      <i class="fa-solid fa-question"></i>
      <i class="fa-solid fa-calendar-days"></i>
      <i class="fa-solid fa-people-group"></i>
      </div>
    </div>
  );
}

export default App;
