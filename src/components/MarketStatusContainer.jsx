export default function MarketStatusContainer({ title, children }) {
  return (
    <div className='markets'>
      <h3 className='table-title'>{title}</h3>
      <div className='market-table'>
        <div className='table-header'>
          <div className='row header'>
            <span className='asset-cell'>Asset</span>
            {title === "Supply Markets" ? (
              <>
                <span>Supply APY</span>
                <span>Wallet</span>
                <span>Collateral</span>
              </>
            ) : (
              <>
                <span>Borrow APY</span>
                <span>Total Borrow</span>
                <span>Available Borrow</span>
              </>
            )}
          </div>
        </div>
        <div className='table-data'>{children}</div>
      </div>
    </div>
  );
}
