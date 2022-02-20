import "./App.css";
import { ItemsProvider } from "./context/ItemsContext";
import Home from "./views/Home";
import Layout from "./views/Layout/Layout";

function App() {
  return (
    <>
      <ItemsProvider>
        <Layout>
          <Home />
        </Layout>
      </ItemsProvider>
    </>
  );
}

export default App;
