import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AwarenessReportGeneration from "./AwarenessReportGeneration";

const AwarenessReport = () => {
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
      <AwarenessReportGeneration ref={componentRef} />
    </div>
  );
}; 

export default AwarenessReport;
