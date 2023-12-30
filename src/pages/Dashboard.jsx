import BalanceStatus from "../components/BalanceStatus";
import CenterNetStatus from "../components/CenterNetStatus";
import MarketStatus from "../components/MarketStatus";
import ModalBorrow from "../components/ModalBorrow";
import ModalConnectWallet from "../components/ModalConnectWallet";
import ModalRisk from "../components/ModalRisk";
import ModalSupply from "../components/ModalSupply";

function Dashboard() {
  return (
    <div className='content-container dashboard-container active-page'>
      <ModalSupply />
      <ModalBorrow />
      <ModalRisk />
      <ModalConnectWallet />
      <CenterNetStatus />
      <BalanceStatus />
      <MarketStatus />
    </div>
  );
}

export default Dashboard;
