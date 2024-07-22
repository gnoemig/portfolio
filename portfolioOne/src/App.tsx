import "./App.css";
import ResetPassword from "./components/feature/password/ResetPassword";

// import { Footer } from "./components/layout/footer/Footer";
// import { MainLayout } from "./components/layout/mainLayout/MainLayout";
// import Navbar from "./components/layout/navbar/Navbar";
// import Sidebar from "./components/layout/sidebar/Sdebard";

function App() {
  return (
    <div className="flex flex-col w-full">
      {/* <Navbar />
      <Sidebar />
      <MainLayout />
      <Footer /> */}
      <ResetPassword />
    </div>
  );
}

export default App;
