import "../styles/App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import { ThemeProvider } from "@/components/ThemeProvider";

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
