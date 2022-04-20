import './App.css';
import {Button} from "./components";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {
    AboutPage,
    HomePage,
    NotFoundPage,
    SinglePostPage,
    PostPage,
    UserPage,
    SingleUserPage,
    LoginPage
} from "./pages";
import {RequireAuth} from "./hoc/RequireAuth";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'login'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'login'} element={<LoginPage/>}/>
              <Route path={'users'} element={
                  <RequireAuth>
                      <UserPage/>
                  </RequireAuth>
              }>
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
// якщо ми не хочемо, щоб хтось переходив на якусь сторынку, то огортаємо її в RequireAuth
