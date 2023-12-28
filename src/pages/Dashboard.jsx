import BalanceStatus from "../components/BalanceStatus";
import CenterNetStatus from "../components/CenterNetStatus";
import MarketStatus from "../components/MarketStatus";
import Modal from "../components/Modal";

function Dashboard() {
	return (
		<div className="content-container dashboard-container active-page">
			<Modal />
			<CenterNetStatus />
			<BalanceStatus />
			<MarketStatus />
		</div>
	);
}

export default Dashboard;
