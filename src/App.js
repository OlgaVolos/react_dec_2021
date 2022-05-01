import './App.css';
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";

function App() {
    return (
        <div style={{display: 'flex'}}>
            <Users/>
            <hr/>
            <Posts/>
        </div>
    );
}

export default App;
