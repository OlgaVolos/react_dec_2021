import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {PostPage, SinglePostPage, SingleUserPage, UserPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route path={'users'} element={<UserPage/>}>
              <Route path={':id'} element={<SingleUserPage/>}/>
          </Route>
          <Route path={'posts'} element={<PostPage/>}>
              <Route path={':id'} element={<SinglePostPage/>}/>
          </Route>
      </Route>


    </Routes>
  );
}

export default App;
