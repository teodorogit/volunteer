import { createBrowserRouter } from "react-router-dom";
import Atividades from "./pages/AtividadesOng/Atividades.tsx";
import Solidariedade from "./pages/LojaSolidariedade/Solidariedade.tsx";
import App from "./App.tsx";
import Main from "./components/Main/Main.tsx";

export const router = createBrowserRouter([
            {
                path: '/',
                element:<App/>,
            },
            {
                path:'/solidariedade',
                element:<Solidariedade/>
            },
            {
                path:'/conteudo',
                element:<Main/>
            },
            {
            path: '/atividade',
            element: <Atividades/>
    
            },
            
]);

    