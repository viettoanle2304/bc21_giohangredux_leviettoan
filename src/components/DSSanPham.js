import React, { Component } from "react";
import { connect } from "react-redux";
import SanPham from "./SanPham";

class DSSanPham extends Component {
  render() {
    return (
      <div className="row">
        {this.props.dssp?.map((sp) => {
          return <SanPham key={sp.maSP} sanPham={sp} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dssp: state.appState.dsspDienThoai,
  };
};

export default connect(mapStateToProps)(DSSanPham);
