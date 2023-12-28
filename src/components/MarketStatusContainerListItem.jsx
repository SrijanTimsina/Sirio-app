import { useState } from "react";

export default function MarketListItem({
  title,
  img,
  apy,
  amount,
  collateral,
  availableBorrow,
}) {
  const [collateralState, setCollateralState] = useState("");

  function handleClick() {
    setCollateralState((state) => (state === "" ? "on" : ""));
  }

  let collateralClass = "button";
  if (collateralState === "on") {
    collateralClass = "button on";
  } else if (collateralState === "") {
    collateralClass = "button";
  }

  return (
    <div className='row table-data-row supply-market-row'>
      <span className='asset-cell'>
        <img
          src={img}
          alt=''
        />
        {title}
      </span>
      <span>{apy}%</span>
      <span>{amount}</span>
      {collateral ? (
        <div className='cell'>
          <button
            id='collateral-btn'
            onClick={handleClick}
          >
            <div
              className={collateralClass}
              id='collateral-icon'
            ></div>
          </button>
        </div>
      ) : null}
      {availableBorrow ? (
        <span className='available'>{availableBorrow}</span>
      ) : null}
    </div>
  );
}
