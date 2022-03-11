import React from "react";
import AuditList from "../../components/component_audit/AuditList";
import Training from "../training/Training";
import "./Audits.css";

const Audits = () => {
  return (
    <div className="Audits">
      <AuditList />
      <Training />
    </div>
  );
};

export default Audits;
