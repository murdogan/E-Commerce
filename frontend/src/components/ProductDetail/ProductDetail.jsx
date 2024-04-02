import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Gallery from "./Galery/Gallery";
import Info from "./Info/Info";
import "./ProductDetail.css";
import Tabs from "./Tabs/Tabs";
import PropTypes from "prop-types";

const ProductDetail = ({ singleProduct }) => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <BreadCrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery singleProduct={singleProduct} />
              <Info singleProduct={singleProduct} />
            </main>
          </div>

          <Tabs singleProduct={singleProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  singleProduct: PropTypes.object,
};
