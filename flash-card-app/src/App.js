
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import MainNavPage from "./Pages/MainNavPage";
import CreateNewCard from "./Pages/CreateNewCard";
import MyFlashcards from "./Pages/MyFlashcards";
import Root from "./Pages/Root";

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Root></Root>,children:[
      {path:"new",element:<CreateNewCard></CreateNewCard>},
      {path:"myFlashCards",element:<MyFlashcards></MyFlashcards>}
    ]},
      
    

    
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
