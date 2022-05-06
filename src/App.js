import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarPage, CarsPage, NotFoundPage} from "./pages";

function App() {
    return (
       <Routes>
           <Route path={'/'} element={<MainLayout/>}>
               <Route index element={<Navigate to={'cars'}/>}/>
               <Route path={'cars/:carId'} element={<CarPage/>}/>
               <Route path={'cars'} element={<CarsPage/>}/>
               <Route path={'*'} element={<NotFoundPage/>}/>
           </Route>
       </Routes>
    );
}

export default App;
// <Route path={'cars/:carId'} element={<CarPage/>}/> пишеться вище, щоб відпрацювало першою
