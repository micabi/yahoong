import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Table from './table';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  function changeText(e: React.ChangeEvent<HTMLInputElement>): void {
    // if (e.target === null) return;
    const text: string = e.target.value;
    // return text;
    // console.log(text);
    setText(text);

    if (text === '') {
      setText('');
    }

    // console.log(text);
  }

  function handleCount(count: number): void {
    setCount(count);
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <h1 className="mb-6 !text-base">2025年4月3日改定版</h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="検索にヒットしたら出品できるブランドです"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            changeText(e);
          }}
          className="w-lg rounded-md p-2 outline-2 outline-slate-300"
        />
        <span
          className={`ml-6 inline-block rounded-md py-2 text-xl font-bold ${count > 0 ? 'text-slate-600' : 'text-slate-300'}`}
        >
          {count}
          {'  '}件
        </span>
      </div>

      <Table
        text={text}
        handleCount={(count: number): void => {
          handleCount(count);
        }}
      />
    </>
  );
}

export default App;
