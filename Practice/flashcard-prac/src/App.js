import {createBrowserRouter,RouterProvider} from "react-router-dom";
import CreateFlashcard from "./Pages/CreateFlashcard";
import CreateNew from "./Pages/CreateNew"

import './App.css';
import FlashCards from "./Pages/FlashCards";



function App() {
  const router = createBrowserRouter([
    {path: "/",element:<CreateFlashcard></CreateFlashcard>,children:[
      {index:true,element:<CreateNew></CreateNew>},
      {path:"flashcards", element:<FlashCards></FlashCards>}
    ]}
   
  ])
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
