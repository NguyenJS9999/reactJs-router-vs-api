import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export function Navigation() {
    return (
        <>
      

            <header>
                {/* container-nav-1 */}
                <div className="  container-nav-1  container-fluid  ">
                    {/* Start navigation 1 */}
                    <nav className=" navigation-mobile-container   container-fluid">
                    {/* Start navigation mobile */}
                    <div className=" navigation-mobile  container-fluid ">
                        <div className="icon-menu-search">
                        {/* Menu Hambeger ẩn màn iphone - Home - Xây dựng cấu hình */}
                        <div className=" icon-menu-hidden-mobile  ">
                            <i className="fas fa-bars" />
                        </div>
                        {/* Icon tìm kiếm Màn min992 */}
                        <div className=" icon-search-hidden-mobile-992  ">
                            <i className="fas fa-search" />
                        </div>
                        </div>

                        <div className="logo-master-audio">
                            <Link to="/"><img src="https://nguyenkeo.github.io/MasterAudio/img/logo/logo.png" alt="logo" /></Link>   
                        </div>

                        {/* Icon tìm kiếm màn max576 */}
                        <div className=" icon-search-hidden-mobile-min576  ">
                        <i className="fas fa-search" />
                        </div>
                        {/* cart / login Mobile max576 */}
                        <div className="cart-login-mobile">
                        {/* cart mobile */}
                        <Link to="/shoppingCart" className="cart-icon" >
                            <span>
                                <i className="fas fa-shopping-cart" />
                                <span className=" cart-number-items ">3</span>
                            </span>
                        </Link>
                        
                        {/* Like mobile */}
                        <Link to="/wishList" className="liked-product-wishlist " >
                            <div className="wishlist-status ">
                            <i className="fas fa-heart" />
                            <span className=" wishlist-number ">3<span>
                                </span></span></div>
                        </Link>
                        {/* User mobile */}
                        <div className=" mobile-account   login-register-btn ">
                            <div className="login-status">
                            <i className="fas fa-user" />
                            <img className="login-status-logged-avata" src="./img/login/Jennie-2021.webp" alt="avata-acount" />
                            </div>
                        </div>
                        </div> {/* cart / login */}
                        {/* menu cố định đáy chuyển từ nav2 ẩn lên thành hambeger màn max576*/}
                        <div className="mobile-header-components">
                        <div className="component-wrapper">
                            <div className="mobile-component mobile-home">
                            <Link to="/">
                                <i className="fas fa-home" />
                                <span>Trang chủ</span>
                            </Link>

                            </div>
                            <div className=" mobile-component    mobile-wishlist ">
                            <Link to="./wishlist.html">
                                <div className="mobile-wishlist-status ">
                                <i className="fas fa-heart" />
                                <span className=" mobile-wishlist-number ">3<span>
                                    </span></span></div>
                                <span>Yêu thích</span>               
                            </Link>
                            </div>
                            <div className="mobile-component mobile-cart">
                        
                            <Link to="/shoppingCart" >
                                <div className="mobile-cart-status">
                                    <i className="fas fa-shopping-cart" />
                                    <span className="mobile-cart-number">3</span>
                                </div>
                                <span>Giỏ hàng</span>
                            </Link>

                            </div>
                            <div className="mobile-component mobile-account">
                            <div className="mobile-account-div">
                                <div className="mobile-accoun-login-status">
                                <i className="fas fa-user" />
                                <img className="login-status-logged-avata" src="./img/login/Jennie-2021.webp" alt="avata-acount" />
                                </div>
                                <span>Tài khoản</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* menu cố định đáy */}
                    </div>
                    </nav> {/* End navigation mobile */}
                    {/* Start navigation desktop*/}
                    <nav className=" navigation-desktop-container   container ">
                    <div className="navigation-desktop   container">
                        <div className="logo-master-audio">
                            <Link to="/"><img src="https://nguyenkeo.github.io/MasterAudio/img/logo/logo.png" alt="logo" /></Link>   
                        </div>
                        <div className=" search-header-desktop ">
                        <span>
                            <input type="text" name id placeholder="Tìm sản phẩm bạn muốn ..." />
                            <i className="fas fa-search" />
                        </span>
                        </div>
                        {/* cart / login desktop*/}
                        <div className="cart-login"> 
                    
                            <Link to="/shoppingCart" >
                                <span>
                                    <i className="fas fa-shopping-cart" />
                                    <span className=" cart-number-items ">3</span>
                                </span>
                            </Link>

                            {/* Like desktop */}
                            <Link to="/wishList" className="liked-product-wishlist " >
                                <div className="wishlist-status ">
                                <i className="fas fa-heart" />
                                <span className=" wishlist-number ">3<span>
                                    </span></span></div>
                            </Link>
                            {/* User desktop */}
                            <div className=" login-register-btn   mobile-account ">
                                <div className="login-status">
                                <i className="fas fa-user"> </i>
                                <img className="login-status-logged-avata" src="./img/login/Jennie-2021.webp" alt="avata-acount" />
                                </div>
                            </div>
                        </div> {/* cart / login */}
                    </div> {/* navigation-desktop */}
                    </nav>
                    {/* End navigation desktop 1*/}
                </div>
                {/* container-nav-1 */}
                {/* Moadal Đăng nhập / đăng kí */}
                <div className=" login-register-container   container-fluid ">
                    <div className=" login-register-form container-fluid ">
                    <ul className="nav nav-pills mb-3  d-flex justify-content-center   login-register-tab-change " id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Đăng nhập</button>
                        </li>
                        <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            Đăng ký
                        </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        {/* 1 - Đăng nhập */}
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <form>
                            {/* <div class=" login-register-form-title ">Đăng nhập</div> <br> */}
                            <div className=" laber-inputs-infor ">
                            <div className=" laber-input-infor  mb-3 ">
                                {/* <label for="exampleInputEmail1" class="form-label">Email
                                                <span class="text-danger">*</span>
                                            </label> */}
                                <input type="email" className id="exampleInputEmail1" placeholder="Email *" />
                                <small className="error-mess d-none ">Email không hợp lệ. VD: abc_123@gmail.com</small>
                            </div>
                            <div className=" laber-input-infor  mb-3 ">
                                {/* <label for="password" class="form-label">Mật khẩu
                                                <span class="text-danger">*</span>
                                            </label> */}
                                <input type="password" className id="password" placeholder="Mật khẩu *" />
                                <small className="error-mess d-none">Vui lòng nhập mật khẩu</small>
                            </div>
                            <div className=" mb-3  form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                Ẩn/Hiện mật khẩu
                                </label>
                            </div>
                            <div className=" mb-3  form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                Ghi nhớ tài khoản
                                </label>
                            </div>
                            </div>
                            <div type="button" className=" login-btn  register-button mt-2">Đăng nhập</div>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" className="iconify" data-icon="codicon:question" data-inline="false" style={{transform: 'rotate(360deg)'}}>
                                <g fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13zm0 12a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11zm1.55-8.42a1.84 1.84 0 0 0-.61-.42A2.25 2.25 0 0 0 7.53 4a2.16 2.16 0 0 0-.88.17c-.239.1-.45.254-.62.45a1.89 1.89 0 0 0-.38.62a3 3 0 0 0-.15.72h1.23a.84.84 0 0 1 .506-.741a.72.72 0 0 1 .304-.049a.86.86 0 0 1 .27 0a.64.64 0 0 1 .22.14a.6.6 0 0 1 .16.22a.73.73 0 0 1 .06.3c0 .173-.037.343-.11.5a2.4 2.4 0 0 1-.27.46l-.35.42c-.12.13-.24.27-.35.41a2.33 2.33 0 0 0-.27.45a1.18 1.18 0 0 0-.1.5v.66H8v-.49a.94.94 0 0 1 .11-.42a3.09 3.09 0 0 1 .28-.41l.36-.44a4.29 4.29 0 0 0 .36-.48a2.59 2.59 0 0 0 .28-.55a1.91 1.91 0 0 0 .11-.64a2.18 2.18 0 0 0-.1-.67a1.52 1.52 0 0 0-.35-.55zM6.8 9.83h1.17V11H6.8V9.83z">
                                </path>
                                </g>
                            </svg>
                            Quên mật khẩu
                            </p>
                        </form>
                        </div> {/* 2 - Đăng nhập */}
                        {/* 2 - Đăng kí */}
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <form>
                            {/* <div class=" login-register-form-title ">Đăng ký</div> <br> */}
                            <div className=" laber-inputs-infor ">
                            {/* Họ và tên */}
                            <div className=" laber-input-infor  mb-3 ">
                                <input type="text" className id="full-name" placeholder="Họ và tên *" />
                                <small className="error-mess d-none ">Vui lòng nhập đúng họ và tên</small>
                            </div>
                            {/*sdt */}
                            <div className=" laber-input-infor  mb-3 ">
                                <input type="text" className id="phone-number" placeholder="Số điện thoại *" />
                                <small className="error-mess d-none ">Vui lòng nhập vào số điện thoại của bạn</small>
                            </div>
                            {/* Email */}
                            <div className=" laber-input-infor  mb-3 ">
                                <input type="email" className id="exampleInputEmail1" placeholder="Email *" />
                                <small className="error-mess d-none ">Vui lòng nhập đúng Email</small>
                            </div>
                            {/*  */}
                            <div className=" laber-input-infor  mb-3 ">
                                <input type="password" className id="password" placeholder="Mật khẩu *" />
                                <small className="error-mess d-none ">Vui lòng nhập đúng Mật khẩu</small>
                            </div>
                            {/*  */}
                            <div className=" mb-3  form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                Ẩn/Hiện mật khẩu
                                </label>
                            </div>
                            </div>
                            <div className=" mb-3  form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Quý khách đồng ý với điều khoản dịch vụ của chúng tôi
                            </label>
                            </div>
                            <div type="button" className="  register-btn  register-button ">Đăng ký</div>
                        </form>
                        </div> {/* 2 - Đăng kí */}
                    </div>
                    </div>
                    {/* login-register-form */}
                </div>
                {/* Moadal Đăng nhập / đăng kí */}
                {/* **************************************************************************** */}
                {/* container Navigation 2 Mobile Danh mục sán phẩm, menu */}
                <div className="  container-nav-2  container-fluid  ">
                    <div className="  container-category-menu  container ">
                    <div className=" nav-2-category  ">
                        <Link to="/product">
                            <span className=" nav-2-category-title  "> Danh mục sản phẩm&nbsp;
                                <i className="fas fa-sort-down   sort-down-category " /> 
                            </span>
                        </Link>
                        
                        {/* style=' display: none;' */}
                        <ul className=" categorys   " style={{marginTop: '6px', display: 'none'}}>
                        {/* 1 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Loa fullrange</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Loa fullrange theo thương hiệu</p>
                                <Link to="/product-detail">4 Acoustic</Link>
                                <Link to="/product-detail">Nexo</Link>
                                <Link to="/product-detail">Adamson</Link>
                                <Link to="/product-detail">Amate</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">DK</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 2 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Loa subwoofer</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Loa subwoofer theo thương hiệu</p>
                                <Link to="/product-detail">4 Acoustic</Link>
                                <Link to="/product-detail">Nexo</Link>
                                <Link to="/product-detail">Adamson</Link>
                                <Link to="/product-detail">Amate</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">DK</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 3 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Loa line array</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Loa line array theo thương hiệu</p>
                                <Link to="/product-detail">4 Acoustic</Link>
                                <Link to="/product-detail">Nexo</Link>
                                <Link to="/product-detail">Adamson</Link>
                                <Link to="/product-detail">Amate</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">DK</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 4 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Đẩy công suất</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Đẩy công suất theo thương hiệu</p>
                                <Link to="/product-detail">4 Acoustic</Link>
                                <Link to="/product-detail">Nexo</Link>
                                <Link to="/product-detail">Adamson</Link>
                                <Link to="/product-detail">Amate</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">DK</Link>
                                <Link to="/product-detail">Hours</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 5 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Vang Số - DSP</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Vang Số - DSP theo thương hiệu</p>
                                <Link to="/product-detail">4 Acoustic</Link>
                                <Link to="/product-detail">Vainal</Link>
                                <Link to="/product-detail">Nexo</Link>
                                <Link to="/product-detail">Amate</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">Zongson</Link>
                                <Link to="/product-detail">Marani</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 6 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Mixcer</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Mixcer theo thương hiệu</p>
                                <Link to="/product-detail">Pioneer-dj</Link>
                                <Link to="/product-detail">Allen &amp; Heath </Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 7 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Micro không dây</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Micro không dây theo thương hiệu</p>
                                <Link to="/product-detail">Baiervires</Link>
                                <Link to="/product-detail">DK</Link>
                                <Link to="/product-detail">DB acoustic</Link>
                                <Link to="/product-detail">Maingo</Link>
                                <Link to="/product-detail">VTA</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 8 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Quản lý nguồn</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Quản lý nguồn theo thương hiệu</p>
                                <Link to="/product-detail">Kuledy</Link>
                                <Link to="/product-detail">VTA</Link>
                                <Link to="/product-detail">dBacoustic</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">MK</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 9 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Phụ kiện âm Thanh</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Phụ kiện từ các hãng</p>
                                <Link to="/product-detail">Tủ kĩ thuật</Link>
                                <Link to="/product-detail">Chân loa</Link>
                                <Link to="/product-detail">Cọc loa</Link>
                                <Link to="/product-detail">Dây jack</Link>
                                <Link to="/product-detail">Treo loa</Link>
                                <Link to="/product-detail">Khung treo loa</Link>
                                <Link to="/product-detail">Khác ...</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 10 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Combo âm thanh gia đình</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Combo theo giá</p>
                                <Link to="/product-detail">Combo từ 20 - 30 triệu</Link>
                                <Link to="/product-detail">Combo từ 30 - 50 triệu</Link>
                                <Link to="/product-detail">Combo từ 50 - 70 triệu</Link>
                                <Link to="/product-detail">Combo từ 120 - 150 triệu</Link>
                                <Link to="/product-detail">Combo từ 150 - 200 triệu</Link>
                                </li>
                                <li className="submenu-items">
                                <p>Combo theo thương hiệu</p>
                                <Link to="/product-detail">4 Acoustic</Link>
                                <Link to="/product-detail">Nexo</Link>
                                <Link to="/product-detail">Adamson</Link>
                                <Link to="/product-detail">Amate</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">DK</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 11 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Combo phòng phim</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Combo theo giá</p>
                                <Link to="/product-detail">Combo từ 20 - 30 triệu</Link>
                                <Link to="/product-detail">Combo từ 30 - 50 triệu</Link>
                                <Link to="/product-detail">Combo từ 50 - 70 triệu</Link>
                                <Link to="/product-detail">Combo từ 120 - 150 triệu</Link>
                                <Link to="/product-detail">Combo từ 150 - 200 triệu</Link>
                                </li>
                                <li className="submenu-items">
                                <p>Combo theo thương hiệu</p>
                                <Link to="/product-detail">4 Acoustic</Link>
                                <Link to="/product-detail">Nexo</Link>
                                <Link to="/product-detail">Adamson</Link>
                                <Link to="/product-detail">Amate</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">DK</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* 12 */}
                        <li className=" category ">
                            <Link to="/product-detail">
                            <span>Combo âm thanh hội trường</span>
                            <i className="fas fa-angle-right   category-right-arrow " />
                            </Link>
                            <div className=" submenu-container ">
                            <ul className=" submenu ">
                                <li className="submenu-items">
                                <p>Combo theo giá</p>
                                <Link to="/product-detail">Combo từ 20 - 30 triệu</Link>
                                <Link to="/product-detail">Combo từ 30 - 50 triệu</Link>
                                <Link to="/product-detail">Combo từ 50 - 70 triệu</Link>
                                <Link to="/product-detail">Combo từ 120 - 150 triệu</Link>
                                <Link to="/product-detail">Combo từ 150 - 200 triệu</Link>
                                </li>
                                <li className="submenu-items">
                                <p>Combo theo thương hiệu</p>
                                <Link to="/product-detail">4 Acoustic</Link>
                                <Link to="/product-detail">Nexo</Link>
                                <Link to="/product-detail">Adamson</Link>
                                <Link to="/product-detail">Amate</Link>
                                <Link to="/product-detail">Kukedy</Link>
                                <Link to="/product-detail">DK</Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className=" nav-2-menu ">
                        <Link to="/">
                            <i className="fas fa-home" />&nbsp;Trang chủ
                        </Link>
                       
                        <Link to="/build-configuration">
                            <i class="fas fa-tools"></i>&nbsp;Xây dựng cấu hình
                        </Link>
                                            
                        <Link to="/projectDone">
                            <i className="fas fa-users-cog" />&nbsp;Dự án đã hoàn thành
                        </Link>
                        
                        <Link to="/blog">
                            <i className="far fa-newspaper" />&nbsp;Blog
                        </Link>
                                            
                        <Link to="/about">
                            <i className="fas fa-map-marked-alt" />&nbsp;Giới thiệu
                        </Link>

                  
                    </div>
                    </div>
                </div>
                {/* container Navigation 2 Mobile Danh mục sán phẩm, menu  */}
                {/*  d-none  Nav Menu2 Ẩn - thu gọn - nền xám */}
                <div className=" backdrop-bg ">
                </div>
                {/* Menu ẩn nhỏ bên trái màn hình */}
                <div className=" mobile-nav-bar ">
                    <div className="btn-close-menu" type="button"><i className="fas fa-times" /></div>
                    {/* 1 - Logo menu hidden */}
                    <div className=" mobile-menu__item-logo ">
                    <div className="logo-master-audio ">
                    <Link to="/"><img src="https://nguyenkeo.github.io/MasterAudio/img/logo/logo.png" alt="logo" /></Link>   
                    </div>
                    </div>
                    {/* 2 - Input tìm kiếm sp bất kì */}
                    <div className=" search-collapse">
                    <input type="text" placeholder="Tìm sản phẩm bạn muốn ..." />
                    </div>
                    {/* 3 - accordion Tuôn ra giữa Menu và danh mục */}
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                    {/* 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Menu
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {/*Menu con bên trong accodion được ẩn cuộn ẩn đi */}
                            <div className=" menu-collapse ">
                            <span>
                                <Link to="/">
                                    <i className="fas fa-home" /> <span>Trang chủ</span>
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                <div>Xây dựng cấu hình</div>
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                <div>Dự án đã hoàn thành</div>
                                </Link>
                            </span>
                            <span>
                                <Link to="./blog.html">
                                <div>Blog</div>
                                </Link>
                            </span>
                            <span>
                                <Link to="./contact.html">
                                <div>Liên hệ</div>
                                </Link>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-heading-category">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-category" aria-expanded="false" aria-controls="flush-collapse-category">
                            Danh mục sản phẩm
                        </button>
                        </h2>
                        {/* Các danh mục con chính */}
                        <div id="flush-collapse-category" className="accordion-collapse collapse" aria-labelledby="flush-heading-category" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {/* Danh mục con các sản phẩm - Accordion Luôn mở */}
                            <ul className=" categorys-hide ">
                            {/* 1 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title ">
                                <Link to="/product-detail">
                                    <div>Loa fullrange</div>
                                </Link>
                                <i className="fas fa-angle-right  category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Loa fullrange theo thương hiệu</p>
                                    <Link to="/product-detail">4 Acoustic</Link>
                                    <Link to="/product-detail">Nexo</Link>
                                    <Link to="/product-detail">Adamson</Link>
                                    <Link to="/product-detail">Amate</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">DK</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 2 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Loa subwoofer</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Loa subwoofer theo thương hiệu</p>
                                    <Link to="/product-detail">4 Acoustic</Link>
                                    <Link to="/product-detail">Nexo</Link>
                                    <Link to="/product-detail">Adamson</Link>
                                    <Link to="/product-detail">Amate</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">DK</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 3 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Loa line array</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Loa line array theo thương hiệu</p>
                                    <Link to="/product-detail">4 Acoustic</Link>
                                    <Link to="/product-detail">Nexo</Link>
                                    <Link to="/product-detail">Adamson</Link>
                                    <Link to="/product-detail">Amate</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">DK</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 4 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Đẩy công suất</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Đẩy công suất theo thương hiệu</p>
                                    <Link to="/product-detail">4 Acoustic</Link>
                                    <Link to="/product-detail">Nexo</Link>
                                    <Link to="/product-detail">Adamson</Link>
                                    <Link to="/product-detail">Amate</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">DK</Link>
                                    <Link to="/product-detail">Hours</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 5 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Vang Số - DSP</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Vang Số - DSP theo thương hiệu</p>
                                    <Link to="/product-detail">4 Acoustic</Link>
                                    <Link to="/product-detail">Vainal</Link>
                                    <Link to="/product-detail">Nexo</Link>
                                    <Link to="/product-detail">Amate</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">Zongson</Link>
                                    <Link to="/product-detail">Marani</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 6 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Mixcer</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Mixcer theo thương hiệu</p>
                                    <Link to="/product-detail">Pioneer-dj</Link>
                                    <Link to="/product-detail">Allen &amp; Heath </Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 7 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Micro không dây</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Micro không dây theo thương hiệu</p>
                                    <Link to="/product-detail">Baiervires</Link>
                                    <Link to="/product-detail">DK</Link>
                                    <Link to="/product-detail">DB acoustic</Link>
                                    <Link to="/product-detail">Maingo</Link>
                                    <Link to="/product-detail">VTA</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 8 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Quản lý nguồn</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Quản lý nguồn theo thương hiệu</p>
                                    <Link to="/product-detail">Kuledy</Link>
                                    <Link to="/product-detail">VTA</Link>
                                    <Link to="/product-detail">dBacoustic</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">MK</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 9 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Phụ kiện âm Thanh</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Phụ kiện từ các hãng</p>
                                    <Link to="/product-detail">Tủ kĩ thuật</Link>
                                    <Link to="/product-detail">Chân loa</Link>
                                    <Link to="/product-detail">Cọc loa</Link>
                                    <Link to="/product-detail">Dây jack</Link>
                                    <Link to="/product-detail">Treo loa</Link>
                                    <Link to="/product-detail">Khung treo loa</Link>
                                    <Link to="/product-detail">Khác ...</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 10 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Combo âm thanh gia đình</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Combo theo giá</p>
                                    <Link to="/product-detail">Combo từ 20 - 30 triệu</Link>
                                    <Link to="/product-detail">Combo từ 30 - 50 triệu</Link>
                                    <Link to="/product-detail">Combo từ 50 - 70 triệu</Link>
                                    <Link to="/product-detail">Combo từ 120 - 150 triệu</Link>
                                    <Link to="/product-detail">Combo từ 150 - 200 triệu</Link>
                                    </li>
                                    <li className="submenu-hide-items">
                                    <p>Combo theo thương hiệu</p>
                                    <Link to="/product-detail">4 Acoustic</Link>
                                    <Link to="/product-detail">Nexo</Link>
                                    <Link to="/product-detail">Adamson</Link>
                                    <Link to="/product-detail">Amate</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">DK</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 11 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Combo phòng phim</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Combo theo giá</p>
                                    <Link to="/product-detail">Combo từ 20 - 30 triệu</Link>
                                    <Link to="/product-detail">Combo từ 30 - 50 triệu</Link>
                                    <Link to="/product-detail">Combo từ 50 - 70 triệu</Link>
                                    <Link to="/product-detail">Combo từ 120 - 150 triệu</Link>
                                    <Link to="/product-detail">Combo từ 150 - 200 triệu</Link>
                                    </li>
                                    <li className="submenu-hide-items">
                                    <p>Combo theo thương hiệu</p>
                                    <Link to="/product-detail">4 Acoustic</Link>
                                    <Link to="/product-detail">Nexo</Link>
                                    <Link to="/product-detail">Adamson</Link>
                                    <Link to="/product-detail">Amate</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">DK</Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            {/* 12 */}
                            <li className=" category-hide ">
                                <span className=" category-hide-title " href="/product-detail">
                                <div>Combo âm thanh hội trường</div>
                                <i className="fas fa-angle-right   category-hide-right-arrow " />
                                </span>
                                <div className=" submenu-hide-container ">
                                <ul className=" submenu-hide ">
                                    <li className="submenu-hide-items">
                                    <p>Combo theo giá</p>
                                    <Link to="/product-detail">Combo từ 20 - 30 triệu</Link>
                                    <Link to="/product-detail">Combo từ 30 - 50 triệu</Link>
                                    <Link to="/product-detail">Combo từ 50 - 70 triệu</Link>
                                    <Link to="/product-detail">Combo từ 120 - 150 triệu</Link>
                                    <Link to="/product-detail">Combo từ 150 - 200 triệu</Link>
                                    </li>
                                    <li className="submenu-hide-items">
                                    <p>Combo theo thương hiệu</p>
                                    <Link to="/product-detail">4 Acoustic</Link>
                                    <Link to="/product-detail">Nexo</Link>
                                    <Link to="/product-detail">Adamson</Link>
                                    <Link to="/product-detail">Amate</Link>
                                    <Link to="/product-detail">Kukedy</Link>
                                    <Link to="/product-detail">DK</Link>
                                    </li>
                                </ul></div>
                                {/* Danh mục con các sản phẩm - Accordion Luôn mở */}
                            </li></ul></div>
                        </div>
                    </div>
                    {/*  */}
                    </div>
                    {/* Menu ẩn nhỏ bên trái màn hình */}
                </div>
            </header>


        </>
    )
}