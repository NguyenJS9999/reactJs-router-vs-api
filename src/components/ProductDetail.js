import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ProductDetail.css";

function Breadcrumb() {
  return (
    <div className="breadcrumb-container     container-fluid ">
      <div className=" breadcrumb-content container ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/product">SẢN PHẨM</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              CHI SẢN PHẨM
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export function ProductDetail() {
  // Mảng data các { item }
  const [stateProducts, setProducts] = useState([]);
  const [stateIsLoading, setIsLoading] = useState(true);

  // Lấy chuỗi params
  let { slug } = useParams(); console.log("Lấy url là text:", slug);
  // Lấy id params
  let { id } = useParams(); console.log("Lấy id là số:", id);
  

  // Lấy về mảng các {} t ừ API
  useEffect(() => {
    fetch(
      ` https://rest-api-nodejs-reactjs-router.herokuapp.com/products/${id} `
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(".then trả về data products:", result);
        setProducts(result);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Breadcrumb />

      {stateIsLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <main>
          <section className=" product-detail-image-buy-container   container ">
            {/* 1 product-detail-image-buy */}
            <div className=" product-detail-image ">
              {/* Nội dung ảnh chính to được trỏ đến từ ảnh nhỏ - đã xóa/hoặc để ( show active ) */}
              <div className="tab-content" id="myTabContent">
                {/* 1 */}
                <div
                  className="tab-pane fade show    active  "
                  id="product-detail-image-01"
                  role="tabpanel"
                  aria-labelledby="product-detail-image-01-tab"
                >
                  <div className=" product-image ">
                    {/* <img src="https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-01.png" alt="chi tiết sản phẩm" /> */}
                    <img
                      src={stateProducts.productImage}
                      alt="chi tiết sản phẩm"
                    />
                  </div>
                </div>

                {/* 2 */}
                <div
                  className="tab-pane fade "
                  id="product-detail-image-02"
                  role="tabpanel"
                  aria-labelledby="product-detail-image-02-tab"
                >
                  <div className=" product-image ">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-02.png"
                      alt="chi tiết sản phẩm"
                    />
                  </div>
                </div>
                {/* 3 */}
                <div
                  className="tab-pane fade "
                  id="product-detail-image-03"
                  role="tabpanel"
                  aria-labelledby="product-detail-image-03-tab"
                >
                  <div className=" product-image ">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-03.png"
                      alt="chi tiết sản phẩm"
                    />
                  </div>
                </div>
                {/* 4 */}
                <div
                  className="tab-pane fade "
                  id="product-detail-image-04"
                  role="tabpanel"
                  aria-labelledby="product-detail-image-04-tab"
                >
                  <div className=" product-image ">
                    <img
                      src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-04.png "
                      alt="chi tiết sản phẩm"
                    />
                  </div>
                </div>
                {/* 5 */}
                <div
                  className="tab-pane fade "
                  id="product-detail-image-05"
                  role="tabpanel"
                  aria-labelledby="product-detail-image-05-tab"
                >
                  <div className=" product-image ">
                    <img
                      src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-05.png  "
                      alt="chi tiết sản phẩm"
                    />
                  </div>
                </div>
                {/* 6 */}
                <div
                  className="tab-pane fade "
                  id="product-detail-image-06"
                  role="tabpanel"
                  aria-labelledby="product-detail-image-06-tab"
                >
                  <div className=" product-image ">
                    <img
                      src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-06.png  "
                      alt="chi tiết sản phẩm"
                    />
                  </div>
                </div>
                {/* 7 */}
                <div
                  className="tab-pane fade "
                  id="product-detail-image-07"
                  role="tabpanel"
                  aria-labelledby="product-detail-image-07-tab"
                >
                  <div className=" product-image ">
                    <img
                      src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-07.png  "
                      alt="chi tiết sản phẩm"
                    />
                  </div>
                </div>
              </div>
              {/* Các ảnh khác thu nhỏ đã xóa ( nav-item và nav-link ) */}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {/* 1 */}
                <li className="  " role="presentation">
                  <span
                    className="  nav-link   active   "
                    id="product-detail-image-01-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#product-detail-image-01"
                    type="button"
                    role="tab"
                    aria-controls="product-detail-image-01"
                    aria-selected="true"
                  >
                    <div className="images-other" id="   ">
                      <img
                        src="https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-01.png"
                        alt="chi tiết sản phẩm"
                      />
                    </div>
                  </span>
                </li>

                {/* 2 */}
                <li className="  " role="presentation">
                  <span
                    className=" nav-link  "
                    id="product-detail-image-02-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#product-detail-image-02"
                    type="button"
                    role="tab"
                    aria-controls="product-detail-image-02"
                    aria-selected="true"
                  >
                    <div className="images-other">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-02.png "
                        alt="chi tiết sản phẩm"
                      />
                    </div>
                  </span>
                </li>
                {/* 3 */}
                <li className="  " role="presentation">
                  <span
                    className=" nav-link  "
                    id="product-detail-image-03-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#product-detail-image-03"
                    type="button"
                    role="tab"
                    aria-controls="product-detail-image-03"
                    aria-selected="true"
                  >
                    <div className="images-other">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-03.png "
                        alt="chi tiết sản phẩm"
                      />
                    </div>
                  </span>
                </li>
                {/* 4 */}
                <li className="  " role="presentation">
                  <span
                    className=" nav-link  "
                    id="product-detail-image-04-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#product-detail-image-04"
                    type="button"
                    role="tab"
                    aria-controls="product-detail-image-04"
                    aria-selected="true"
                  >
                    <div className="images-other">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-04.png "
                        alt="chi tiết sản phẩm"
                      />
                    </div>
                  </span>
                </li>
                {/* 5 */}
                <li className="  " role="presentation">
                  <span
                    className=" nav-link  "
                    id="product-detail-image-05-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#product-detail-image-05"
                    type="button"
                    role="tab"
                    aria-controls="product-detail-image-05"
                    aria-selected="true"
                  >
                    <div className="images-other">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-05.png "
                        alt="chi tiết sản phẩm"
                      />
                    </div>
                  </span>
                </li>
                {/* 6 */}
                <li className="  " role="presentation">
                  <span
                    className=" nav-link  "
                    id="product-detail-image-06-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#product-detail-image-06"
                    type="button"
                    role="tab"
                    aria-controls="product-detail-image-06"
                    aria-selected="true"
                  >
                    <div className="images-other">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-06.png "
                        alt="chi tiết sản phẩm"
                      />
                    </div>
                  </span>
                </li>
                {/* 7 */}
              </ul>
              {/* Các ảnh khác thu nhỏ */}
            </div>
            {/* product-detail-image - Ảnh sp chi tiết và các ảnh nhỏ */}
            <div className=" product-detail-buy ">
              {/* 1 */}
              <div className="product-name-code">
                <div className="product-name-detail ">
                  {stateProducts.productBrand}
                </div>
                <div className="product-code-detail ">
                  {stateProducts.productName}{" "}
                </div>
                <b>Đơn giá 1 chiếc chưa bao gồm VAT</b>
                <div className="product-price-detail ">
                  {stateProducts.productPrice.toLocaleString()} ₫
                </div>
              </div>
              <div className="bottom-line" />
              {/* 2 */}
              <div className="product-status-amount">
                <div className="product-status-detail ">
                  Tình trạng: 
                  <span>Còn hàng</span>
                </div>
                <div className="product-amount-detail ">
                  <b>Số lượng:</b>
                  <span className="custom-number">
                    <i className="fas fa-minus" />
                    <input
                      className="custom-number-input"
                      type="text"
                      defaultValue={stateProducts.productQuantity}
                    />
                    <i className="fas fa-plus" />
                  </span>
                  <span className="like-product">
                    <i className="like far fa-heart" />
                  </span>
                </div>
                {/* Nút bấm thêm vào giở hàng - mua */}
                <div className="button-cart-buy">
                  <div className="button-cart" type="button">
                    <i className="fas fa-cart-arrow-down" /> Thêm vào giỏ hàng
                  </div>
                  <a href=".../cart.html">
                    <div className="button-buy" type="button">
                      <i className="fas fa-coins" />
                      &nbsp;Mua ngay
                    </div>
                  </a>
                </div>
              </div>
              <div className="bottom-line" />
              {/* 3*/}
              <div className="product-detail-phone-contact">
                <strong className="phone-contact-title">Liên hệ</strong>
                <div>
                  {" "}
                  <strong>KINH DOANH 1: </strong> <span>0988 360 149</span>{" "}
                </div>
                <div>
                  {" "}
                  <strong>KINH DOANH 2: </strong> <span>0777 891 992</span>{" "}
                </div>
                <div>
                  {" "}
                  <strong>KINH DOANH 3: </strong> <span>0942 97 96 96</span>{" "}
                </div>
              </div>
            </div>{" "}
            {/* product-detail-buy */}
          </section>
          {/* 2 Mô tả sản phẩm - product-description-container */}
          <section className=" product-description-container   container">
            <div className="product-description">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    style={{
                      borderColor:
                        "rgba(208,208,208, 0.5) rgba(208,208,208, 0.5) rgba(208,208,208, 0) rgba(208,208,208, 0.5)",
                    }}
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    GIỚI THIỆU SẢN PHẨM
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    style={{
                      borderColor:
                        "rgba(208,208,208, 0.5) rgba(208,208,208, 0.5) rgba(208,208,208, 0) rgba(208,208,208, 0.5)",
                    }}
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    THÔNG SỐ KĨ THUẬT
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    style={{
                      borderColor:
                        "rgba(208,208,208, 0.5) rgba(208,208,208, 0.5) rgba(208,208,208, 0) rgba(208,208,208, 0.5)",
                    }}
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    ẢNH SẢN PHẨM
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {/* 1 GIỚI THIỆU SẢN PHẨM */}
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p className="product-description-text"></p>
                  <div className=" product-description-img ">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-08.png"
                      alt="description-img"
                    />
                  </div>
                  Loa Subwoofer PCS-318NB là dòng loa sub 3 được hãng loa 4
                  Acoustic thiết kế với kích thước và công suất rất lớn lên tới
                  4500W. Chính vì vậy, sản phẩm phù hợp để lắp đặt cho dàn âm
                  thanh cố định có không gian rộng như hội trường, bar, sân khấu
                  biểu diễn, phòng karaoke chuyên nghiệp,...
                  <br />
                  <br />
                  Đánh giá thiết kế loa sub Loa Sub PCS-318NB.
                  <br />
                  <br />
                  Thiết kế đẹp mắt với kiểu dáng đa năng hình chữ nhật có thể để
                  đứng hoặc nằm ngang từ vào không gian công trình. Thùng loa
                  như những sản phẩm cao cấp đến từ hãng loa Đức là từ gỗ ép
                  bạch dương cao cấp,cực kì chắn chắn nên độ bền và chất âm luôn
                  được đảm bảo tốt nhất. Bề mặt được phủ lớp sơn đen sần đẹp mắt
                  và tôn lên vẻ sang trọng cho sản phẩm.
                  <br />
                  <br />
                  Tấm ê căng bằng thép không gỉ bao phủ bề mặt trước của sản
                  phẩm Loa Sub PCS-318NB nhằm bảo vệ hệ thống linh kiện bên
                  trong khỏi những tác động tư bên ngoài, đồng thời tăng tính
                  thẩm mỹ cho loa.
                  <br />
                  <br />
                  Mặt sau của loa gồm những cổng kết nối và một số chi tiết kỹ
                  thuật khác được bố trí khoa học và thuận tiện cho việc đấu nối
                  loa.
                  <br />
                  <br />
                  Đánh giá chất lượng loa Sub PCS-318NB
                  <br />
                  <br />
                  Được trang bị "hàng khủng" với 3 củ loa bass 50 cm sử dụng nam
                  châm Neodymium mang đến chất âm tuyệt hay, chắc nịch nhưng đôi
                  lúc lại sâu lắng thích hợp với nhiều thể loại nhạc từ trữ tình
                  đến nhạc sàn, remix cực mạnh.
                  <br />
                  <br />
                  Được trang bị công suất Min là 4500W và có thể lên tới 18000W
                  kết hợp với độ nhạy 101 dB sẽ đáp ứng tốt nhu cầu cho những hệ
                  thống âm thanh như bar, sân khấu ngoài trời, karaoke,... - Với
                  3 củ Neodymium cao cấp, mỗi củ loa có công suất AES 1500 watt
                  được lắp đặt trong một thùng lớn chỉ 500x1200x700 mm.
                  <br />
                  <br />
                  - Cho áp suất âm thanh tuyệt vời lên tới 154dB. Với hiệu suất
                  công suất cao nhất của loa siêu trầm đáng kinh ngạc này là hơn
                  18000 Watts. Đáp ứng tần số bao gồm 28 Hz đến 160 Hz và cung
                  cấp một điểm kết nối linh hoạt với các hệ thống trung bình /
                  cao. Trở kháng danh nghĩa là 2,7 ohm. - 318NB là giải pháp cho
                  các phòng bay Karaoke, các hội trường lớn, sân khấu ngoài trời
                  với hàng nghìn người nghe...
                  <br />
                  <br />
                  Hiện tại, Amster Audio Việt Nam đang là phân phối độc quyền
                  cac sản phẩm loa, Amply, Cục đẩy công suất,...đến từ nhà sản
                  xuất 4-Acoustic. Mời quý khách hàng đến trực tiếp Showroom tại
                  địa chỉ : Tầng 12A, tòa nhà Viwaseen Tower, số 48, Tố Hữu, Lê
                  Văn Lương kéo dài, Hà Nội để trải nghiệm. Chúng tôi cam kết
                  chất lượng và chính sách hậu mãi tốt nhất dành cho quý khách
                  hàng trên mọi miền tổ quốc.
                  <br />
                  <p />
                </div>
                {/* 2 THÔNG SỐ KĨ THUẬT */}
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="product-configuration">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Model Name</th>
                          <th scope="col">PCS-318NB</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Power Rating</td>
                          <td>
                            4500 W AES <br />
                            9000 W program <br />
                            18000 W peak
                          </td>
                        </tr>
                        <tr>
                          <td>Frequency Range (-10 dB)</td>
                          <td>28 Hz - 160 Hz</td>
                        </tr>
                        <tr>
                          <td>Sensitivity</td>
                          <td>103 dB 1w/1m</td>
                        </tr>
                        <tr>
                          <td>Maximum SPL</td>
                          <td>154 dB</td>
                        </tr>
                        <tr>
                          <td>Nominal Impedance</td>
                          <td>2,7 Ohm</td>
                        </tr>
                        <tr>
                          <td>Input Connectors</td>
                          <td>2 x Neutrik NL4 Socket parallel 1+/1-</td>
                        </tr>
                        <tr>
                          <td>Dimensions (h/w/d)</td>
                          <td>1200x500x700 mm</td>
                        </tr>
                        <tr>
                          <td>Net weight</td>
                          <td>91,5 kg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>{" "}
                {/* 2 THÔNG SỐ KĨ THUẬT */}
                {/* 3 ẢNH SẢN PHẨM */}
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className=" img-gallery ">
                    {/* 1 */}
                    <div className=" product-gallery-img ">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-01.png "
                        alt="img-product-detail"
                      />
                    </div>
                    {/* 2 */}
                    <div className=" product-gallery-img ">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-02.png "
                        alt="img-product-detail"
                      />
                    </div>
                    {/* 3 */}
                    <div className=" product-gallery-img ">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-03.png "
                        alt="img-product-detail"
                      />
                    </div>
                    {/* 4 */}
                    <div className=" product-gallery-img ">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-04.png "
                        alt="img-product-detail"
                      />
                    </div>
                    {/* 5 */}
                    <div className=" product-gallery-img ">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-05.png "
                        alt="img-product-detail"
                      />
                    </div>
                    {/* 6 */}
                    <div className=" product-gallery-img ">
                      <img
                        src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/PCS-318NB-06.png "
                        alt="img-product-detail"
                      />
                    </div>
                    {/* 7 */}
                  </div>
                </div>{" "}
                {/* 3 ẢNH SẢN PHẨM */}
              </div>
            </div>
          </section>{" "}
          {/* 2 Mô tả sản phẩm - product-description-container */}
        </main>
      )}
    </>
  );
}
