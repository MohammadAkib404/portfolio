import { ArrowRight, ChevronRight, Mail } from "lucide-react";
// import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", e.target, "PUBLIC_KEY").then(
      () => alert("Message sent successfully"),
      () => alert("Something went wrong")
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="w-screen px-3 sm:px-8 py-20 space-y-15">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="font-semibold text-3xl">Get In Touch</h2>
        <p className="text-muted sm:text-lg leadign-relaxed tracking-wide">
          I'd love to hear from you!, I am always open to new opportunities. If you have any questions or feedback please use the form below. Feel free to
          contact me.
        </p>
      </div>
      <div className="bg-layer shadow-msm rounded-lg max-w-3xl mx-auto space-y-8 px-4 sm:px-8 py-12">
        <div className="grid grid-cols-6 grid-rows-2 gap-3">
          <a href="mailto:akibo7394@gmail.com?subject=Portfolio%20Inquiry" className="col-span-3 bg-bg px-4 py-2 rounded-lg border border-border flex items-center gap-2 transition">
            <Mail size={16} /> <span>akibo7394@gmail.com</span> <ArrowRight />
          </a>
          <a href="https://wa.me/916205573166?text=Hi%20Akibo,%20I%20saw%20your%20portfolio" target="_blank" className="col-span-3 bg-bg px-4 py-2 rounded-lg border border-border flex items-center gap-2 transition">
            <img src="./icons/whatsapp.svg" className="w-4 h-4" /> WhatsApp
          </a>
          <a href="https://github.com/MohammadAkib404" target="_blank" rel="noopener noreferrer" className="col-span-2 bg-bg px-4 py-2 rounded-lg border border-border flex items-center gap-2 transition">
            <img src="./icons/github.svg" className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mdakib7394/" target="_blank" rel="noopener noreferrer" className="col-span-2 bg-bg px-4 py-2 rounded-lg border border-border flex items-center gap-2 transition">
            <img src="./icons/linkedin.svg" className="w-4 h-4 grayscale" /> LinkedIn
          </a>
          <a href="https://www.linkedin.com/in/mdakib7394/" target="_blank" rel="noopener noreferrer" className="col-span-2 bg-bg px-4 py-2 rounded-lg border border-border flex items-center gap-2 transition">
            <img src="./icons/linkedin.svg" className="w-4 h-4 grayscale" /> LinkedIn
          </a>
        </div>

        <p className="text-center text-sm text-muted-bg">Or send a message</p>

        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full rounded-md border border-border bg-tranparent px-4 py-3 text-sm outline-none focus:ring focus:ring-primary"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full rounded-md border bg-transparent px-4 py-3 text-sm outline-none focus:ring focus:ring-primary"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary/90 text-bg px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
