import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/product.css";

function Breadcrumb() {
  return (
    <div className="breadcrumb-container     container-fluid ">
      <div className=" breadcrumb-content container ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="./index.html">TRANG CHỦ</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              SẢN PHẨM
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

// const PRODUCT_DATA = [
//     {
//         id: 1,
//         productImage: 'https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/Subwoofer-PCS-318NB.png',
//         productBrand: '4 Acoustic',
//         productName: 'PCS 318NB',
//         productPrice: 65200000,
//         slug: '4-Acoustic-PCS-318NB'
//     },{
//         id: 2,
//         productImage: 'https://nguyenkeo.github.io/MasterAudio/img/nexo/nexo-ps15.png',
//         productBrand: 'Nexo',
//         productName: 'LS 18',
//         productPrice: 87715000,
//         slug: 'Nexo-LS-18'

//     }, {
//         id: 3,
//         productImage: 'https://nguyenkeo.github.io/MasterAudio/img/adamson/adamson-point15.jpg',
//         productBrand: 'Adamson',
//         productName: 'Point 15',
//         productPrice: 99111000,
//         slug: 'Adamson-Point-15'
//     }, {
//         id: 4,
//         productImage: 'https://nguyenkeo.github.io/MasterAudio/img//amate/amate-X218WF.png',
//         productBrand: 'Amate',
//         productName: 'X218WF',
//         productPrice: 179697708,
//         slug: 'Amate-X218WF',
//     },

// ];

export function Product() {
  // Lấy tất cả các sp để .map()
  const [stateProducts, setProducts] = useState([]);
  const [stateInputValue, setStateInputValue] = useState(""); // biến đổi thêm đầu vào?

  useEffect(() => {
    // -- Promise
    // fetch("https://rest-api-nodejs-reactjs-router.herokuapp.com/products")
    //   .then((response) => {
    //     console.log("response", response);
    //     return response.json();
    //   })
    //   .then((products) => {
    //     setProducts(products);
    //   });

    // Async await
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products`
      );
      const result = await response.json();
      setProducts(result);
      console.log("result", result, 'stateProducts' ,stateProducts );
    }
    fetchData();

    // Anonymous function
    // (
    //   async function fetchData() {
    //     const response = await fetch(
    //       "https://rest-api-nodejs-reactjs-router.herokuapp.com/products"
    //     );
    //     const result = await response.json();
    //     setProducts(result);
    //   }
    // ) ()
  }, []);

  // Lấy giá trị ô input
  function inputSearchValue(event) { console.log('Giá trị ô input: ', stateInputValue)
    setStateInputValue(event.target.value);
  }
  // Chức năng Search
  function searchProduct() {

    async function searchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products/?q=${stateInputValue}  `
      );
      const result = await response.json();
      setProducts(result);
      console.log('Tìm 1/nhiều product, stateProducts', stateProducts)
    }
    searchData();

  }
  // Chức năng Filter  
  // function FilterProduct() {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `https://rest-api-nodejs-reactjs-router.herokuapp.com/products/?id=${ stateProducts.id }  `
  //     );
  //     const result = await response.json();
  //     setProducts(result);
  //     console.log('Tìm 1/nhiều product, stateProducts', stateProducts)
  //   }
  //   fetchData();

  // }
  
  // Lọc theo thương hiệu
  function filterByBrand(brand) { 
    async function filterBrand() {
      const response = await fetch (  `https://rest-api-nodejs-reactjs-router.herokuapp.com/products?q=${brand} ` )
      const result = await response.json();
      setProducts(result);
    };
    filterBrand()
  }
  // Lọc theo loại sản phẩm - type
  function filterByType(brand) { 
    async function filterType() {
      const response = await fetch (  `https://rest-api-nodejs-reactjs-router.herokuapp.com/products?q=${brand} ` )
      const result = await response.json();
      setProducts(result);
    };
    filterType()
  }

  // Lọc theo khoảng giá nhập vào
  // https://rest-api-nodejs-reactjs-router.herokuapp.com/products?productPrice_gte=16500000&productPrice_lte=65200000

  // Xắp xếp giá tăng dần
  function sortPriceAscending() { console.log('Sắp xếp tăng dần')
    async function sortPrice() {
      const response = await fetch( ` https://rest-api-nodejs-reactjs-router.herokuapp.com/products?_sort=productPrice&_order=asc  ` )
      const result = await response.json();
      setProducts(result);
    }
    sortPrice();
  }
  // Xắp xếp giá giảm dần
  function sortPriceDecrease() { console.log('Sắp xếp giảm dần')
    async function sortPrice() {
      const response = await fetch( ` https://rest-api-nodejs-reactjs-router.herokuapp.com/products?_sort=productPrice&_order=desc ` )
      const result = await response.json();
      setProducts(result);
    }
    sortPrice();
  }
  // Phân Trang
  // https://rest-api-nodejs-reactjs-router.herokuapp.com/products?_page=1&_limit=4
  

  let ProductDetailElement = stateProducts.map((item) => ( 
    <div key={item.id} className="product">
      {/* (item.productName).split(' ').join('') */}

      <Link to={`/product-detail/${item.slug}/${item.id}`}>
        <div className="product-img">
          <img src={item.productImage} alt="product" />
        </div>
      </Link>

      <div className="product-details">
        <div className="product-infor     ">
          <div className="product-infor-brand"> {item.productBrand} </div>
          <div className="product-infor-name-product">{item.productName}</div>
          <div className="product-infor-price">
            {" "}
            {item.productPrice.toLocaleString()}&nbsp;₫
          </div>
          &nbsp;
          <i className="far fa-heart  like-product " />
        </div>

        <div className="product-details-button    container ">
          <span className=" product-details-button-cart " type="button">
            <i className="fas fa-cart-arrow-down" /> Thêm vào giỏ hàng
          </span>

          <Link
            to="/shoppingCart"
            className=" product-details-button-buynow "
            type="button"
          >
            <i className="fas fa-coins" /> &nbsp;Mua ngay
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Breadcrumb />

      <main>
        <section>
          {/* Lọc sản phẩm */}
          <div className=" filter-container  container ">
            <div className=" filters    ">
              <div className="filter-by-brand">
                <div className="filter-title">
                  CHỌN SẢN PHẨM THEO THƯƠNG HIỆU
                </div>
                {/* Bọc Carousel */}
                <div className="list-brand">
                  {/* Div được gắn Carousel */}
                  {/* <div class="list-brand-carousel"> */}
                  <div onClick={ () => filterByBrand( '4-acoustic' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-4-acoustic.png"
                      alt="logo"
                    />
                  </div>
                  <div onClick={ () => filterByBrand( 'Nexo' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/Nexo.png"
                      alt="logo"
                    />
                  </div>
                  <div onClick={ () => filterByBrand( 'Adamson' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Adamson.png"
                      alt="logo"
                    />
                  </div>
                  <div onClick={ () => filterByBrand( 'Amate' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Amate.png"
                      alt="logo"
                    />
                  </div>
                  <div onClick={ () => filterByBrand( 'Kuledy' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Kuledy.png"
                      alt="logo"
                    />
                  </div>
                  <div onClick={ () => filterByBrand( 'DK' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-DK.png"
                      alt="logo"
                    />
                  </div>
                  <div onClick={ () => filterByBrand( 'Baiervires' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Baiervires.png"
                      alt="logo"
                    />
                  </div>
                  <div onClick={ () => filterByBrand( 'Hous' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Hours.png"
                      alt="logo"
                    />
                  </div>
                  <div onClick={ () => filterByBrand( 'Pioneer-dj' ) } className="brand-logo">
                    <img
                      src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/Pioneer-dj.png"
                      alt="logo"
                    />
                  </div>
                  {/* </div>  */}
                  {/* Div được gắn Carousel,list-brand-carousel */}
                </div>
              </div>
              {/* Lọc theo kiểu loại sản phẩm */}
              <div className="filter-by-classify">
                <div className="filter-title">
                  CHỌN THEO PHÂN LOẠI SẢN PHẨM{" "}
                </div>
                <div className="list-classify">
                  {/* Div được gắn Carousel */}
                  {/* <div class="list-brand-carousel"> */}
                  <div onClick={ () => filterByType('Subwoofer') } className="brand-classify">
                    {" "}
                    <span> Subwoofer </span>{" "}
                  </div>
                  <div onClick={ () => filterByType('Full range') } className="brand-classify">
                    {" "}
                    <span> Full range </span>{" "}
                  </div>
                  <div onClick={ () => filterByType('Line array') } className="brand-classify">
                    {" "}
                    <span> Line array </span>{" "}
                  </div>
                  <div onClick={ () => filterByType('Mid low') } className="brand-classify">
                    {" "}
                    <span> Mid low </span>{" "}
                  </div>
                  <div onClick={ () => filterByType('Amplifier') } className="brand-classify">
                    {" "}
                    <span> Amplifier </span>{" "}
                  </div>
                  <div onClick={ () => filterByType('Micro') } className="brand-classify">
                    {" "}
                    <span> Micro </span>{" "}
                  </div>
                  <div onClick={ () => filterByType('Digital echo') } className="brand-classify">
                    {" "}
                    <span> Digital echo </span>{" "}
                  </div>
                  <div onClick={ () => filterByType('Mixer') } className="brand-classify">
                    {" "}
                    <span> Mixer </span>{" "}
                  </div>
                  <div onClick={ () => filterByType('Auto power') } className="brand-classify">
                    {" "}
                    <span> Auto power </span>{" "}
                  </div>
                </div>
                {/* </div>  */}
                {/* list-brand */}
              </div>
            </div>{" "}
            {/* filters Các bộ lọc (2) */}
            {/* Lọc theo giá và tìm kiếm */}
            <div className="filter-by-price-search-container   container  ">
              <div className="filter-by-price-buttons">

                <span onClick={ sortPriceAscending } className="filter-by-price-button">Giá tăng dần</span>
                <span onClick={ sortPriceDecrease } className="filter-by-price-button">Giá giảm dần</span>
                
              </div>
              <span>
                <span className="product-search">
                  <input onChange = { inputSearchValue }
                    className="search-input"
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                  />
                  <span onClick = { searchProduct }
                    className="search-icon" type="button">
                    <i className="fas fa-search "> </i>
                  </span>
                </span>
              </span>
            </div>{" "}
            {/* Lọc theo giá và tìm kiếm */}
          </div>{" "}
          {/* filters-container */}
        </section>{" "}
        {/* Lọc sản phẩm */}
        <section className="products-pagination-container    container">
          <div className="list-products">
            {/* 1 */}
            { stateProducts.length > 0 ? (ProductDetailElement) : 'Không có sản phẩm nào' }
            {/* { stateProducts } */}
          </div>

          {/* list-products */}
          <div className="paginations">
            <span className="previous-pagination">&lt;</span>
            <span className id="paginations-active">
              1
            </span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span className="next-pagination">&gt;</span>
          </div>
        </section>
      </main>
    </>
  );
}
