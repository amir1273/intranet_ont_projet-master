import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import NavigationAdmin from "../../components/NavigationAdmin";

function Dashboard() {
  return (
    <div>
      <Logo />
      <NavigationAdmin />
      <h1>Dashboard Admin</h1>
      <div className="stat-widget-eight">
        <div className="stat-header">
          <div className="header-title pull-left">Daily Visit</div>
        </div>
        <div className="clearfix"></div>
        <div className="stat-content">
          <div className="pull-left">
            <i className="ti-arrow-up color-success"></i>
            <span className="stat-digit"> 14,2158.35</span>
          </div>
          <div className="pull-right">
            <span className="progress-stats">70%</span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="progress">
          <div className="progress-bar progress-bar-primary w-70" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            <span className="sr-only">70% Complete</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
