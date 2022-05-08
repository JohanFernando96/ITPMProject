//importing models
import Report from "../model/report.model.js";

//############ getReports ###############
export const getReports = async (request, response) => {
  try {
    //testing
    //res.send("get report is working on /");
    let reports = await Report.find(); // Report is class
    response.json(reports);
  } catch (error) {
    response.json({ message: error.message });
  }
};
//############ getReports by id ###############
export const getReportById = async (request, response) => {
  try {
    const id = request.params.id;
    const report = await Report.findById(id); // Report is class
    response.json(report); // again sending it as response
  } catch (error) {
    response.json({ message: error.message });
  }
};

//############ Add report ###############
export const addReport = async (request, response) => {
  try {
    //testing
    //res.send("add report is working on /reports/add");
    const report = request.body; // read from api and pass as param to class
    const newReport = new Report(report); // indirectly we are checking the shema as well

    await newReport.save(); // save is asyncronous
    response.json(newReport);
  } catch (error) {
    response.json({ message: error.message });
  }
};

//############ edit report by id ###############
export const editReportById = async (request, response) => {
  try {
    const report = request.body;
    const editedReport = new Report(report);

    const response = await Report.updateOne(
      { _id: request.params.id },
      editedReport
    ); // filter , tobeeditedPart
    response.json(editedReport);
  } catch (error) {
    response.json({ message: error.message });
  }
};

//############ delete by id ###############
export const deleteReport = async (request, response) => {
  try {
    await Report.deleteOne({ _id: request.params.id });
    response.json("selected report deleted sucessfully");
  } catch (error) {
    response.json({ message: error.message });
  }
};
