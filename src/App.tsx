import { ThemeProvider } from "./features/theme/ThemeContextProvider";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <div>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
