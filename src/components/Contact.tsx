import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();
  const { elementRef, isVisible } = useScrollReveal({ triggerOnce: true });
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !form.current) return;

    // Read EmailJS configuration from env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Guard: missing env vars
    const missing: string[] = [];
    if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID');
    if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID');
    if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');
    if (missing.length) {
      toast({
        title: 'Email not configured',
        description: `Missing env vars: ${missing.join(', ')}. Add them to .env and restart dev server.`,
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      if (result.status === 200) {
        toast({
          title: 'Message sent successfully!',
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status ${result.status}`);
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      const detail = error?.text || error?.message || String(error);
      toast({
        title: 'Failed to send message',
        description: `Error: ${detail}`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Jatinsaini3070@gmail.com',
      href: 'mailto:Jatinsaini3070@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8168307068',
      href: 'tel:+918168307068'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kurukshetra, Haryana',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Jatinsaini123',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jatin-saini-28ba75246/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" ref={elementRef} className="section-padding bg-background-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="glass-card">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-primary">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg glass hover:bg-white/10 transition-all ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="glass-card">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Send Message</h3>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="to_email" value="Jatinsaini3070@gmail.com" />
                  <input type="hidden" name="from_name" value={formData.name} />
                  <input type="hidden" name="reply_to" value={formData.email} />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`input-focus w-full px-4 py-3 rounded-lg glass border ${
                        errors.name ? 'border-red-500' : 'border-white/20'
                      } focus:border-primary focus:outline-none ${
                        focusedField === 'name' ? 'scale-105 shadow-glow' : ''
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`input-focus w-full px-4 py-3 rounded-lg glass border ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      } focus:border-primary focus:outline-none ${
                        focusedField === 'email' ? 'scale-105 shadow-glow' : ''
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`input-focus w-full px-4 py-3 rounded-lg glass border ${
                        errors.message ? 'border-red-500' : 'border-white/20'
                      } focus:border-primary focus:outline-none resize-none ${
                        focusedField === 'message' ? 'scale-105 shadow-glow' : ''
                      }`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;