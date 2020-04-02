import React, { Component } from "react";

const s8 = {
  marginTop: "13px"
};

const s25 = {
  marginTop: "17px",
  marginBottom: "7px",
  paddingLeft: "12px",
  Height: "38px",
  paddingBottom: "7px",
  width: "100%",
  paddingRight: "19px"
};

const s28 = {
  flex: "1"
};

const s26 = {
  width: "100%"
};

const s50 = {
  marginLeft: "15px"
};

const s61 = {
  marginTop: "7px",
  marginLeft: "0px",
  marginBottom: "7px",
  width: "100%",
  paddingLeft: "12px",
  height: "38px"
};

const s70 = {
  width: "100%",
  marginTop: "7px",
  marginBottom: "7px",
  paddingLeft: "14px",
  height: "38px"
};

const s86 = {
  marginBottom: "17px",
  marginTop: "7px",
  width: "261px"
};

const s98 = {
  backgroundColor: "#dfdfdf",
  padding: "7px",
  marginBottom: "11px"
};

const s106 = {
  marginBottom: "0px"
};

const s115 = {
  width: "100px",
  height: "16px",
  color: "rgb(5,5,5)"
};

const s125 = {
  fontSize: "14px",
  color: "rgb(0,0,0)"
};
const s9 = {
  marginTop: "15px"
};

const s130 = {
  width: "261px",
  height: "38px",
  paddingLeft: "10px"
};

const s154 = {
  marginLeft: "11px"
};

class Notringtone extends Component {
  render() {
    return (
      <div>
        <h3 class="text-dark mb-1">Manage Notification Ringtone</h3>
        <div class="row" style={s8}>
          <div class="col d-flex d-lg-flex flex-column justify-content-center align-items-center justify-content-lg-center">
            <form
              class="form-inline d-flex flex-row flex-fill justify-content-start"
              style={s26}
            >
              <div class="form-group d-inline mb-2" style={s28}>
                <input
                  class="border rounded form-control d-xl-flex"
                  type="text"
                  placeholder="Search Category"
                  style={s25}
                />
              </div>
              <div class="form-group">
                <button class="btn btn-success" type="button" style={s50}>
                  + New
                </button>
              </div>
            </form>
            <div class="form-group" style={s26}>
              <input
                class="border rounded d-flex flex-grow-1"
                type="text"
                placeholder="Notification Ringtone Name"
                style={s61}
              />
              <input
                class="border rounded"
                type="text"
                style={s70}
                placeholder="Author"
              />
            </div>
            <button class="btn btn-primary" type="button" style={s86}>
              + Notification RingtoneS
            </button>
            <div class="border rounded" style={s98}>
              <div class="form-check" style={s106}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="formCheck-1"
                  style={s125}
                />
                <label class="form-check-label" for="formCheck-1" style={s115}>
                  Is Popular
                </label>
              </div>
            </div>
          </div>
          <div class="col">
            <div style={s9}>
              <input
                class="border rounded border-dark"
                type="text"
                style={s130}
                placeholder="Search Popular"
              />
              <button
                class="btn btn-success"
                type="button"
                style={s154}
                disabled=""
              >
                + New
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notringtone;
