import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Button } from "../common";
import { useTranslation } from "../../hooks";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { translate } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <footer>
      {isHomePage && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {translate("contact-title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">
                {translate("contact-description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaPhone size={20} className="mr-2" />{" "}
                  {translate("phone-number")}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaEnvelope size={20} className="mr-2" /> {translate("email")}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaFacebook size={20} className="mr-2" />{" "}
                  <a
                    href="https://facebook.com/marcenariaexpress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800"
                  >
                    {translate("facebook-page")}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaInstagram size={20} className="mr-2" />{" "}
                  <a
                    href="https://instagram.com/marcenariaexpress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800"
                  >
                    {translate("instagram-page")}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaXTwitter size={20} className="mr-2" />{" "}
                  <a
                    href="https://x.com/marcenariaexpress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800"
                  >
                    {translate("twitter-page")}
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {translate("contact-form-name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {translate("contact-form-email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {translate("contact-form-message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
              <Button type="submit" size="lg">
                {translate("contact-form-submit")}
              </Button>
            </form>
          </div>
        </section>
      )}
      <div className="bg-gray-100 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            {`© ${new Date().getFullYear()} ${translate("title")} | ${translate(
              "home-page-subtitle"
            )}`}
          </p>
          <p className="text-gray-500 text-xs mt-1">
            {`${translate("created-by")} Fernando Hidalgo Rosabal | ${translate(
              "powered-by"
            )} React`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
