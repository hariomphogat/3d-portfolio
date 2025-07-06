import React, { useRef, useState, useCallback, Suspense, lazy } from "react";
import TitleHeader from "../components/TitleHeader";
import emailjs from "@emailjs/browser";

// Lazy load the heavy 3D component
const ContactExperience = lazy(() =>
  import("../components/Models/AvatarModel/ContactExperience")
);

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setFormData({ name: "", email: "", message: "" });
      setSuccess("Message sent successfully ✅");
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      setSuccess("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          subtitle="📧 Contact Information"
        />

        <div className="mt-16 grid-12-cols">
          {/* Left: Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
                autoComplete="off"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your good name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img
                        src="/images/arrow-down.svg"
                        alt="arrow"
                        className="hidden md:block rotate-180"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </button>

                {success && (
                  <p
                    aria-live="polite"
                    className={`text-sm ${
                      success.includes("✅") ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {success}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right: 3D model */}
          <div className="xl:col-span-7 min-h-96 mx-5 md:mx-30">
            <div className="w-full h-full bg-transparent hover:cursor-grab rounded-3xl overflow-hidden">
              <Suspense
                fallback={
                  <div className="text-gray-300 bg-transparent">
                    Loading 3D model...
                  </div>
                }
              >
                <ContactExperience />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
