import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(0);
  console.log("🚀 ~ App ~ state:", state)
  console.log("🚀 ~ App ~ state:", state)

  useEffect(() => {}, [state]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-primary-100"> RED </div>
    </>
  );
}

export default App;
