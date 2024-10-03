import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import App from "../App";
import { Editor } from "../pages/Editor";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path:'/editor/:roomId',
        element: <Editor/>
    }
])