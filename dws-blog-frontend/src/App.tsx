import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./components";
import { Home } from "./pages/Home";
import { PostDetails } from "./pages/PostDetails";
import AppProviders from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
