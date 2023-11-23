import React from 'react';

import './App.css';

import { Layout } from './components/layout';
import { Item } from './components/item';

function App() {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="App">
      <Layout title="Выберите материал">
        <div style={{ display: 'flex' }}>
          <Item name="Железные" price={1000} active={selected === 1} onClick={() => setSelected(1)} />
          <Item name="Железные2" price={1000} active={selected === 2} onClick={() => setSelected(2)} />
          <Item name="Железные3" price={1000} active={selected === 3} onClick={() => setSelected(3)} />
        </div>
        <button disabled={selected === null}>Далее</button>
      </Layout>
    </div>
  );
}

export default App;
