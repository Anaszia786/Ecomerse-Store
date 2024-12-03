import React from "react";

const Payment = () => {
  return (
    <body to={"/payment"} className="flex items-center justify-center min-h-screen w-screen bg-gray-100 text-gray-800 p-8">
      {/* <!-- Component Start --> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
        {/* <!-- Payment Method Section --> */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium">Payment Method</h2>
          <div className="bg-white rounded mt-4 shadow-lg">
            {/* <!-- PayPal Option --> */}
            <div className="flex items-center px-8 py-5">
              <input
                id="paypal"
                className="appearance-none w-4 h-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-600"
                type="radio"
                name="payment"
              />
              <label for="paypal" className="text-sm font-medium ml-4">
                PayPal
              </label>
            </div>
            <div className="border-t">
              {/* <!-- Credit Card Option --> */}
              <div className="flex items-center px-8 py-5">
                <input
                  id="credit-card"
                  className="appearance-none w-4 h-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-600"
                  type="radio"
                  name="payment"
                />
                <label for="credit-card" className="text-sm font-medium ml-4">
                  Credit Card
                </label>
              </div>
              {/* <!-- Credit Card Details --> */}
              <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                <div className="col-span-2">
                  <label for="cardNumber" className="text-xs font-semibold">
                    Card number
                  </label>
                  <input
                    id="cardNumber"
                    className="h-10 border rounded px-4 w-full text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div>
                  <label for="expiryDate" className="text-xs font-semibold">
                    Expiry Date
                  </label>
                  <input
                    id="expiryDate"
                    className="h-10 border rounded px-4 w-full text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label for="cvv" className="text-xs font-semibold">
                    CVC/CVV
                  </label>
                  <input
                    id="cvv"
                    className="h-10 border rounded px-4 w-full text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="password"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Purchase Summary Section --> */}
        <div>
          <h2 className="text-sm font-medium">Purchase Summary</h2>
          <div className="bg-white rounded mt-4 shadow-lg py-6">
            <div className="px-8">
              <div className="flex items-end">
                <select
                  className="text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="billing-option"
                  id="billing-option"
                >
                  <option value="monthly">Product (Billed Monthly)</option>
                  <option value="annually">Product (Billed Annually)</option>
                </select>
                <span className="text-sm ml-auto font-semibold">$20</span>
                <span className="text-xs text-gray-500 mb-1">/mo</span>
              </div>
              <span className="text-xs text-gray-500 mt-2 block">
                Save 20% with annual billing
              </span>
            </div>
            <div className="px-8 mt-4">
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold">Tax</span>
                <span className="text-sm text-gray-500 mb-1">10%</span>
              </div>
            </div>
            <div className="px-8 mt-4 border-t pt-4">
              <div className="flex items-end justify-between">
                <span className="font-semibold">Today you pay (AUD)</span>
                <span className="font-semibold">$0</span>
              </div>
              <span className="text-xs text-gray-500 mt-2 block">
                After 1 month free: $22/mo.
              </span>
            </div>
            {/* <!-- Terms and Conditions --> */}
            <div className="flex items-center px-8 mt-8">
              <input
                id="termsConditions"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-600"
              />
              <label
                for="termsConditions"
                className="text-xs text-gray-500 ml-2"
              >
                I agree to the terms and conditions.
              </label>
            </div>
            {/* <!-- Buttons --> */}
            <div className="flex flex-col px-8 pt-4">
              <button className="bg-blue-600 text-sm font-medium w-full h-10 rounded text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                Start Subscription
              </button>
              <button className="text-xs text-blue-500 mt-3 underline">
                Have a coupon code?
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Component End --> */}
    </body>
  );
};

export default Payment;
