import React, { Component } from "react";
import DSSanPham from "./DSSanPham";
import ModalSanPham from "./ModalSanPham";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class PhoneDashboard extends Component {
  render() {
    return (
      <div className="container d-flex flex-column align-items-center py-3">
        <h1 className="text-success my-3">Bài tập giỏ hàng</h1>
        <ModalSanPham />

        <DSSanPham />

        <SanPhamChiTiet />
      </div>
    );
  }
}
