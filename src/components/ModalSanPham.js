import React, { Component } from "react";
import "animate.css";
import { giaTriTang, giaTriGiam } from "../utils/constants";
import { connect } from "react-redux";
import { themGiamGioHang } from "../redux/actions";

class ModalSanPham extends Component {
  state = {
    _isModalOpen: false,
  };

  handleModalOpen = () => {
    this.setState({
      _isModalOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      _isModalOpen: false,
    });
  };

  renderGioHang = () => {
    return this.props.dssp.map((sp) => {
      return (
        <tr key={"id-" + sp.maSP}>
          <td>{sp.maSP}</td>
          <td>
            <img
              src={require(`../assets/${sp.hinhAnh}`)}
              alt={sp.tenSP}
              style={{ height: "80px" }}
            />
          </td>
          <td>{sp.tenSP}</td>
          <td>
            <button
              className="btn btn-primary p-0"
              style={{ width: "30px", height: "30px" }}
              onClick={() => this.props.onTangGiamGioHang(sp.maSP, giaTriTang)}
            >
              +
            </button>
            <span className="mx-1">{sp.soLuong}</span>
            <button
              className="btn btn-primary p-0"
              style={{ width: "30px", height: "30px" }}
              onClick={() => this.props.onTangGiamGioHang(sp.maSP, giaTriGiam)}
            >
              -
            </button>
          </td>
          <td>{sp.giaBan.toLocaleString("vi-VN")}</td>
          <td>{(sp.giaBan * sp.soLuong).toLocaleString("vi-VN")}</td>
        </tr>
      );
    });
  };

  renderContent = () => {
    if (this.state._isModalOpen) {
      return (
        <>
          <div
            className=""
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 98,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(84, 84, 84, 0.8)",
            }}
          ></div>

          <div
            className="animate__animated animate__slideInDown"
            style={{
              position: "absolute",
              top: "5%",
              left: "50%",
              zIndex: "99",
              width: "60vw",
            }}
          >
            <div
              className="bg-white border rounded p-3"
              style={{ position: "relative", left: "-50%" }}
            >
              <h5 className="pb-2">Gi??? h??ng</h5>

              <div className="">
                {this.props.tongSoLuong !== 0 ? (
                  <table className="table">
                    <thead>
                      <tr className="font-weight-bold">
                        <td>M?? s???n ph???m</td>
                        <td>H??nh ???nh</td>
                        <td>T??n s???n ph???m</td>
                        <td>S??? l?????ng</td>
                        <td>????n gi??</td>
                        <td>Th??nh ti???n</td>
                      </tr>
                    </thead>
                    <tbody>{this.renderGioHang()}</tbody>
                  </table>
                ) : (
                  <p className="border-top pt-3 text-danger">
                    B???n hi???n kh??ng c?? s???n ph???m trong gi??? h??ng
                  </p>
                )}
              </div>

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-secondary"
                  onClick={this.handleModalClose}
                >
                  ????ng
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleModalOpen}
        >
          Gi??? h??ng ({this.props.tongSoLuong})
        </button>

        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dssp: state.appState.gioHang,
    tongSoLuong: state.appState.tongSoLuong,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTangGiamGioHang: (idSP, giaTri) => {
      dispatch(themGiamGioHang(idSP, giaTri));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSanPham);
