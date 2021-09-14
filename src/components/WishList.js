import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/wishList.css";

export function WishList() {
  return (
    <>
      <main>
        {/* Danh sách các sản phẩm được yêu thích */}
        <section className=" cart-container   container ">
          <div className="cart-title">
            <span>
              {" "}
              SẢN PHẨM&nbsp;
              <div className="cart-title-number-items">
                <small>(3)</small>
              </div>{" "}
            </span>
            <span> TÊN SẢN PHẨM</span>
            <span>ĐƠN GIÁ</span>
            <span>SỐ LƯỢNG</span>
            <span>THÀNH TIỀN</span>
            <span style={{ display: "none" }}>
              {" "}
              <input type="checkbox" defaultValue />{" "}
            </span>
            {/* nhầm */}
            <span style={{ display: "none" }}>
              {" "}
              <i className="fas fa-trash-alt" />{" "}
            </span>
          </div>
          <div className="cart-items">
            {/* 1 */}
            <div className="cart-item">
              {/* Ảnh sản phẩm */}
              <span className=" cart-item-product-image ">
                <Link to="/wishList">
                  <img src="https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/Subwoofer-PCS-318NB.png"
                    alt="cartImage"
                  />
                </Link>
              </span>
              {/* Tên sản phẩm */}
              <span>PCS 318NB</span>
              {/* Đơn giá */}
              <span>65.200.000đ</span>
              {/* Chỉnh số lượng sp */}
              <span className="custom-number">
                <i className="fas fa-minus" />
                <input
                  className="custom-number-input"
                  type="text"
                  defaultValue={1}
                />
                <i className="fas fa-plus" />
              </span>
              {/* Thành tiền */}
              <span>65.200.000đ</span>
              {/* Thêm phẩm đó vào giỏ hàng */}
              <span className=" wishlist-button-cart " type="button">
                <i className="fas fa-cart-arrow-down" />
              </span>
              {/* icon thùng rác xóa đơn */}
              <span
                className=" delete-one "
                type="button"
                onclick="deleteOneItem()"
              >
                {" "}
                <i className="fas fa-trash-alt " />{" "}
              </span>
            </div>{" "}
            {/* cart-item */}
            {/* 2 */}
            <div className="cart-item">
              {/* Ảnh sản phẩm */}
              <span className=" cart-item-product-image ">
                <Link to="/wishList">
                  <img
                    src="https://nguyenkeo.github.io/MasterAudio/img/nexo/nexo-ls18.jpg"
                    alt="cartImage"
                  />
                </Link>
              </span>
              {/* Tên sản phẩm */}
              <span>PCS 218NB</span>
              {/* Đơn giá */}
              <span>33.000.000đ</span>
              {/* Chỉnh số lượng sp */}
              <span className="custom-number">
                <i className="fas fa-minus" />
                <input
                  className="custom-number-input"
                  type="text"
                  defaultValue={2}
                />
                <i className="fas fa-plus" />
              </span>
              {/* Thành tiền */}
              <span>66.000.000đ</span>
              {/* Thêm phẩm đó vào giỏ hàng */}
              <span className=" wishlist-button-cart " type="button">
                <i className="fas fa-cart-arrow-down" />
              </span>
              {/* icon thùng rác xóa đơn */}
              <span
                className=" delete-one "
                type="button"
                onclick="deleteOneItem()"
              >
                {" "}
                <i className="fas fa-trash-alt " />{" "}
              </span>
            </div>{" "}
            {/* cart-item */}
            {/* 3 */}
            <div className="cart-item">
              {/* Ảnh sản phẩm */}
              <span className=" cart-item-product-image ">
                <Link to="/wishList">
                  <img
                    src="https://nguyenkeo.github.io/MasterAudio/img/amate/amate-X218WF.png"
                    alt="cartImage"
                  />
                </Link>
              </span>
              {/* Tên sản phẩm */}
              <span>PCS 118NB</span>
              {/* Đơn giá */}
              <span>22.500.000đ</span>
              {/* Chỉnh số lượng sp */}
              <span className="custom-number">
                <i className="fas fa-minus" />
                <input
                  className="custom-number-input"
                  type="text"
                  defaultValue={3}
                />
                <i className="fas fa-plus" />
              </span>
              {/* Thành tiền */}
              <span>67.500.000đ</span>
              {/* Thêm phẩm đó vào giỏ hàng */}
              <span className=" wishlist-button-cart " type="button">
                <i className="fas fa-cart-arrow-down" />
              </span>
              {/* icon thùng rác xóa đơn */}
              <span
                className=" delete-one "
                type="button"
                onclick="deleteOneItem()"
              >
                {" "}
                <i className="fas fa-trash-alt " />{" "}
              </span>
            </div>{" "}
            {/* cart-item */}
          </div>
          {/* cart-items */}
          <div className=" cart-button-buy-delete-all ">
            <a href="./cart.html">
              {" "}
              <span className="button-buy" type="button">
                {" "}
                ĐẾN TRANG GIỎ HÀNG{" "}
              </span>{" "}
            </a>
            <span
              className="button-delete-all"
              type="button"
              onclick="deleteAllItem()"
            >
              {" "}
              XÓA TOÀN BỘ{" "}
            </span>
          </div>
        </section>{" "}
        {/* wish-list */}
      </main>
    </>
  );
}
