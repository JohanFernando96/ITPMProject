import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { matchPath } from "react-router";

//componentes imports
import ReportDetail from "./ReportDetail";
import ReportEdit from "./ReportEdit";
import Reports from "./Report";
import ReportCreate from "./ReportCreate";
import ReportAdmin from "./ReportAdmin";
import PrintReport from "./PrintReport";

export default function ReportMain() {
  // testing

  const match = matchPath("/reports/Report/ReportDetail", {
    path: "/reports/Report/ReportDetail",
    exact: true,
    strict: false,
  });
  let { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={`${path}`} component={Reports} />
        <Route path={`${path}/ReportDetail/:id`} component={ReportDetail} />
        <Route path={`${path}/ReportCreate`} component={ReportCreate} />
        <Route path={`${path}/ReportAdmin`} component={ReportAdmin} />
        <Route path={`${path}/PrintReport`} component={PrintReport} />
        <Route path={`${path}/ReportEdit/edit/:id`} component={ReportEdit} />
      </Switch>
    </React.Fragment>
  );
}
