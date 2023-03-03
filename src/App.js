import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
function App() {
  

  const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[

     {
      path:'/',
      element:<Home></Home>
    },{
      path:'/about',
      element:<About></About>
    },

    ]
  }

    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}
export default App;
