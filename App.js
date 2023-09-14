import ReactDOM from "react-dom/client";
import react from "react";
export const App =()=>{
    return <div><h1>Hi</h1></div>
}
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)