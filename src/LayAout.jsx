import Navigations from "./Navigations";
import { Outlet } from "react-router-dom";
function LayAout({ input, setInput }) {
  return (
    <div>
      <nav className="sticky top-0 z-1000 bg-white-800/20 border-b border-slate-100  backdrop-blur-md p-3 shadow-sm">
        <Navigations input={input} setInput={setInput} />
      </nav>

      <Outlet />
    </div>
  );
}

export default LayAout;
