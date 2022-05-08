import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// dependencies
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.min.css";
import "jquery/dist/jquery.js";

// components
import Navbar from "./components/common/Navbar";
import Home from "./components/common/Home";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/NotFound";

//Reports
import ReportMain from "./components/reports/ReportMain";

//Donations
import DonationsAdminView from "./components/donation/DonationsAdminView";
import DonationsUserView from "./components/donation/DonationsUserView";
import EditDonation from "./components/donation/EditDonation";
import AddDonation from "./components/donation/AddDonation";
import DonationReport from "./components/donation/DonationReport";

//Feedbacks
import FeedbacksAdminView from "./components/feedback/FeedbacksAdminView";
import EditFeedback from "./components/feedback/EditFeedback";
import AddFeedback from "./components/feedback/AddFeedback";
import FeedbackReport from "./components/feedback/FeedbackReport";

//volunteer
import VolunteerAdminView from "./components/volunteer/VolunteerAdminView";
import VolunteerUserView from "./components/volunteer/VolunteerUserView";
import VolunteerEdit from "./components/volunteer/VolunteerEdit";
import VolunteerRegistration from "./components/volunteer/VolunteerRegistration";
import VolunteerReport from "./components/volunteer/VolunteerReport";

//Awareness
import AwarenessAdmin from "./components/awareness/AwarenessAdmin.jsx";
import AwarenessEdit from "./components/awareness/AwarenessEdit.jsx";
import AwarenessCreate from "./components/awareness/AwarenessCreate.jsx";
import AwarenessUser from "./components/awareness/AwarenessUser.jsx";
import AwarenessUserPost from "./components/awareness/AwarenessUserPost.jsx";
import AwarenessReport from "./components/awareness/AwarenessReport.jsx";
import AwarenessReportGeneration from "./components/awareness/AwarenessReportGeneration.jsx";

//Admin
import adminlogin from "./components/admin/adminlogin.jsx";
import register from "./components/admin/register.jsx";
import Admindeatails from "./components/admin/AdminDeatails";
import adminupdate from "./components/admin/adminupdate";

//Inventories
import InventoriesAdminView from "./components/inventory/InventoriesAdminView";
import InventoriesUserView from "./components/inventory/InventoriesUserView";
import EditInventory from "./components/inventory/EditInventory";
import AddInventory from "./components/inventory/AddInventory";
import InventoryReport from "./components/inventory/InventoryReport";
import FeedbacksUserView from "./components/feedback/FeedbacksUserView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* ############  Routing is done here #############  */}
      <Switch>
        {/* ############  Admin DataCollection here #############  */}
        <Route exact path="/DataCollection" component={NotFound} />

        {/* ############  Admin donation here #############  */}
        <Route exact path="/Donations" component={DonationsAdminView} />
        <Route exact path="/Donations/add" component={AddDonation} />
        <Route exact path="/Donations/edit/:id" component={EditDonation} />
        <Route exact path="/Donations/report" component={DonationReport} />

        {/* ############  Admin feedback here #############  */}
        <Route exact path="/Feedbacks" component={FeedbacksAdminView} />
        <Route exact path="/Feedbacks/add" component={AddFeedback} />
        <Route exact path="/Feedbacks/edit/:id" component={EditFeedback} />
        <Route exact path="/Feedbacks/report" component={FeedbackReport} />

        {/* ############  Admin inventory here #############  */}
        <Route exact path="/Inventories" component={InventoriesAdminView} />
        <Route exact path="/Inventories/add" component={AddInventory} />
        <Route exact path="/Inventories/edit/:id" component={EditInventory} />
        <Route exact path="/Inventories/report" component={InventoryReport} />

        {/* ############# Admin volunteer here ##############    */}
        <Route exact path="/volunteer" component={VolunteerAdminView} />
        <Route exact path="/volunteer/add" component={VolunteerRegistration} />
        <Route exact path="/volunteer/edit/:id" component={VolunteerEdit} />
        <Route exact path="/volunteer/report" component={VolunteerReport} />

        {/* ############# Admin Awareness here ############## */}
        <Route exact path="/awareness/admin" component={AwarenessAdmin} />
        <Route exact path="/awareness/AwarenessEdit/edit/:id" component={AwarenessEdit} />
        <Route exact path="/awareness/create" component={AwarenessCreate} />
        <Route exact path="/awareness/report" component={AwarenessReport} />
        <Route exact path="/awareness/ReportGeneration" component={AwarenessReportGeneration} />

        {/* ############# Admin Deatails here ##############    */}
        <Route exact path="/admin/add" component={register} />
        <Route exact path="/admin/" component={adminlogin} />
        <Route exact path="/admin/" component={Admindeatails} />
        <Route exact path="/admin/edit/:id" component={adminupdate} />

        {/* ############  user views here #############  */}
        <Route path="/reports/Report" component={ReportMain} />
        <Route path="/awareness/user" component={AwarenessUser} />
        <Route path="/awareness/post" component={AwarenessUserPost} />
        {/* <Route path="/inventory/Inventory" component={InventoriesUserView} /> */}
        <Route path="/volunteer/Volunteer" component={VolunteerUserView} />
        <Route path="/inventory/Inventory" component={InventoriesUserView} />
        <Route path="/volunteer" component={VolunteerRegistration} />
        <Route path="/feedback/Feedback" component={FeedbacksUserView} />
        <Route path="/feedback" component={AddFeedback} />
        <Route path="/Donations/user" component={DonationsUserView} />
        <Route path="/Downloads" component={NotFound} />
        <Route path="/admin/Dashboard" component={register} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
