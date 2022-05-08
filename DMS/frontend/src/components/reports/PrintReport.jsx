import ReactDOM from "react-dom";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ReportGeneration from "./ReportGeneration";

const PrintReport = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="container">
      <div className="bg-gray-200 p-6">
        <button
          type="button"
          className="bg-gray-500 border border-gray-500 p-2 mb-4"
          onClick={handlePrint}
        >
          {" "}
          Print Report{" "}
        </button>
      </div>
      <ReportGeneration ref={componentRef} />
    </div>
  );
};

export default PrintReport;
