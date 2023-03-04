import './App.css';
import React, { useState } from 'react';

const data = [
  {
    name: 'video download',
    url: ['http://www.youtube.com'],
  },
];
const data1 = [
  {
    name: 'search engine',
    url: ['http://www.google.com'],
  },
];

function App() {
  const [lists] = useState(data);
  const [search] = useState(data1);

  const openTabs = (url) => {
    for (const link of url) {
      window.open(link, '_blank');
    }
  };
  const openTabs1 = (url) => {
    for (const link of url) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className='app'>
      <h3>Choose your App List</h3>
      <div className='youtube'>
        {lists &&
          lists.map((item) => {
            return (
              <button
                className='button'
                onClick={() => {
                  openTabs(item.url);
                }}
              >
                {item.name}
              </button>
            );
          })}
        {search &&
          search.map((item) => {
            return (
              <button
                className='button'
                onClick={() => {
                  openTabs1(item.url);
                }}
              >
                {item.name}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default App;
