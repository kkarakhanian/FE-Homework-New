import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
            <h1>Привіт з React + Vite 🚀</h1>
            <p>Невеликий лічильник:</p>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Додати +1</button>
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
                Відняти -1
            </button>
        </div>
    );
}

export default App;
