import { RouterProvider } from "react-router"
import router from "./routes"
import { Toaster } from "react-hot-toast"
import { Provider } from 'react-redux';
import { store } from "./redux/store";




function App() {

  return (
    <>
      <Provider store={store}>
      <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </Provider>
    </>
  )
}

export default App
