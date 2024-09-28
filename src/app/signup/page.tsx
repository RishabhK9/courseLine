"use client";

import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "../fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GradientBackground from "../../components/GradientBackground";

const SignUp = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    year: "",
    major: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to home page or login page on successful signup
        router.push("/dashboard");
      } else {
        const data = await response.json();
        alert(data.error || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup");
    }
  };

  return (
    <GradientBackground>
      <div
        className={`min-h-screen ${plus_jakarta_sans_regular} flex flex-col`}
      >
        <nav className="flex justify-start px-6 py-4">
          <Link
            href="/"
            className="text-gray-800 text-2xl font-bold font-sans hover:text-[#eadaa2] transition duration-300"
          >
            honeycomb.
          </Link>
        </nav>

        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-md w-full px-6">
            <h1
              className={`text-[#0d3362] text-4xl ${plus_jakarta_sans_bold} text-center mb-8 font-bold`}
            >
              sign up now
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2] text-gray-800 placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2] text-gray-800 placeholder-gray-400"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2] text-gray-800 placeholder-gray-400"
                required
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2] text-gray-800 placeholder-gray-400"
                />
                <input
                  type="text"
                  name="major"
                  placeholder="Major"
                  value={formData.major}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2] text-gray-800 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#eadaa2] text-white py-2 rounded-full hover:bg-[#d8c88f] transition duration-300"
              >
                Create an Account
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <p className="text-center text-gray-600">
              Do you have an Account?{" "}
              <Link href="/login" className="text-[#eadaa2] hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default SignUp;