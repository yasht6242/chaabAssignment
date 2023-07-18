import React from "react";
import "./Sidebar.css";
import logo from "../../assets/image 1.png";
import dashboard from "../../assets/Category.svg";
import training from "../../assets/Game.png";
import users from "../../assets/Ticket Star.png";
import location from "../../assets/Location.png";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_logo">
        <img src={logo} alt="" />
      </div>
      <div className="sidebar_logo_items_seperator"></div>
      <div className="sidebar_items_container">
        <div className="sidebar_items items_dash">
          <img className="items_images dash_image" src={dashboard} alt="" />
          <div className="sidebar_items_content_name dashboard_name">Dashboard</div>
        </div>
        <div className="sidebar_items_sub_container">
          <div className="sidebar_items">
            <img className="items_images dash_image" src={training} alt="" />
            <div className="sidebar_items_content_name other_color">Training</div>
          </div>
          <div className="sidebar_items">
            <img className="items_images dash_image" src={users} alt="" />
            <div className="sidebar_items_content_name other_color">Users</div>
          </div>
          <div className="sidebar_items">
            <img className="items_images dash_image" src={location} alt="" />
            <div className="sidebar_items_content_name other_color">Analytics</div>
          </div>
          <div className="sidebar_items">
            <img className="items_images dash_image" src={location} alt="" />
            <div className="sidebar_items_content_name other_color">My Account</div>
          </div>
          <div className="sidebar_items">
            <img className="items_images dash_image" src={location} alt="" />
            <div className="sidebar_items_content_name other_color">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
