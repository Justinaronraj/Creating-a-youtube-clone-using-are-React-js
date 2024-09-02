import './App.css';
import Sidebar from './Navbar'
import Topnav from './Topnav'
import VideoGrid from './videos'
function App() {
  return (
    <div className="App">
     <Topnav/>
     <Sidebar/>
     <VideoGrid/>
    </div>
  );
}

export default App;
