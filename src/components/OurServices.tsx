import React, { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Service {
  icon: string;
  title: string;
  body: string;
}

interface OurServicesProps {
  servicesData: {
    body: string;
    services: Service[];
  };
}

const OurServices: FC<OurServicesProps> = ({ servicesData }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Ensures that animation happens every time section enters the viewport
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-custom-blue)" }}
          >
            Our Services
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-JetBlack)" }}
          >
            {servicesData?.body || "Default services description."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData?.services.map((service: any, index) => (
            <div
              key={service.id}
              className="p-4"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`} // Staggering the animations
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-2 flex justify-center items-center">
                <img
                  src={import.meta.env.VITE_HMA_URL + service.icon}
                  alt={service.title}
                  className="w-10 h-10"
                  crossOrigin="anonymous"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              {/* Title */}
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "var(--color-custom-blue)" }}
              >
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

// import { FC, useEffect } from "react";
// import {
//   customSoftwareIcon,
//   mobileAppIcon,
//   iotIntegrationIcon,
//   cloudDevOpsIcon,
//   uiUxIcon,
//   dataScienceIcon,
//   cybersecurityIcon,
//   apiIntegrationIcon,
//   technicalConsultancyIcon,
// } from "../assets/images"; // Update path based on your folder structure
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Data for services
// const servicesData = [
//   {
//     icon: customSoftwareIcon,
//     title: "Custom Software Development",
//     description:
//       "We build tailored software solutions to meet your specific business needs.",
//   },
//   {
//     icon: mobileAppIcon,
//     title: "Mobile Application Development",
//     description:
//       "Native and cross-platform apps that deliver seamless user experiences.",
//   },
//   {
//     icon: iotIntegrationIcon,
//     title: "IoT Integration and Smart Solutions",
//     description:
//       "Specialized in smart home systems, device SDK integration, and data-driven IoT platforms.",
//   },
//   {
//     icon: cloudDevOpsIcon,
//     title: "Cloud Solutions and DevOps",
//     description:
//       "DevOps pipelines to ensure continuous delivery and deployment.",
//   },
//   {
//     icon: uiUxIcon,
//     title: "UI/UX Design",
//     description:
//       "From wireframes to fully interactive prototypes, we create designs that engage and convert.",
//   },
//   {
//     icon: dataScienceIcon,
//     title: "Data Science and Analytics",
//     description:
//       "Services include predictive modeling, machine learning, and BI dashboard development.",
//   },
//   {
//     icon: cybersecurityIcon,
//     title: "Cybersecurity Services",
//     description:
//       "Includes penetration testing, secure coding practices, and compliance audits.",
//   },
//   {
//     icon: apiIntegrationIcon,
//     title: "API and System Integrations",
//     description:
//       "Seamless integration of third-party APIs and tools to expand your capabilities.",
//   },
//   {
//     icon: technicalConsultancyIcon,
//     title: "Technical Consultancy",
//     description:
//       "From ideation to implementation, we provide guidance at every stage of your project.",
//   },
// ];

// const OurServices: FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false, // Ensures that animation happens every time section enters the viewport
//     });
//   }, []);

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2
//             className="text-4xl font-bold mb-4"
//             style={{ color: "var(--color-custom-blue)" }}
//           >
//             Our Services
//           </h2>
//           <p
//             className="text-lg leading-relaxed max-w-2xl mx-auto"
//             style={{ color: "var(--color-JetBlack)" }}
//           >
//             We empower businesses with IoT-enabled solutions, connecting devices
//             and automating workflows. With specialization in smart home systems,
//             SDK integration, and data-driven IoT platforms, we transform your
//             vision into a connected reality.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {servicesData.map((service, index) => (
//             <div
//               key={index}
//               className="p-4"
//               data-aos="fade-up"
//               data-aos-delay={`${index * 150}`} // Staggering the animations
//             >
//               {/* Icon */}
//               <div className="w-16 h-16 mb-2 flex justify-center items-center">
//                 <img
//                   src={service.icon}
//                   alt={service.title}
//                   className="w-10 h-10"
//                 />
//               </div>
//               {/* Title */}
//               <h3
//                 className="text-xl font-bold mb-1"
//                 style={{ color: "var(--color-custom-blue)" }}
//               >
//                 {service.title}
//               </h3>
//               {/* Description */}
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;
