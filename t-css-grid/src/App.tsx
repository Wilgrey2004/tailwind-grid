import "./App.css";
import { Box } from "./Components/Box";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-[100vh]">
        <Box contenido="header" clase="col-span-2" />
        <Box contenido="nav" clase="col-span-2" />
        <Box contenido="section" />
        <Box contenido="article" />
        <Box contenido="aside" clase="col-start-2 row-[3/5]" />
        <Box contenido="footer" clase="col-span-2" />
      </div>
    </>
  );
}

export default App;
