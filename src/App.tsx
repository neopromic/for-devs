import { NextUIProvider } from "@nextui-org/react";
import "./styles/App.css"
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <NextUIProvider>
      <Header />
      <Main />
    </NextUIProvider>
  );
}

export default App;
