import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_r9bj6oq
// service_f2eywl1
// 1HT__prKq1dTJ5MwL

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_f2eywl1",
        "template_r9bj6oq",
        {
          from_name: form.name,
          to_name: "Qadeer",
          from_email: form.email,
          from_phone: form.phone,
          to_email: "muhammadqadeerr456@gmail.com",
          message: form.message,
        },
        "1HT__prKq1dTJ5MwL"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 sm:gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full xl:w-1/2 bg-black-100 p-6 sm:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Phone Number
            </span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="What's your phone number?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full xl:w-1/2 rounded-2xl bg-tertiary/60 ring-1 ring-white/10 p-6 sm:p-8 flex flex-col justify-center min-h-[320px] md:min-h-[420px]"
      >
        <h3 className="text-white text-2xl font-bold mb-3">Let’s collaborate</h3>
        <p className="text-secondary mb-4 sm:mb-6 max-w-prose">
          I’m available for freelance and full-time opportunities. If you have a
          project or role that fits my skills, feel free to reach out.
        </p>
        <ul className="text-secondary space-y-1 md:space-y-2 list-disc list-inside mb-6 sm:mb-8">
          <li>Full‑stack development (.NET, Angular, React)</li>
          <li>API design, integrations, and databases</li>
          <li>Performance optimization and UI improvements</li>
        </ul>
        {/* quick facts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-3 mb-6 sm:mb-8 text-secondary">
          <div className="h-full rounded-lg bg-black-100/60 ring-1 ring-white/10 p-3 flex flex-col gap-1">
            <p className="text-white font-semibold leading-snug">Availability</p>
            <p className="text-sm leading-snug break-words hyphens-auto">Freelance & full‑time</p>
          </div>
          <div className="h-full rounded-lg bg-black-100/60 ring-1 ring-white/10 p-3 flex flex-col gap-1">
            <p className="text-white font-semibold leading-snug">Response time</p>
            <p className="text-sm leading-snug break-words hyphens-auto">Within 24 hours</p>
          </div>
          <div className="h-full rounded-lg bg-black-100/60 ring-1 ring-white/10 p-3 flex flex-col gap-1">
            <p className="text-white font-semibold leading-snug">Location</p>
            <p className="text-sm leading-snug break-words hyphens-auto">PK (remote‑friendly)</p>
          </div>
          <div className="h-full rounded-lg bg-black-100/60 ring-1 ring-white/10 p-3 flex flex-col gap-1">
            <p className="text-white font-semibold leading-snug">Tech focus</p>
            <p className="text-sm leading-snug break-words hyphens-auto">• .NET • Angular • React • Django • Azure Integrations</p>
          </div>
        </div>
        <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
          <p className="text-secondary">
            Email:
            <a href="mailto:muhammadqadeerr456@gmail.com" className="ml-2 text-white hover:underline break-words">
              muhammadqadeerr456@gmail.com
            </a>
          </p>
          <p className="text-secondary">
            Phone:
            <a href="tel:+923225481756" className="ml-2 text-white hover:underline">
              +92‑322‑5481756
            </a>
          </p>
          <a
            href="#projects"
            className="bg-[#10B981] text-black font-semibold px-5 py-3 rounded-lg shadow-card hover:opacity-90 w-full text-center"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
