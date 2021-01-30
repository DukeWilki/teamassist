import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./containers/Login/Login";
import Menu from "./containers/Menu/Menu";
import CertSelection from "./containers/CertSelection/CertSelection";
import CertSummary from "./containers/CertSummary/CertSummary";
import MemberSelection from "./containers/MemberSelection/MemberSelection";
// import MemberSummary from "./containers/MemberSummary/MemberSummary";
import EditCert from "./containers/EditCert/EditCert";

function App() {
  return (
    <div className="App">
      <div className="container-section">
        <Header />
        <Login />
        <Footer />
      </div>

      <Menu />
      <CertSelection />
      <CertSummary />
      <MemberSelection />
      {/* <MemberSummary /> */}
      <EditCert />
      {/* <NewMember /> */}
    </div>
  );
}

export default App;
