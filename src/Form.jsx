import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({});
  const [result, setResult] = useState("Send");
  const [captchaToken, setCaptchaToken] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors = {
    name: name.trim() === "" ? "Name is required" : "",
    email:
      email.trim() === ""
        ? "Email is required"
        : !emailRegex.test(email)
        ? "Enter a valid email"
        : "",
    message: message.trim() === "" ? "Message is required" : "",
  };

  const isFormValid = !errors.name && !errors.email && !errors.message && captchaToken;

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!captchaToken) {
      setResult("Please complete the captcha");
      return;
    }

    setResult("Sending....");

    try {
      const formData = new FormData();
			const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      formData.append("access_key", accessKey);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("h-captcha-response", captchaToken);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Successfully Sent!");
        setName("");
        setEmail("");
        setMessage("");
        setTouched({});
        setCaptchaToken("");
				setTimeout(() => {
					setResult("Send");
				}, 5000);
      } else {
        setResult(data.message || "Error sending form");
				setTimeout(() => {
					setResult("");
				}, 3000);
      }
    } catch (error) {
      setResult("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 flex flex-col">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="contact-me-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched({ ...touched, name: true })}
          required
        />
        {touched.name && errors.name && (
          <p className="mt-1 text-xs text-orange-400">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contact-me-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched({ ...touched, email: true })}
          required
        />
        {touched.email && errors.email && (
          <p className="mt-1 text-xs text-orange-400">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Message"
          rows="6"
          className="contact-me-input resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched({ ...touched, message: true })}
          required
        ></textarea>
        {touched.message && errors.message && (
          <p className="text-xs text-orange-400">{errors.message}</p>
        )}
      </div>

      <HCaptcha
        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        theme="dark"
        reCaptchaCompat={false}
        onVerify={(token) => setCaptchaToken(token)}
        onExpire={() => setCaptchaToken("")}
      />

      <div>
        <button
          id="submit-btn"
          type="submit"
          disabled={!isFormValid}
          className={`contact-me-button w-fit font-normal inline-flex items-center gap-2 transition
          ${
            isFormValid
              ? "opacity-100 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }
          `}
        >
          {result}
          <svg
            className="w-4 h-4 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1.77,6.215A2.433,2.433,0,0,0,0,8.611a2.474,2.474,0,0,0,.771,1.71L4,13.548V20h6.448l3.265,3.267a2.4,2.4,0,0,0,1.706.713,2.438,2.438,0,0,0,.618-.08,2.4,2.4,0,0,0,1.726-1.689L24-.016ZM3.533,8.856l13.209-3.7L7,14.9V12.326Zm11.6,11.6L11.675,17H9.1l9.734-9.741Z" />
          </svg>
        </button>
      </div>
    </form>
  );
}