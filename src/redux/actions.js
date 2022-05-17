import { THEM_GIAM_GIO_HANG, XEM_CHI_TIET } from "../utils/constants";

export const xemChiTiet = (sp) => ({
  type: XEM_CHI_TIET,
  payload: sp,
});

export const themGiamGioHang = (idSP, giaTri) => ({
  type: THEM_GIAM_GIO_HANG,
  payload: { idSP, giaTri },
});
