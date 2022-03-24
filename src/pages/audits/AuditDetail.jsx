import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailTraining from "../../pages/training/DetailTraining";
import { useParams } from "react-router-dom";
import AuditList from "../../components/component_audit/AuditList";
import DocPdf from "../../components/pdf/DocPdf";

const AuditDetail = () => {
  const [audit, setAudit] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/training/training/${params.title}`)
      .then((res) => res.data)
      .then((data) => setAudit(data));
  }, [params.title]);

  console.log(audit);

  return (
    <div>
      <AuditList />
      <div>
        <DocPdf formation={audit} />
        {/* <DetailTraining formation={audit} /> */}
      </div>
    </div>
  );
};

export default AuditDetail;
