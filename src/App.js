
import { RouterProvider } from 'react-router-dom';
import './App.css';
import './Pages/Shered/Css/Style.css'
import routes from './Routes/Routes';

function App() {
  return (
    <div className="max-w-screen-[500px] lg:max-w-screen-xl mx-auto relative">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
