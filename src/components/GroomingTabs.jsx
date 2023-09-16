import React from "react";
import { BsPatchCheck } from "react-icons/bs";
const GroomingTabs = ({
  priceGrooming,
  catchingNails,
  earCleaning,
  shower,
  dentalHygiene,
  fullPacket,
}) => {
  return (
    <div className="GroomingTabs">
      <div className="packages">
        <div className="g-package">
          <div className="package">
            <BsPatchCheck className="checkicon" />
            <h3>Qırxım</h3>
          </div>
          <h3 className="price">{priceGrooming}</h3>
        </div>

        <div className="g-package">
          <div className="package">
            <BsPatchCheck className="checkicon" />
            <h3>Dırnaqların tutulması</h3>
          </div>
          <h3 className="price">{catchingNails}</h3>
        </div>

        <div className="g-package">
          <div className="package">
            <BsPatchCheck className="checkicon" />
            <h3>Qulaq təmizliyi</h3>
          </div>
          <h3 className="price">{earCleaning}</h3>
        </div>

        <div className="g-package">
          <div className="package">
            <BsPatchCheck className="checkicon" />
            <h3>Duş</h3>
          </div>
          <h3 className="price">{shower}</h3>
        </div>

        <div className="g-package">
          <div id="end-package" className="package">
            <BsPatchCheck className="checkicon" />
            <h3>Diş təmizliyi</h3>
          </div>
          <h3 className="price">{dentalHygiene}</h3>
        </div>

        <h1>Sərfəli paket</h1>
        <div className="g-package">
          <h4>Hamısı birlikdə</h4>
          <h3 className="price">{fullPacket}</h3>
        </div>
      </div>
    </div>
  );
};

export default GroomingTabs;
