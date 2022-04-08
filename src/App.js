import css from './App.module.css';
import {SingleUser, Users} from "./components";
import {useState} from "react";

function App() {
    const [singleUser, setSingleUser] = useState(null);

    // const getSingle = (user) => {
    //     setSingleUser(user)
    // } Можна зробити функцією, а можна одразу передати в Юзер

    return (
        <div className={css.silver}>
            {singleUser && <SingleUser user={singleUser} />}
            <Users getSingle={setSingleUser}/>
        </div>
    );
}

export default App;
