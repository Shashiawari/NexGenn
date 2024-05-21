import Navbar from "@/components/Navbar";
import Navwhite from "@/components/Navwhite";
import React from "react";
import "./page.css";
import CustomCursor from "@/components/customcursor";
import Footer from "@/components/Footer";
import Rocket from "./rocketcursor/rock";
const page = () => {
  return (
    <div className="servicesm">
      <svg
        width="785"
        className="taka"
        height="782"
        viewBox="0 0 185 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M184.5 77.5919C184.5 120.118 119.153 182 70 182C20.8467 182 0 120.118 0 77.5919C0 35.066 20.8467 0.591919 70 0.591919C119.153 0.591919 184.5 35.066 184.5 77.5919Z"
          fill="#C300D4"
          fillOpacity="0.24"
        />
      </svg>
      <Navwhite />
      <Rocket/>
      <div className="containers">
        <div className="row m-5 d-flex justify-content-center">
          <div className="service-conts  col-12 col-lg-6 mx-5  my-2">
          
            <h3>Custom Website Development</h3>
            <p>
              Our team of experienced developers will work closely with you to
              create a custom website that meets your unique needs and reflects
              your brand identity. Whether you're starting from scratch or need
              to revamp an existing site, we'll bring your vision to life with
              precision and creativity.
            </p>
          </div>

          <div className="service-conts col-12 col-lg-4  my-2">
            <h3>E-commerce Solutions</h3>
            <p>
              Ready to start selling online? We specialize in building
              e-commerce websites that are user-friendly, secure, and optimized
              for conversions. From setting up product pages to implementing
              payment gateways, we'll handle all the technical details so you
              can focus on growing your business.
            </p>
          </div>
          <div className="service-conts col-12 col-lg-4 mx-5  my-2">
            <h3>Mobile App Development</h3>
            <p>
              In today's mobile-centric world, having a mobile app can give your
              business a competitive edge. Our team can develop custom mobile
              applications for iOS and Android platforms, tailored to your
              specific requirements and designed to provide a seamless user
              experience.
            </p>
          </div>
          <div className="service-conts col-12 col-lg-6   my-2">
            <h3>SEO Optimization</h3>
            
            <p>
              Improve your website's visibility and attract more organic traffic
              with our SEO optimization services. We'll conduct thorough keyword
              research, optimize your site's on-page elements, and implement
              strategic link-building strategies to help you climb the search
              engine rankings and reach your target audience.
            </p>
          </div>
          <div className="service-conts col-12 col-lg-6 mx-5 my-2">
            <h3>Website Maintenance</h3>
            <p>
              Keeping your website up-to-date and secure is essential for its
              long-term success. Our website maintenance services include
              regular backups, software updates, security scans, and performance
              optimizations to ensure that your site runs smoothly and remains
              protected against threats.
            </p>
          </div>
          <div className="service-conts col-12 col-lg-4  my-2">
            <h3>24/7 Support</h3>
            <p>
              Need assistance with your website or application? Our dedicated
              support team is available 24/7 to address your concerns, answer
              your questions, and provide technical assistance whenever you need
              it. You can count on us to keep your online presence running
              smoothly around the clock.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
