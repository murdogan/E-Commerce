import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Gallery from "./Galery/Gallery";
import Info from "./Info/Info";
import "./ProductDetail.css";
import Tabs from "./Tabs/Tabs";
const ProductDetail = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <BreadCrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery />
              I<Info />
            </main>
          </div>

          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
