import MarketsContainer from "../components/marketscontainer";
import ModalConnectWallet from "../components/ModalConnectWallet";

export default function Markets() {
  return (
    <div className='content-container dashboard-container active-page'>
      <ModalConnectWallet />
      <MarketsContainer />
    </div>
  );
}
