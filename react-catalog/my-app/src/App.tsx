import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Route, Routes } from 'react-router-dom';
import { Details } from './pages/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
