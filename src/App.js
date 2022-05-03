import {Cats, CatsForm, Dogs, DogsForm} from "./components";

import css from './App.module.css'
function App() {
    return (
        <div>
            <div className={css.dFlex}>
            <CatsForm/>
            <DogsForm/>
            </div>
            <hr/>
            <div className={css.dFlex}>
            <Cats/>
            <Dogs/>
            </div>

        </div>
    );
}

export default App;
