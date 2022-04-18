import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {CommentsPage, PostPage, SinglePostPage, SingleUserPage, UserPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route path={'users'} element={<UserPage/>}>
              <Route path={':userId'} element={<SingleUserPage/>}>
                  <Route path={'posts'} element={<PostPage/>}/>
              </Route>
          </Route>
          <Route path={'posts'} element={<PostPage/>}>
              <Route path={':id'} element={<SinglePostPage/>}>
                  <Route path={'comments'} element={<CommentsPage/>} />
              </Route>
          </Route>
      </Route>


    </Routes>
  );
}

export default App;
