"use client";

import { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { businessInfo } from "@/data/businessInfo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    contactMethod: "phone",
    product: "",
    marketing: false,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Contact Method: ${formData.contactMethod}
Product Interest: ${formData.product || "Not specified"}
Marketing Opt-in: ${formData.marketing ? "Yes" : "No"}

Message:
${formData.message || "No message provided"}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:${businessInfo.email}?subject=Contact Form Submission from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation
    alert("Thank you! Your email client will open. Please send the email to complete your request.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Request a Call Back"
          subtitle="Fill out the form below and we'll get back to you as soon as possible"
          centered
        />

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="contactMethod"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Preferred Method of Contact *
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                required
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="text">Text Message</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="product"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Product Interest
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a product category</option>
                <option value="sectionals">Sectionals</option>
                <option value="beds">Beds</option>
                <option value="sofa-sets">Sofa Sets</option>
                <option value="outdoor">Outdoor Furniture</option>
                <option value="wood">Wood Furniture</option>
                <option value="dining">Dining Rooms & Coffee Tables</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={formData.marketing}
                onChange={handleChange}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="marketing" className="ml-2 text-sm text-gray-700">
                Sign up for marketing specials and updates
              </label>
            </div>

            <button type="submit" className="btn-primary w-full">
              Request a Call Back
            </button>
          </form>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-dark mb-4">
              Prefer to Call Us?
            </h3>
            <a
              href="tel:(904) 484-8434"
              className="text-2xl font-bold text-primary hover:underline"
            >
              (904) 484-8434
            </a>
            <p className="text-gray-600 mt-2">Mon - Sun | 9:00 am - 9:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
