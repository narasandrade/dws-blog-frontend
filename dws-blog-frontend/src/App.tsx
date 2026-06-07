import { Home } from "./pages/home";
import AppProviders from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <Home />
    </AppProviders>
  );
}

export default App;
