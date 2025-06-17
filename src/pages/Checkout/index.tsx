import { useState } from "react";
import { useTranslation } from "../../hooks";
import { useCart } from "../../hooks";
import { formatPrice } from "../../utils";
import { Button } from "../../components/common";
import { Footer } from "../../components/layout";

const Checkout = () => {
  const { translate } = useTranslation();
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    sameAddress: false,
    saveInfo: false,
    paymentMethod: "pix",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 lg:col-span-4 md:order-last">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="flex justify-between items-center mb-4 text-xl font-semibold text-gray-800">
              <span>{translate("checkout-cart-title")}</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {cartItems.length} {translate("checkout-cart-title")}
              </span>
            </h4>
            <ul className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                >
                  <div>
                    <h6 className="text-gray-800 font-medium">{item.title}</h6>
                    <small className="text-gray-500">Brief description</small>
                  </div>
                  <span className="text-gray-600">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
              {/* TODO: <li className="flex justify-between items-center py-2 bg-gray-50 px-4 rounded">
                <div className="text-green-600">
                  <h6 className="font-medium">
                    {translate("checkout-promo-code")}
                  </h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-green-600">−$5</span>
              </li> */}
              <li className="flex justify-between items-center py-2 font-semibold">
                <span>{translate("total")}</span>
                <strong>{formatPrice(total)}</strong>
              </li>
            </ul>

            <form className="bg-gray-50 p-4 rounded-lg">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={translate("checkout-promo-code")}
                />
                <Button type="button" variant="secondary">
                  {translate("checkout-redeem")}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-6">
              {translate("checkout-billing-title")}
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-first-name")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-last-name")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-username")}
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      @
                    </span>
                    <input
                      type="text"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-email")}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-address")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-address2")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="address2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-country")}
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="MX">Mexico</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-state")}
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="CA">California</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {translate("checkout-zip")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    id="sameAddress"
                    name="sameAddress"
                    checked={formData.sameAddress}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="sameAddress"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {translate("checkout-same-address")}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="saveInfo"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {translate("checkout-save-info")}
                  </label>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {translate("checkout-payment-title")}
              </h4>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    id="pix"
                    name="paymentMethod"
                    value="pix"
                    checked={formData.paymentMethod === "pix"}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    htmlFor="pix"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {translate("checkout-pix")}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    id="credit"
                    name="paymentMethod"
                    value="credit"
                    checked={formData.paymentMethod === "credit"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="credit"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {translate("checkout-credit-card")}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    id="debit"
                    name="paymentMethod"
                    value="debit"
                    checked={formData.paymentMethod === "debit"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="debit"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {translate("checkout-debit-card")}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {translate("checkout-paypal")}
                  </label>
                </div>
              </div>

              {formData.paymentMethod === "credit" ||
              formData.paymentMethod === "debit" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label
                      htmlFor="cardName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {translate("checkout-card-name")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                    <small className="text-gray-500">
                      {translate("full-name-card")}
                    </small>
                  </div>

                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {translate("checkout-card-number")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="expDate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {translate("checkout-expiration")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="expDate"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {translate("checkout-cvv")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ) : null}

              <hr className="my-6 border-gray-200" />

              <Button size="xl">{translate("checkout-continue")}</Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
