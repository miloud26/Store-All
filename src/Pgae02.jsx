import { Box, Button, Paper, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Form from "./components/Form";
import { data } from "./data";
import { useEffect, useState } from "react";

export default function Page02() {
  // The product to show comes from the route (/product/:id) and falls back to
  // the original product for the legacy /products/page01 link.
  const { id } = useParams();
  const product = data.find((item) => item.id === (id || "l-2")) || data[0];
  const [showBtn, setShowBtn] = useState(false);
  //خن//
  useEffect(() => {
    const onScroll = () => {
      const nextShowBtn = window.scrollY > 500;

      setShowBtn((prev) => (prev === nextShowBtn ? prev : nextShowBtn));
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToForm = () =>
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <Box className="store" dir="rtl">
      <Box className="topbar">
        الدفع عند الاستلام متوفر • توصيل سريع إلى 58 ولاية
      </Box>

      <Box className="hero">
        <Box className="visual">
          <img
            src={product.themImg}
            alt={product.name}
            width="1000"
            height="1000"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>

        <Box className="details">
          <Typography component="h1">{product.name}</Typography>

          <Box className="price">
            <span className="old">{product.hashprice} دج</span>

            <strong>
              {product.price} <small>دج</small>
            </strong>
          </Box>
        </Box>
      </Box>

      <Box className="content">
        <Box className="order-column" id="order-form">
          <Paper className="order-card">
            <Typography variant="h2">أكمل طلبك الآن</Typography>

            <Typography className="sub">
              أدخل معلوماتك وسنتصل بك لتأكيد الطلب
            </Typography>

            <Form id={product.id} />
          </Paper>
        </Box>

        <Box className="description">
          <img
            src={product.descImag1}
            alt="تفاصيل المنتج"
            width="1080"
            height="9720"
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>

      <Button
        onClick={goToForm}
        className={`mobile-cta ${showBtn ? "visible" : ""}`}
        startIcon={<ShoppingCart />}
      >
        اطلب الآن • الدفع عند الاستلام
      </Button>
    </Box>
  );
}
