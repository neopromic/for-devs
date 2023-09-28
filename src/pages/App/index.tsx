import "../styles/App.css";
import Header from "@/components/ui/Header";
import Main from "@/components/ui/Main";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
