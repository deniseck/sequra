import React, { Component } from 'react';
import $ from 'jquery';
import PaymentOptions from './PaymentOptions';
class ProductPage extends Component {

  constructor() {
    super();
    this.state = { price: "399,99" };
  }




  jqueryCode = () => {
    const setPrice = (price) => {
      this.setState({
        price: price
      });
    }

    $(document).ready(function () {
      $("ul.menu-items > li").on("click", function () {
        $("ul.menu-items > li").removeClass("active");
        $(this).addClass("active");
      });

      $(".attr,.attr2").on("click", function () {
        var clase = $(this).attr("class");

        $("." + clase).removeClass("active");
        $(this).addClass("active");
        $("#product-price").html($(this).attr("data-price"));
        setPrice($(this).attr("data-price"));
      });

      $(".btn-minus").on("click", function () {
        var now = $(".section > div > input").val();
        if ($.isNumeric(now)) {
          if (parseInt(now) - 1 > 0) {
            now--;
          }
          $(".section > div > input").val(now);
        } else {
          $(".section > div > input").val("1");
        }
      });

      $(".btn-plus").on("click", function () {
        var now = $(".section > div > input").val();
        if ($.isNumeric(now)) {
          $(".section > div > input").val(parseInt(now) + 1);
        } else {
          $(".section > div > input").val("1");
        }
      });
    })
  };

  componentDidMount() {
    this.jqueryCode();
  }


  render() {
    return (
      <>
        {/*@(window)*/}
        {/*@(document)*/}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Snippet - Bootsnipp.com</title>
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-4 item-photo">
              <img
                style={{ maxWidth: "100%" }}
                src="https://ak1.ostkcdn.com/images/products/8818677/Samsung-Galaxy-S4-I337-16GB-AT-T-Unlocked-GSM-Android-Cell-Phone-85e3430e-6981-4252-a984-245862302c78_600.jpg"
              />
            </div>
            <div className="col-xs-5" style={{ border: "0px solid gray" }}>
              {/* Datos del vendedor y titulo del producto */}
              <h3>
                Samsung Galaxy S4 I337 16GB 4G LTE Unlocked GSM Android Cell Phone
              </h3>
              <h5 style={{ color: "#337ab7" }}>
                vendido por
                <a href="#">Samsung</a> ·
                <small style={{ color: "#337ab7" }}>(5054 ventas)</small>
              </h5>
              {/* Precios */}
              <h6 className="title-price">
                <small>PRECIO OFERTA</small>
              </h6>
              <h3 id="product-price" style={{ marginTop: 0 }}>
                {this.state.price} €
              </h3>
              {/* Detalles especificos del producto */}
              <div className="section">
                <h6 className="title-attr" style={{ marginTop: 15 }}>
                  <small>COLOR</small>
                </h6>
                <div>
                  <div
                    className="attr"
                    style={{ width: 25, background: "#5a5a5a" }}
                  />
                  <div className="attr" style={{ width: 25, background: "white" }} />
                </div>
              </div>
              <div className="section" style={{ paddingBottom: 5 }}>
                <h6 className="title-attr">
                  <small>CAPACIDAD</small>
                </h6>
                <div>
                  <div data-price="399,99 €" className="attr2 active">
                    16 GB
                  </div>
                  <div data-price="450,00 €" className="attr2">
                    32 GB
                  </div>
                </div>
              </div>
              <div className="section" style={{ paddingBottom: 20 }}>
                <h6 className="title-attr">
                  <small>CANTIDAD</small>
                </h6>
                <div>
                  <div className="btn-minus">
                    <span className="glyphicon glyphicon-minus" />
                  </div>
                  <input defaultValue={1} />
                  <div className="btn-plus">
                    <span className="glyphicon glyphicon-plus" />
                  </div>
                </div>
              </div>
              {/* Botones de compra */}
              <div className="section" style={{ paddingBottom: 20 }}>
                <button className="btn btn-success">
                  <span
                    style={{ marginRight: 20 }}
                    className="glyphicon glyphicon-shopping-cart"
                    aria-hidden="true"
                  />{" "}
                  Agregar al carro
                </button>
                <PaymentOptions totalPrice={this.state.price}></PaymentOptions>
                <h6>
                  <a href="#">
                    <span
                      className="glyphicon glyphicon-heart-empty"
                      style={{ cursor: "pointer" }}
                    />{" "}
                    Agregar a lista de deseos
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-xs-9">
              <ul className="menu-items">
                <li className="active">Detalle del producto</li>
                <li>Garantía</li>
                <li>Vendedor</li>
                <li>Envío</li>
              </ul>
              <div style={{ width: "100%", borderTop: "1px solid silver" }}>
                <p style={{ padding: 15 }}>
                  <small>
                    Stay connected either on the phone or the Web with the Galaxy S4
                    I337 from Samsung. With 16 GB of memory and a 4G connection, this
                    phone stores precious photos and video and lets you upload them to
                    a cloud or social network at blinding-fast speed. With a 17-hour
                    operating life from one charge, this phone allows you keep in
                    touch even on the go. With its built-in photo editor, the Galaxy
                    S4 allows you to edit photos with the touch of a finger,
                    eliminating extraneous background items. Usable with most
                    carriers, this smartphone is the perfect companion for work or
                    entertainment.
                  </small>
                </p>
                <small>
                  <ul>
                    <li>
                      Super AMOLED capacitive touchscreen display with 16M colors
                    </li>
                    <li>Available on GSM, AT T, T-Mobile and other carriers</li>
                    <li>
                      Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 / 2100
                      LTE; 700 MHz Class 17 / 1700 / 2100 networks
                    </li>
                    <li>MicroUSB and USB connectivity</li>
                    <li>
                      Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and Bluetooth
                    </li>
                    <li>
                      Wi-Fi hotspot to keep other devices online when a connection is
                      not available
                    </li>
                    <li>SMS, MMS, email, Push Mail, IM and RSS messaging</li>
                    <li>
                      Front-facing camera features autofocus, an LED flash, dual video
                      call capability and a sharp 4128 x 3096 pixel picture
                    </li>
                    <li>Features 16 GB memory and 2 GB RAM</li>
                    <li>
                      Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android OS
                    </li>
                    <li>
                      17 hours of talk time, 350 hours standby time on one charge
                    </li>
                    <li>Available in white or black</li>
                    <li>Model I337</li>
                    <li>Package includes phone, charger, battery and user manual</li>
                    <li>
                      Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches deep
                      and weighs a mere 4.59 oz{" "}
                    </li>
                  </ul>
                </small>
              </div>
            </div>
          </div>
        </div>
      </>


    )
  }
};

export default ProductPage;