import { Navigate, Route, Routes } from "react-router-dom";
import CollectionBoard from "./components/Collections/CollectionBoard";
import CollectorBoard from "./components/Collector/CollectorBoard";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/Collectors" />} />
        <Route path="/Collections" element={<CollectionBoard />} />
        <Route path="/Collectors" element={<CollectorBoard />} />
      </Routes>
    </Layout>
  );
}

export default App;
