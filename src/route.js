import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Map from './views/Map';
import Neighbors from './views/Neighbors';
import Crops from './views/Crops';
import Item from './views/Item';
import ToDoList from './views/ToDoList';
import Animals from "./views/Animals";
import Cooking from "views/Cooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/neighbor" replace />,
      },{
        path: "/neighbor",
        element: <Neighbors />,
      }, {
        path: "/crop",
        element: <Crops />,
      }, {
        path: "/item",
        element: <Item />,
      }, {
        path: "/map",
        element: <Map />,
      }, {
        path: "/animals",
        element: <Animals />,
      }, {
        path: "/todo",
        element: <ToDoList />,
      }, {
        path: "/cooking",
        element: <Cooking />,
      },
    ]
  },
]);

export default router;