import './App.css';
import {Counter} from "./components";
import {Form} from "./components/Form";
import {Users} from "./components/Users";

function App() {
    return (
        <div>
            <Counter/>
            <hr/>
            <hr/>
            <div>
                <Form/>
                <Users/>
            </div>
        </div>
    );
}

export default App;
