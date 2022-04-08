import './App.css';
import {Comments, Posts, Users} from "./components";

function App() {
    return (
        <div>
            <div className={'user_post'}>
                <Users/>
                <Posts/>
            </div>
                <Comments/>
        </div>
    );
}

export default App;
