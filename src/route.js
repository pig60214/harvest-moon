import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Map from './Map';
import Neighbors from './Neignbors';
import Crops from './Crops';
import Item from './Item';
import ToDoList from './ToDoList';
import Animals from "./Animals";

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
      },
    ]
  },
]);

export default router;