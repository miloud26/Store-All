import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { data } from "../data";
import "./store-ui.css";

const LINKS = [
  { to: "/", label: "الرئيسية", end: true, nav: true },
  { to: "/products", label: "المنتجات", nav: true },
  { to: "/#categories", label: "الأقسام" },
  { to: "/#contact", label: "تواصل معنا" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const orderTarget = `/product/${(data[0] && data[0].id) || ""}`;

  // Close the mobile panel on every navigation.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = ({ isActive }) =>
    `ui-nav-link${isActive ? " is-active" : ""}`;

  const mobileClass = ({ isActive }) =>
    `ui-mobile-link${isActive ? " is-active" : ""}`;

  return (
    <header className="ui-nav">
      <nav className="ui-nav-inner" aria-label="القائمة الرئيسية">
        <Link to="/" className="ui-brand">
          <span className="ui-brand-mark" aria-hidden="true" />
          المتجر الجزائري
        </Link>

        <div className="ui-nav-links">
          {LINKS.map((link) =>
            link.nav ? (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ) : (
              <Link key={link.to} to={link.to} className="ui-nav-link">
                {link.label}
              </Link>
            ),
          )}
        </div>

        <Link className="ui-btn ui-nav-order" to={orderTarget}>
          <ShoppingCartOutlinedIcon fontSize="small" />
          <span className="ui-nav-order-text">اطلب الآن</span>
        </Link>

        <button
          type="button"
          className="ui-burger"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          aria-controls="ui-mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="ui-burger-lines" aria-hidden="true" />
        </button>
      </nav>

      <div
        id="ui-mobile-menu"
        className={`ui-mobile${open ? " open" : ""}`}
        hidden={!open}
      >
        <div className="ui-mobile-inner">
          {LINKS.map((link) =>
            link.nav ? (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={mobileClass}
              >
                {link.label}
              </NavLink>
            ) : (
              <Link key={link.to} to={link.to} className="ui-mobile-link">
                {link.label}
              </Link>
            ),
          )}

          <Link className="ui-btn ui-btn-block" to={orderTarget}>
            اطلب الآن
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
