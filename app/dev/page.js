"use client";
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./page.css";
import Navbar from "@/components/Navbar";
import Card from "./card/card";
import CustomCursor2 from "@/components/customcursor2";

// Sample data structure (if you have real data, replace this with an API call)
const initialData = [
  {
    name: "John Doe",
    domain: "Full Stack Developer",
    experience: "3 years",
    links: [{ url: "https://example.com", label: "Portfolio" }],
    email: "john@example.com",
  },
  // Add more sample data as needed
];

const Page = () => {
  const [data, setData] = useState(initialData); // State for storing developer data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    experience: "",
    links: [{ url: "", label: "Portfolio" }], // Initialize as an array
  });
  const [message, setMessage] = useState(""); // State for feedback messages

  // Fetch data from the API when the component mounts (optional)
  useEffect(() => {
    const fetchDevs = async () => {
      const response = await fetch("/api/regdev"); // Replace with your API route
      const result = await response.json();
      if (result.success) {
        setData(result.devs);
      } else {
        console.error(result.error);
      }
    };

    fetchDevs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLinksChange = (index, e) => {
    const { value } = e.target;
    setFormData((prev) => {
      const updatedLinks = [...prev.links];
      updatedLinks[index].url = value;
      return { ...prev, links: updatedLinks };
    });
  };

  const handleAddLink = () => {
    setFormData((prev) => ({
      ...prev,
      links: [...prev.links, { url: "", label: "Portfolio" }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/regdev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Developer registered successfully!");
        setFormData({
          name: "",
          email: "",
          domain: "",
          experience: "",
          links: [{ url: "", label: "Portfolio" }],
        }); // Clear the form
        // Optionally, you might want to fetch the updated list of developers
        const fetchDevs = async () => {
          const response = await fetch("/api/regdevs");
          const result = await response.json();
          if (result.success) {
            setData(result.devs);
          } else {
            console.error(result.error);
          }
        };
        fetchDevs();
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to register developer.");
    }
  };

  return (
    <div className="devs">
      <Navbar />
      <CustomCursor2/>
      <div className="c-t">
        {data.map((person, index) => (
          <Card
            key={index}
            name={person.name}
            domain={person.domain}
            experience={person.experience}
            links={person.links}
            email={person.email}
          />
        ))}
      </div>
      <div className="f-cont">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Register</p>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Domain Field */}
          <div className="form-group">
            <label htmlFor="domain">Domain</label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              placeholder="Enter your domain (e.g., Full Stack Developer)"
              required
            />
          </div>
          {/* Experience Field */}
          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter your experience (e.g., 5 years)"
              required
            />
          </div>
          {/* Portfolio Links */}
          <div className="form-group">
            <label htmlFor="portfolio">Portfolio Links</label>
            {formData.links.map((link, index) => (
              <div key={index}>
                <input
                  type="url"
                  name={`portfolio-${index}`}
                  value={link.url}
                  onChange={(e) => handleLinksChange(index, e)}
                  placeholder="Enter your portfolio link"
                />
              </div>
            ))}
            <button type="button" onClick={handleAddLink}>
              Add Another Link
            </button>
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
          {message && <p className="message">{message}</p>}{" "}
          {/* Display feedback message */}
        </form>
      </div>
    </div>
  );
};

export default Page;
