import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal() {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;
		modal.showModal();
		return () => modal.close();
	}, []);

	return createPortal(
		<dialog
			className="modal popup-container"
			ref={dialog}
			//   //   onClose={onClose}
		>
			<button id="popup-close-button" className="close-button">
				<img
					src="./BrandingAssets-main/Icons/close-icon.png"
					alt="x"
				/>
			</button>
			<div className="popup-markets-container show">
				<div className="asset-info">
					<img src="./BrandingAssets-main/Brand/Icon.png" alt="" />
					<h4 id="popup-asset-name">WBTC</h4>
				</div>
				<div className="popup-options supply-popup supply-active active">
					<div className="options-buttons supply-options">
						<button id="supply-option">Supply</button>
						<button id="withdraw-option">Withdraw</button>
					</div>
					<div className="popup-info-container">
						<div className="main-info-container">
							<div className="info-dashboard-section">
								<h2 className="dashboard-main-balance">0.0</h2>
								<div className="dashboard-mini-info">
									<p className="max">
										<button id="max-btn">Max</button>
									</p>
									<p>USDC</p>
									<p className="mini-info-balance">~$0.0</p>
								</div>
							</div>
							<div className="all-info">
								<div className="info">
									<p>Supply APY</p>
									<p id="popup-supply-apy">1.80%</p>
								</div>
								<div className="info">
									<p>Supply Balance</p>
									<p id="popup-supply-balance">$0</p>
								</div>
								<div className="info">
									<p>Borrow Limit</p>
									<p id="popup-supply-limit">$0</p>
								</div>
								<div className="info">
									<p className="usage">Borrow Usage</p>
									<p className="available">
										Borrow Limit Used -&gt; Available
									</p>
									<p id="popup-supply-usage">$0</p>
								</div>
							</div>
						</div>
					</div>
					<div className="buttons-container">
						<div className="supply-buttons">
							<button id="approve-btn" className="primary-btn">
								1. Approve
							</button>
							<button id="supply-btn" className="primary-btn">
								2. Supply
							</button>
						</div>
						<div className="withdraw-buttons">
							<button id="withdraw-btn" className="primary-btn">
								Withdraw
							</button>
						</div>
					</div>
				</div>
			</div>
		</dialog>,
		document.getElementById("modal")
	);
}

export default Modal;
