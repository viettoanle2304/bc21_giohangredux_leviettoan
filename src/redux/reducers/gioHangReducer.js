import { modelDataPhone } from "../../models/modelDataPhone";
import { THEM_GIAM_GIO_HANG, XEM_CHI_TIET } from "../../utils/constants";

let initialState = {
  dsspDienThoai: modelDataPhone,
  spChiTiet: modelDataPhone[0],
  gioHang: [],
  tongSoLuong: 0,
};

export const gioHangReducer = (state = initialState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET: {
      //   console.log(action.payload);
      let index = state.dsspDienThoai.findIndex(
        (sp) => sp.maSP === action.payload.maSP
      );

      if (index !== -1) {
        state.spChiTiet = action.payload;
        return { ...state };
      } else {
        return state;
      }
    }
    case THEM_GIAM_GIO_HANG: {
      const gioHang = state.dsspDienThoai.reduce(
        (memo, sp) => {
          if (sp.maSP === action.payload.idSP) {
            let index = state.gioHang.findIndex(
              (sp) => sp.maSP === action.payload.idSP
            );

            if (index === -1) {
              return memo.concat({ ...sp, soLuong: 1 });
            } else {
              let soLuongMoi =
                state.gioHang[index].soLuong + action.payload.giaTri;
              if (soLuongMoi <= 0) {
                return [...memo.slice(0, index), ...memo.slice(index + 1)];
              } else {
                return [
                  ...memo.slice(0, index),
                  { ...sp, soLuong: soLuongMoi },
                  ...memo.slice(index + 1),
                ];
              }
            }
          } else return memo;
        },
        [...state.gioHang]
      );
      console.log(gioHang);

      state.gioHang = gioHang;
      state.tongSoLuong = gioHang.reduce((tong, sp) => tong + sp.soLuong, 0);

      return { ...state };
    }
    default:
      return state;
  }
};
