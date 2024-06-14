import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { ThemeProvider } from "@/provider/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
