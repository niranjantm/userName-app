import CreateFlashcard from "./pages/CreateFlashcard";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import CreateNew from "./pages/CreateNew";
import MyFlashcards from "./pages/MyFlashcards";

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<CreateFlashcard></CreateFlashcard>,
    children:[
      {index:true,element:<CreateNew></CreateNew>},
      {path:"flashcards",element:<MyFlashcards></MyFlashcards>}
    ]}
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  ) ;
}

export default App;