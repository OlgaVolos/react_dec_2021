import {useContext} from "react";

import {AuthContext} from "../hoc";

export const useAuth = () => useContext(AuthContext);

//щоб не писати постійно всюди useContext, ми його викликаємо тут і потім при потребі будемо
// викликати лише наш кастомний хук useAuth
