import { RouterProvider } from "react-router";
import { router } from "./Utils/Router";

const App = () => {
  return (
    <>
     
      <RouterProvider router={router} />
    </>
  );
};

export default App;
