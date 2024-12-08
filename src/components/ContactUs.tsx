import { FC, useState } from "react";
import CustomButton from "./UI/CustomButton";
import api from "../services/api";
interface ContactUsProps {
  contactUsData: {
    email: string;
    phone: string[];
    location: string;
    locationUrl: string;
    body: string;
    social: { platform: string; link: string }[];
  };
}

const ContactUs: FC<ContactUsProps> = ({ contactUsData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("All fields are required.");
      setTimeout(() => setError(null), 2000); // Clear error after 2 seconds
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      await api.post("/contact_us/v1/website", formData);
      setSuccessMessage("Your message has been sent successfully!");
      setTimeout(() => setSuccessMessage(null), 2000); // Clear success message after 2 seconds
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
    } catch (err) {
      console.error("Error sending contact message:", err);
      setError("Failed to send your message. Please try again later.");
      setTimeout(() => setError(null), 2000); // Clear error after 2 seconds
    } finally {
      setIsSubmitting(false);
    }
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
            {contactUsData?.body}
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Left Column: Form */}
          <div className="md:col-span-2 ">
            <form className="rounded-lg space-y-2" onSubmit={handleSubmit}>
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
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Placeholder text"
                  className="w-full p-3 border bg-transparent border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
            </form>
            {/* Error Message */}
            {error && (
              <p className="text-red-600 transition-opacity duration-500">
                {error}
              </p>
            )}

            {/* Success Message */}
            {successMessage && (
              <p className="text-green-600 transition-opacity duration-500">
                {successMessage}
              </p>
            )}
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
                  {/* <span className="text-blue-600 text-xl">
                    <i className="fas fa-phone"></i>
                  </span> */}
                  <div>
                    <span className="block font-semibold text-gray-700">
                      <span className="text-blue-600 text-xl">
                        <i className="fas fa-phone"></i>
                      </span>
                      <span className="ml-2">Phone</span>
                    </span>
                    {/* <span className="text-gray-600">+966 553939759</span> */}
                    {contactUsData?.phone?.map((phone, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-start space-x-4">
                          {/* <span className="text-blue-600 text-xl">
                            <i className="fas fa-phone"></i>
                          </span> */}
                          <div>
                            <span className="text-gray-600">{phone}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(phone)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <i className="fas fa-copy"></i>
                        </button>
                      </li>
                    ))}
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  {/* <span className="text-blue-600 text-xl">
                    <i className="fas fa-envelope"></i>
                  </span> */}
                  <div>
                    <span className="block font-semibold text-gray-700">
                      <span className="text-blue-600 text-xl">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="ml-2">Email</span>
                    </span>
                    <span className="text-gray-600">
                      {contactUsData?.email}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard("vision@hmatechinvestment.com")
                    }
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  {/* <span className="text-blue-600 text-xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </span> */}
                  <div>
                    <span className="block font-semibold text-gray-700">
                      <span className="text-blue-600 text-xl">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <span className="ml-2">Location</span>
                    </span>
                    <span className="text-gray-600">
                      {contactUsData?.location}
                    </span>
                  </div>
                  <a
                    href={contactUsData?.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <div>
            <CustomButton
              text="Send"
              isLoading={isSubmitting}
              loadingText="Sending..."
              style={{
                backgroundColor: "var(--color-custom-blue)",
                color: "white",
              }}
              className="hover:bg-blue-700"
              type="submit"
              onClick={(e: any) => {
                e.preventDefault(); // Prevent default form submission
                handleSubmit(e); // Call the actual submission logic
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

// import { FC } from "react";
// import CustomButton from "./UI/CustomButton";

// const ContactUs: FC = () => {
//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     alert(`${text} copied to clipboard!`);
//   };

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2
//             className="text-4xl font-bold mb-4"
//             style={{ color: "var(--color-deep-blue)" }}
//           >
//             Contact Us
//           </h2>
//           <p
//             className="text-lg leading-relaxed max-w-3xl mx-auto"
//             style={{ color: "var(--color-dark-charcoal)" }}
//           >
//             We value your feedback and are here to assist you. Whether you have
//             questions, suggestions, or need support, feel free to reach out to
//             us. Our team is ready to provide the help you need. Simply fill out
//             the contact form, and we’ll get back to you as soon as possible.
//           </p>
//         </div>

//         {/* Contact Form Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 ">
//           {/* Left Column: Form */}
//           <div className="md:col-span-2 ">
//             <form className="rounded-lg space-y-2">
//               {/* Full Name and Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="fullName"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     placeholder="Type your Full Name"
//                     className="w-full p-3 border bg-transparent border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Type your Email"
//                     className="w-full p-3 border bg-transparent border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//               </div>

//               {/* Phone */}
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Phone
//                 </label>
//                 <div className="flex">
//                   {/* <span className="inline-flex items-center px-3 bg-gray-100 border border-blue-900 rounded-l-lg text-gray-600">
//                     +966
//                   </span> */}
//                   <input
//                     type="text"
//                     id="phone"
//                     placeholder="00 000 0000"
//                     className="w-full p-3 border bg-transparent border-blue-900 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//               </div>

//               {/* Text Area */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   How Can We Help You?
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   placeholder="Placeholder text"
//                   className="w-full p-3 border bg-transparent border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 ></textarea>
//               </div>
//             </form>
//           </div>

//           {/* Right Column: Contact Information */}
//           <div className="p-8 rounded-lg border border-blue-900">
//             <h3
//               className="text-2xl font-bold mb-6"
//               style={{ color: "var(--color-deep-blue)" }}
//             >
//               Contact US
//             </h3>
//             <ul className="space-y-6">
//               {/* Phone */}
//               <li className="flex items-center justify-between">
//                 <div className="flex items-start space-x-4">
//                   <span className="text-blue-600 text-xl">
//                     <i className="fas fa-phone"></i>
//                   </span>
//                   <div>
//                     <span className="block font-semibold text-gray-700">
//                       Phone
//                     </span>
//                     <span className="text-gray-600">+966 553939759</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => copyToClipboard("+966 553939759")}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <i className="fas fa-copy"></i>
//                 </button>
//               </li>

//               {/* Email */}
//               <li className="flex items-center justify-between">
//                 <div className="flex items-start space-x-4">
//                   <span className="text-blue-600 text-xl">
//                     <i className="fas fa-envelope"></i>
//                   </span>
//                   <div>
//                     <span className="block font-semibold text-gray-700">
//                       Email
//                     </span>
//                     <span className="text-gray-600">
//                       vision@hmatechinvestment.com
//                     </span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() =>
//                     copyToClipboard("vision@hmatechinvestment.com")
//                   }
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <i className="fas fa-copy"></i>
//                 </button>
//               </li>

//               {/* Location */}
//               <li className="flex items-center justify-between">
//                 <div className="flex items-start space-x-4">
//                   <span className="text-blue-600 text-xl">
//                     <i className="fas fa-map-marker-alt"></i>
//                   </span>
//                   <div>
//                     <span className="block font-semibold text-gray-700">
//                       Location
//                     </span>
//                     <span className="text-gray-600">Riyadh</span>
//                   </div>
//                 </div>
//                 <a
//                   href="https://maps.google.com?q=Riyadh"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <i className="fas fa-external-link-alt"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <CustomButton
//               text="Send"
//               style={{
//                 backgroundColor: "var(--color-custom-blue)",
//                 color: "white",
//               }}
//               className="hover:bg-blue-700"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
