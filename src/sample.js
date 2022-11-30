<>
  {/* Menu */}
  <div className="container-fluid bg-light">
    <div className="row">
      <div className="col-sm-12">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-fill w-100">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Trang Chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#plans">
                  Combo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pizza">
                  Loại Pizza
                </a>
              </li>
              <a className="nav-link" href="#contact">
                Gửi đơn hàng
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div className="container" style={{ padding: "120px 0 50px 0" }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            {/* Title row home */}
            <div className="col-sm-12">
              <h1>
                <b className="text-warning">Pizza 365!</b>
              </h1>
              <h3 className="font-italic text-warning"> Truly italian !</h3>
            </div>
            {/* Slide row home */}
            <div className="col-sm-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={3}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={4}
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="Images/1.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="Images/2.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="Images/3.jpg"
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="Images/4.jpg"
                      alt="4 slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="Images/feature-saladbar.jpg"
                      alt="5 slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          {/* Content why*/}
          <div className="col-sm-12 text-center p-4 mt-4">
            <h2>
              <b className="p-2 border-bottom border-warning text-warning">
                Tại sao lại Pizza 365:
              </b>
            </h2>
          </div>
          {/* Content why*/}
          <div className="col-sm-12 border-warning">
            <div className="row border-warning">
              <div className="col-sm-3 p-4 border-warning bg-lightgoldenrodyellow">
                <h3 className="p-2">Ưu đãi “Khủng”</h3>
                <p className="p-2">
                  Các ưu đãi hấp dẫn liên tục ra mắt, các dịp cuối tuần, ngày lễ
                  đều có các sự kiện khủng
                </p>
              </div>
              <div className="col-sm-3 p-4 border-warning bg-yellow">
                <h3 className="p-2">Chất lượng</h3>
                <p className="p-2">
                  Chúng tôi cam kết mọi nguyên liệu tươi ngon thượng hạng, được
                  đầu bếp lựa chọn kỹ lương
                </p>
              </div>
              <div className="col-sm-3 p-4 bg-lightsalmon border-warning">
                <h3 className="p-2">Đa dạng kích cỡ</h3>
                <p className="p-2">
                  Sự đa dạng về kích cỡ và các món phụ tạo nên một bữa ăn tuyệt
                  vời.
                </p>
              </div>
              <div className="col-sm-3 p-4 border-warning bg-orange">
                <h3 className="p-2">Giá "hạt rẻ"</h3>
                <p className="p-2">Giá cả hợp lý là châm ngôn của chúng tôi</p>
              </div>
            </div>
          </div>
          <div id="plans" className="row">
            {/* Title what we offer */}
            <div className="col-sm-12 text-center p-4 mt-4 txt-orange">
              <h2>
                <b className="p-1 border-bottom border-warning">
                  Menu Combo Pizza 365
                </b>
              </h2>
              <p>
                <span className="p-2 ">Hãy chọn cỡ pizza phù hợp với bạn!</span>
              </p>
            </div>
            {/* Content what we offer */}
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-header bg-orange text-center">
                      <h3>S (small) </h3>
                    </div>
                    <div className="card-body text-center">
                      <ul className="list-group bg-info list-group-flush">
                        <li className="list-group-item">
                          Đường kính: <b> 20cm</b>
                        </li>
                        <li className="list-group-item">
                          Sườn nướng: <b> 2 </b>
                        </li>
                        <li className="list-group-item">
                          Salad: <b> 200 g </b>
                        </li>
                        <li className="list-group-item">
                          Nước ngọt: <b> 2 </b>
                        </li>
                        <li className="list-group-item">
                          <h1>
                            <b>150.000</b>
                          </h1>{" "}
                          VND
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer text-center">
                      <button
                        id="btn-plan-s"
                        className="btn btn-warning btn-block font-weight-bold"
                        data-is-selected-menu="N"
                      >
                        Chọn
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-header bg-light-orange text-center">
                      <h3>M (medium)</h3>
                    </div>
                    <div className="card-body text-center">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Đường kính: <b> 25 cm </b>
                        </li>
                        <li className="list-group-item">
                          Sườn nướng: <b> 4 </b>
                        </li>
                        <li className="list-group-item">
                          Salad: <b> 300 g </b>
                        </li>
                        <li className="list-group-item">
                          Nước ngọt: <b> 3 </b>
                        </li>
                        <li className="list-group-item">
                          <h1>
                            <b>200.000</b>
                          </h1>{" "}
                          VND
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer text-center">
                      <button
                        id="btn-plan-m"
                        className="btn btn-warning btn-block font-weight-bold"
                        data-is-selected-menu="N"
                      >
                        Chọn
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-header bg-orange text-center">
                      <h3>L (large)</h3>
                    </div>
                    <div className="card-body text-center">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Đường kính: <b> 30cm</b>
                        </li>
                        <li className="list-group-item">
                          Sườn nướng: <b> 8 </b>
                        </li>
                        <li className="list-group-item">
                          Salad: <b> 500 g </b>
                        </li>
                        <li className="list-group-item">
                          Nước ngọt: <b> 4 </b>
                        </li>
                        <li className="list-group-item">
                          <h1>
                            <b>250.000</b>
                          </h1>{" "}
                          VND
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer text-center">
                      <button
                        id="btn-plan-l"
                        className="btn btn-warning btn-block font-weight-bold"
                        data-is-selected-menu="N"
                      >
                        Chọn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pizza" className="row">
            {/* Title Who We Are */}
            <div className="col-sm-12 text-center p-4 mt-4 txt-orange">
              <h2>
                <b className="p-2 border-bottom border-warning">
                  Chọn loại Pizza
                </b>
              </h2>
            </div>
            {/* Content Who We Are */}
            <div className="col-12">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <img src="Images/seafood.jpg" className="card-img-top" />
                    <div className="card-body">
                      <h4 className="text-uppercase">ocean mania</h4>
                      <p className="text-uppercase">
                        pizza hải sản xốt mayonnaise
                      </p>
                      <p className="text-capitalize">
                        Xốt Cà Chua, phô mai mozzarella, tôm, mực, thanh cua,
                        hành tây.
                      </p>
                      <p>
                        <button
                          id="btn-pizza-1"
                          className="btn btn-warning btn-block font-weight-bold"
                          data-is-selected-pizza="N"
                        >
                          Chọn
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <img src="Images/hawaiian.jpg" className="card-img-top" />
                    <div className="card-body">
                      <h4 className="text-uppercase">hawaiian</h4>
                      <p className="text-uppercase">
                        pizza dăm bông dứa kiểu hawaii
                      </p>
                      <p>
                        xốt cà chua, phô mai mozzarella, thịt dăm bông thơm.
                      </p>
                      <p>
                        <button
                          id="btn-pizza-2"
                          className="btn btn-warning btn-block font-weight-bold"
                          data-is-selected-pizza="N"
                        >
                          Chọn
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <img src="Images/bacon.jpg" className="card-img-top" />
                    <div className="card-body">
                      <h4 className="text-uppercase">cheesy chicken bacon</h4>
                      <p className="text-uppercase">Truyền thống thịt</p>
                      <p>
                        xốt phô mai, thịt gà, thịt heo muối, phô mai mozzarella,
                        cà chua
                      </p>
                      <p>
                        <button
                          id="btn-pizza-3"
                          className="btn btn-warning btn-block font-weight-bold"
                          data-is-selected-pizza="N"
                        >
                          Chọn
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Drink*/}
          <div className="row">
            <div className="col-sm-12 text-center p-4 mt-4 txt-orange">
              <h2>
                <b className="p-2 border-bottom border-warning">Đồ Uống</b>
              </h2>
            </div>
            <div className="col-12">
              <select className="form-control" id="select-drink">
                <option value="Not-SelectDrink"> Hãy chọn đồ uống</option>
              </select>
            </div>
          </div>
          <div id="contact" className="row">
            {/* Title Contact Us */}
            <div className="col-sm-12 text-center p-4 mt-4 txt-orange">
              <h2>
                <b className="p-2 border-bottom border-warning">Gửi đơn hàng</b>
              </h2>
            </div>
            {/* Content Contact Us */}
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="fullname">Họ và tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inp-fullname"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inp-email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dien-thoai">Điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inp-dien-thoai"
                      placeholder="Điện thoại"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dia-chi">Địa chỉ</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inp-dia-chi"
                      placeholder="Địa chỉ"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mã giảm giá</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inp-voucher-id"
                      placeholder="mã giảm giá"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Lời nhắn</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inp-message"
                      placeholder="Lời nhắn"
                    />
                  </div>
                  <button
                    id="sendModal"
                    type="button"
                    className="btn btn-warning w-100 font-weight-bold"
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-orange-more p-5">
    <div className="row text-center">
      <div className="col-sm-12">
        <h4 className="m-2">Footer</h4>
        <a href="#" className="btn btn-dark m-3">
          <i className="fa fa-arrow-up" />
          To the top
        </a>
        <div className="m-2">
          <i className="fa-brands fa-square-facebook" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-snapchat" />
          <i className="fa-brands fa-square-pinterest" />
          <i className="fa-brands fa-square-twitter" />
          <i className="fa-brands fa-tiktok" />
        </div>
      </div>
    </div>
  </div>
 

  
</>
