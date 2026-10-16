import { Link } from "react-router-dom";
import { data } from "../data";

function Footer() {
  const year = new Date().getFullYear();
  const firstOrder = `/product/${(data[0] && data[0].id) || ""}`;

  return (
    <footer className="ui-footer" id="contact">
      <div className="ui-footer-inner">
        <div>
          <div className="ui-footer-brand">
            <span className="ui-brand-mark" aria-hidden="true" />
            المتجر الجزائري
          </div>
          <p className="ui-footer-about">
            متجر جزائري للبيع عبر الإنترنت — الدفع عند الاستلام، وتوصيل إلى 58
            ولاية. اختر منتجك، أكمل معلوماتك، وسنتصل بك لتأكيد الطلب.
          </p>
        </div>

        <div>
          <h2 className="ui-footer-title">روابط الموقع</h2>
          <ul className="ui-footer-list">
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/products">كل المنتجات</Link>
            </li>
            <li>
              <Link to="/#categories">الأقسام</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="ui-footer-title">المنتجات</h2>
          <ul className="ui-footer-list">
            {data.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="ui-footer-title">خدمة العملاء</h2>
          <ul className="ui-footer-list">
            <li>
              <Link to="/#why-us">طريقة الطلب والدفع</Link>
            </li>
            <li>
              <Link to="/#why-us">التوصيل إلى 58 ولاية</Link>
            </li>
            <li>
              <Link to={firstOrder}>أكمل طلبك وسنتصل بك</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="ui-footer-bottom">
        <div className="ui-footer-bottom-inner">
          <span>© {year} المتجر الجزائري — جميع الحقوق محفوظة.</span>
          <span>الدفع عند الاستلام</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
