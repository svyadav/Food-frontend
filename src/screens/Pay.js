import React from "react";
import { useNavigate } from "react-router-dom";
import cardImage from "../Image/cash-payment.png";
import StripeCheckout from "react-stripe-checkout";
const Pay = () => {
  const navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull...!ThankYou for booking");
    navigate("/login");
  };
  return (
    <>
      <div>
        <StripeCheckout
          label="Pay your amount"
          name="Sachin's Food"
          shippingAddress
          billingAddress
          description={`Pay your amount`}
          panelLabel="Pay Money"
          image={cardImage}
          // amount={finalAmout}
          // currency="INR"
          token={onToken}
          stripeKey="pk_test_51N5tyYSAO3QZITEFuYB3qDqeZjbh6dV0Lg3yUKfAiunKnkvljrSX4lHJfxiWLJnynDwaXCE5Fkpmimeew8Zdfx8j00ehDu39Fq"
        />
      </div>
    </>
  );
};

export default Pay;
