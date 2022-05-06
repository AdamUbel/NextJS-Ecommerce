import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runConfetti } from "../lib/utilities";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You For Your Order!</h2>
        <p className="email-msg">Order Confirmation Sent To Provided Email Address.</p>
        <p className="description">
          If you have any questions or concerns, please email
          <a className="email" href="mailto:orders@development-test.com">
            orders@development-test.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn" width={300}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
