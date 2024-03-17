import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskCardList from './components/TaskCardList';
import { getAllData } from './services/get';
import { RiseLoader } from 'react-spinners';

function App() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <>
      <Header setUpdate={setUpdate} users={users} />
      <TaskCardList setUpdate={setUpdate} users={users} />
      {isLoading && <RiseLoader />}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
