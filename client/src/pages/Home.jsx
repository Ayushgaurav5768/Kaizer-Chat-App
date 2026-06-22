import Sidebar from "../components/layout/Sidebar";
import ChatWindow from "../components/layout/ChatWindow";

function Home() {
  return (
    <div className="h-screen flex bg-slate-200">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default Home;