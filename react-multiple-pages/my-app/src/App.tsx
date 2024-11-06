import { useState } from 'react';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';

export function App() {
  const [page, setPage] = useState('dashboard');
  const [itemId, setItemId] = useState<number>();

  function handleDetails(itemId: number): void {
    setPage('details');
    setItemId(itemId);
  }

  return (
    <>
      <Header onNavigate={(page) => setPage(page)} />
      {page === 'dashboard' && <Dashboard onDetails={handleDetails} />}
      {page === 'details' && (
        <Details itemId={itemId} onDone={() => setPage('dashboard')} />
      )}
      {page === 'about' && <About />}
      {page === undefined && <NotFound onDone={() => setPage('dashboard')} />}
    </>
  );
}
