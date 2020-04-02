import React, { Component } from "react";
import Wallpaper from "../partials/wallpaper";
import Ringtone from "../partials/ringtone";
import Notringtone from "../partials/notringtone";

const nav = {
  color: "rgb(245,245,247)",
  saturate: "(104%)"
};
const wall = {
  filter: "brightness(146%)",
  fontSize: "20px"
};

const s84 = {
  marginLeft: "246px"
};

const s34 = {
  marginLeft: "10px"
};

class AdminMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NavIndex: 0
    };
  }
  NavArray = [<Wallpaper />, <Ringtone />, <Notringtone />];

  render() {
    return (
      <div>
        <div id="wrapper">
          <nav
            class="navbar navbar-dark fixed-top align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
            style={nav}
          >
            <div class="container-fluid d-flex flex-column p-0" style={s34}>
              <a
                class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                href="#"
              >
                <div class="sidebar-brand-icon rotate-n-15">
                  <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">
                  <span style={s34}>Brand</span>
                </div>
              </a>
              <hr class="sidebar-divider my-0" />
              <ul class="nav navbar-nav text-light" id="accordionSidebar">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" href="index.html">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                  </a>
                  <a
                    class="nav-link"
                    href="wallpaper.html"
                    onClick={() => {
                      this.setState({
                        NavIndex: 0
                      });
                    }}
                  >
                    <i class="fa fa-trello"></i>
                    <span style={wall}>Wallpaper</span>
                  </a>
                  <a
                    class="nav-link"
                    href="wallpaper.html"
                    onClick={() => {
                      this.setState({
                        NavIndex: 1
                      });
                    }}
                  >
                    <i class="fa fa-trello"></i>
                    <span style={wall}>Ringtone</span>
                  </a>
                  <a
                    class="nav-link"
                    href="wallpaper.html"
                    onClick={() => {
                      this.setState({
                        NavIndex: 2
                      });
                    }}
                  >
                    <i class="fa fa-trello"></i>
                    <span style={wall}>Notification Ringtone </span>
                  </a>
                </li>
                <li class="nav-item" role="presentation"></li>
                <li class="nav-item" role="presentation"></li>
              </ul>
            </div>
          </nav>
          <div className="flex-column" id="content-wrapper" style={s84}>
            <div id="content">
              <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div class="container-fluid">
                  <button
                    class="btn btn-link d-md-none rounded-circle mr-3"
                    id="sidebarToggleTop"
                    type="button"
                  >
                    <i class="fas fa-bars"></i>
                  </button>
                  <ul class="nav navbar-nav flex-nowrap ml-auto">
                    <li class="nav-item dropdown d-sm-none no-arrow">
                      <a
                        class="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        href="#"
                      >
                        <i class="fas fa-search"></i>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                        role="menu"
                        aria-labelledby="searchDropdown"
                      >
                        <form class="form-inline mr-auto navbar-search w-100">
                          <div class="input-group">
                            <input
                              class="bg-light form-control border-0 small"
                              type="text"
                              placeholder="Search for ..."
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-primary py-0"
                                type="button"
                              >
                                <i class="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li
                      class="nav-item dropdown no-arrow mx-1"
                      role="presentation"
                    >
                      <div class="nav-item dropdown no-arrow">
                        <a
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          href="#"
                        ></a>
                        <div
                          class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                          role="menu"
                        >
                          <h6 class="dropdown-header">alerts center</h6>
                          <a
                            class="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div class="mr-3">
                              <div class="bg-primary icon-circle">
                                <i class="fas fa-file-alt text-white"></i>
                              </div>
                            </div>
                            <div>
                              <span class="small text-gray-500">
                                December 12, 2019
                              </span>
                              <p>A new monthly report is ready to download!</p>
                            </div>
                          </a>
                          <a
                            class="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div class="mr-3">
                              <div class="bg-success icon-circle">
                                <i class="fas fa-donate text-white"></i>
                              </div>
                            </div>
                            <div>
                              <span class="small text-gray-500">
                                December 7, 2019
                              </span>
                              <p>
                                $290.29 has been deposited into your account!
                              </p>
                            </div>
                          </a>
                          <a
                            class="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div class="mr-3">
                              <div class="bg-warning icon-circle">
                                <i class="fas fa-exclamation-triangle text-white"></i>
                              </div>
                            </div>
                            <div>
                              <span class="small text-gray-500">
                                December 2, 2019
                              </span>
                              <p>
                                Spending Alert: We've noticed unusually high
                                spending for your account.
                              </p>
                            </div>
                          </a>
                          <a
                            class="text-center dropdown-item small text-gray-500"
                            href="#"
                          >
                            Show All Alerts
                          </a>
                        </div>
                      </div>
                    </li>
                    <li
                      class="nav-item dropdown no-arrow mx-1"
                      role="presentation"
                    >
                      <div class="nav-item dropdown no-arrow">
                        <a
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          href="#"
                        ></a>
                        <div
                          class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                          role="menu"
                        >
                          <h6 class="dropdown-header">alerts center</h6>
                          <a
                            class="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div class="dropdown-list-image mr-3">
                              <img
                                class="rounded-circle"
                                src="assets/img/avatars/avatar4.jpeg"
                              />
                              <div class="bg-success status-indicator"></div>
                            </div>
                            <div class="font-weight-bold">
                              <div class="text-truncate">
                                <span>
                                  Hi there! I am wondering if you can help me
                                  with a problem I've been having.
                                </span>
                              </div>
                              <p class="small text-gray-500 mb-0">
                                Emily Fowler - 58m
                              </p>
                            </div>
                          </a>
                          <a
                            class="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div class="dropdown-list-image mr-3">
                              <img
                                class="rounded-circle"
                                src="assets/img/avatars/avatar2.jpeg"
                              />
                              <div class="status-indicator"></div>
                            </div>
                            <div class="font-weight-bold">
                              <div class="text-truncate">
                                <span>
                                  I have the photos that you ordered last month!
                                </span>
                              </div>
                              <p class="small text-gray-500 mb-0">
                                Jae Chun - 1d
                              </p>
                            </div>
                          </a>
                          <a
                            class="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div class="dropdown-list-image mr-3">
                              <img
                                class="rounded-circle"
                                src="assets/img/avatars/avatar3.jpeg"
                              />
                              <div class="bg-warning status-indicator"></div>
                            </div>
                            <div class="font-weight-bold">
                              <div class="text-truncate">
                                <span>
                                  Last month's report looks great, I am very
                                  happy with the progress so far, keep up the
                                  good work!
                                </span>
                              </div>
                              <p class="small text-gray-500 mb-0">
                                Morgan Alvarez - 2d
                              </p>
                            </div>
                          </a>
                          <a
                            class="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div class="dropdown-list-image mr-3">
                              <img
                                class="rounded-circle"
                                src="assets/img/avatars/avatar5.jpeg"
                              />
                              <div class="bg-success status-indicator"></div>
                            </div>
                            <div class="font-weight-bold">
                              <div class="text-truncate">
                                <span>
                                  Am I a good boy? The reason I ask is because
                                  someone told me that people say this to all
                                  dogs, even if they aren't good...
                                </span>
                              </div>
                              <p class="small text-gray-500 mb-0">
                                Chicken the Dog · 2w
                              </p>
                            </div>
                          </a>
                          <a
                            class="text-center dropdown-item small text-gray-500"
                            href="#"
                          >
                            Show All Alerts
                          </a>
                        </div>
                      </div>
                      <div
                        class="shadow dropdown-list dropdown-menu dropdown-menu-right"
                        aria-labelledby="alertsDropdown"
                      ></div>
                    </li>
                    <div class="d-none d-sm-block topbar-divider"></div>
                    <li class="nav-item dropdown no-arrow" role="presentation">
                      <div class="nav-item dropdown no-arrow">
                        <a
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          href="#"
                        >
                          <span class="d-none d-lg-inline mr-2 text-gray-600 small">
                            Valerie Luna
                          </span>
                          <img
                            class="border rounded-circle img-profile"
                            src="assets/img/avatars/avatar1.jpeg"
                          />
                        </a>
                        <div
                          class="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                          role="menu"
                        >
                          <a class="dropdown-item" role="presentation" href="#">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            &nbsp;Profile
                          </a>
                          <a class="dropdown-item" role="presentation" href="#">
                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            &nbsp;Settings
                          </a>
                          <a class="dropdown-item" role="presentation" href="#">
                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            &nbsp;Activity log
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" role="presentation" href="#">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            &nbsp;Logout
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div class="container-fluid">
                {this.NavArray[this.state.NavIndex]}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminMaster;
