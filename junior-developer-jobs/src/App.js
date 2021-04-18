import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [titleJobs, setTitleJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('../jobsProgramaThor.json');
      const jobsTitle = await response.json();
      setTitleJobs(jobsTitle);
    }
    fetchJobs();
  }, []);

  return (
    <div className="App">
      { titleJobs.map(
        ({ title, url }, index) =>
          <a href={ url } target="_blank" rel="noreferrer" key={title+index}>
            <h1>
              { title }
            </h1>
          </a>
        )}
    </div>
  );
}

export default App;
