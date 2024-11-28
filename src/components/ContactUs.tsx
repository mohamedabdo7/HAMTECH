import { FC } from "react";
import CustomButton from "./UI/CustomButton";

const ContactUs: FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-deep-blue)" }}
          >
            Contact Us
          </h2>
          <p
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: "var(--color-dark-charcoal)" }}
          >
            Service description example: To buy a plot to build your house, this
            requires documenting the sale and purchase process in the notarial
            offices or notary services to register the property in your name.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Left Column: Form */}
          <div className="md:col-span-2 ">
            <form className="rounded-lg space-y-2">
              {/* Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Type your Full Name"
                    className="w-full p-3 border bg-transparent border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Type your Email"
                    className="w-full p-3 border bg-transparent border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <div className="flex">
                  {/* <span className="inline-flex items-center px-3 bg-gray-100 border border-blue-900 rounded-l-lg text-gray-600">
                    +966
                  </span> */}
                  <input
                    type="text"
                    id="phone"
                    placeholder="00 000 0000"
                    className="w-full p-3 border bg-transparent border-blue-900 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Text Area */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  How Can We Help You?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Placeholder text"
                  className="w-full p-3 border bg-transparent border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Information */}
          <div className="p-8 rounded-lg border border-blue-900">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--color-deep-blue)" }}
            >
              Contact US
            </h3>
            <ul className="space-y-6">
              {/* Phone */}
              <li className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  <span className="text-blue-600 text-xl">
                    <i className="fas fa-phone"></i>
                  </span>
                  <div>
                    <span className="block font-semibold text-gray-700">
                      Phone
                    </span>
                    <span className="text-gray-600">+966 553939759</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("+966 553939759")}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </li>

              {/* Email */}
              <li className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  <span className="text-blue-600 text-xl">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <div>
                    <span className="block font-semibold text-gray-700">
                      Email
                    </span>
                    <span className="text-gray-600">
                      vision@hmatechinvestment.com
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard("vision@hmatechinvestment.com")
                  }
                  className="text-blue-600 hover:text-blue-800"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </li>

              {/* Location */}
              <li className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  <span className="text-blue-600 text-xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <div>
                    <span className="block font-semibold text-gray-700">
                      Location
                    </span>
                    <span className="text-gray-600">Riyadh</span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com?q=Riyadh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <div>
            <CustomButton
              text="Send"
              style={{
                backgroundColor: "var(--color-custom-blue)",
                color: "white",
              }}
              className="hover:bg-blue-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
