// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import RoutingPage from "./components/pages/Root";
import HomePage from "./components/pages/HomePage";
import EventsPage from "./components/pages/EventsPage";
import EventDetailPage from "./components/pages/EventDetailPage";
import NewEventPage from "./components/pages/NewEventPage";
import EventRoot from "./components/pages/EventRoot";
import EditEventPage from "./components/pages/EditEventPage";
import {loader as eventLoader} from "./components/pages/EventsPage"
import ErrorPage from "./components/pages/ErrorPage";

function App() {

  const router = createBrowserRouter([
  {
    path:"/",element:<RoutingPage></RoutingPage>,
    errorElement:<ErrorPage></ErrorPage>,
  children:[
    {path:"",element:<HomePage></HomePage>},
    {path:"events",element:<EventRoot></EventRoot>,children:[
      {path:"",element:<EventsPage></EventsPage>,loader: eventLoader},
  {path:"new",element:<NewEventPage></NewEventPage>},
  {path:":id",element:<EventDetailPage></EventDetailPage>},
  {path:":id/editEvent",element:<EditEventPage></EditEventPage>}
    ]},
  
]
},

  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
