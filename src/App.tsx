import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const handleClickIncrement: () => void = () => {
    setState(state => state + 1);
  };

  const handleClickDecrement: () => void = () => {
    setState(state => state - 1);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-primary-100"> RED </div>
      <p>{state}</p>
      <div className="flex gap-2">
        <button
          className="bg-slate-700 text-white px-4 py-2 rounded-2xl hover:bg-slate-600"
          onClick={handleClickIncrement}
        >
          +
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-2xl text-white flex items-center justify-center"
          onClick={handleClickDecrement}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
