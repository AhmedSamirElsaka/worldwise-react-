import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <div>Worldwise</div>
      <Link to="/pricing">Pricing</Link>
      <Link to="/product">Product</Link>
    </div>
  );
}
