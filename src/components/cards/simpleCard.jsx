import React from "react";
import {
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
} from "react-icons/md";

const SimpleCard = ({ title, number, desc, icon }) => {
  return (
    <div className="flex items-start gap-3 card p-6 rounded-md">
      <div className="flex">
        {(() => {
          if (icon == "user") {
            return <MdSupervisedUserCircle size={22}/>
          } else if (icon == "product") {
            return <MdShoppingBag size={22}/>;
          }
          else {
            return <MdAttachMoney size={22}/>
          }
        })()}
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="font-bold">{title}</h1>
        <h2 className="font-semibold">{number}</h2>
        <p className="font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default SimpleCard;
