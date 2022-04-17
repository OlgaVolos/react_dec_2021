import './App.css';
import {Button} from "./components";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, SinglePostPage, PostPage, UserPage} from "./pages";
import {SingleUserPage} from "./pages/SingleUserPage/SingleUserPage";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'users'} element={<UserPage/>}>
                  <Route path={':id'} element={<SingleUserPage/>}/>
                  </Route>
              <Route path={'posts'} element={<PostPage/>}>
                  <Route path={':id'} element={<SinglePostPage/>}/>
              </Route>
              <Route path={'about'} element={<AboutPage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>

          </Route>
      </Routes>
  );
}

export default App;


//компоненти можуть бути з подвійними тегами. Все, що прописується як
// текст, попадає в чілдрени
//Route може бути як одинарним, так і подвійним, якщо в нього є дочірні Route
// * означає, що немає співпадінь в урлі, чи переходять кудись не туди
// <Route index element={<Navigate to={'/home'}/>}/> одразу при відкритті сторінки нас перекидає туди, куд ми вказуємо
// дочірні роути наслідують path свого батька, тому "/" можна не писати, якщо ми вже його прописали
