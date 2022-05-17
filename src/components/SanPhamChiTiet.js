import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamChiTiet extends Component {
  renderedContent = function () {
    const { hinhAnh, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom } =
      this.props.sanPham;

    return (
      <div className="row my-5">
        <div className="col-5">
          <img
            style={{ width: "100%" }}
            src={require(`../assets/${hinhAnh}`)}
            alt=""
          />
        </div>

        <div className="col-6">
          <h2 className="py-2">Thông tin sản phẩm</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  render() {
    return this.renderedContent();
  }
}

const mapStateToProps = (state) => {
  return {
    sanPham: state.appState.spChiTiet,
  };
};

export default connect(mapStateToProps)(SanPhamChiTiet);
