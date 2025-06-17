import { Mail, MapPin, Send } from "lucide-react";
import { cn } from "../lib/utils";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discuss new ideas, opportunities, and challenges.
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="mailto:vincent.chaussepied@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vincent.chaussepied@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    London, UK
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs ">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form className="space-y-6" action="">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-hidden focus:ring-primary focus:ring-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="John.Doe@gmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-hidden focus:ring-primary focus:ring-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello, I would like to discuss..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-hidden focus:ring-primary focus:ring-2 resize-none h-32"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
