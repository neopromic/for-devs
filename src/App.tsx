import Header from "./components/Header";
import SectionWelcome from "./components/SectionWelcome";
import "./styles/App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Header />
      <SectionWelcome />
    </NextUIProvider>
  );
}

export default App;
