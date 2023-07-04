import { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';
import './index.css';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`Error ${resp.status}: ${resp.statusText}`);
      }
      const data = await resp.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      {tours.length === 0 && (
        <button className="btn btn-block" onClick={fetchData}>
          Refetch Data!
        </button>
      )}
    </main>
  );
};
export default App;
