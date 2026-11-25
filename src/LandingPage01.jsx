import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Form from "./components/Form";
import { data } from "./data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LandingPage01() {
  const { id } = useParams();
  const product = data.find((item) => item.id === (id || "l-1")) || data[0];
  const [showBtn, setShowBtn] = useState(false);

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
      <Box
        className="description landing-art"
        sx={{
          width: "100%",
          lineHeight: 0,
          overflow: "hidden",
          border: "1px solid rgba(185,108,32,.1)",
          borderRadius: "16px",
          background: "#fff",
          boxShadow: "0 10px 28px rgba(72,43,18,.07)",
        }}
      >
        <Box className="art-lqip">
          <img
            src={product.descImag1}
            alt="تفاصيل المنتج"
            width="1080"
            height="100%"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              display: "block",
              width: "100%",

              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      <Box width="100%" className="hero" display="flex" justifyContent="center">
        <Box className="details">
          <Typography component="h1">{product.name}</Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.3rem", md: "2.2rem" },
              fontWeight: 800,
              display: "inline-block",
              animation: "pulseTitle 1.5s ease-in-out infinite",

              "@keyframes pulseTitle": {
                "0%, 100%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.08)",
                },
              },
            }}
          >
            {product.slug}
          </Typography>

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
          <Form id={product.id} />
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
