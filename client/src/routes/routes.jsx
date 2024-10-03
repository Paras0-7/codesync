import { createBrowserRouter } from "react-router-dom";
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