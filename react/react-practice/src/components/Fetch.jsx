import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [alldata, setAlldata] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('fakedata.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        setAlldata(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {alldata.map((m, index) => (
        <div key={index}>
          <h1>{m.name}</h1>
          <p>{m.age}</p>
          <p>{m.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;