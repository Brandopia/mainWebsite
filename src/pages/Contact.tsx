import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "brandopia.org@gmail.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+91 8368663902,+91 83696 65548 (urgent only)"],
      description: "Monday to Friday from 9am to 6pm EST"
    },
  ];

  const services = [
    'Website Development',
    'Web App Development',
    'Website Maintenance',
    'SEO/SEM Services',
    'Meta Ads',
    'Google Account Management',
    'Marketing Consulting',
    'Social Media Consulting',
    'Brand Book',
    'Custom Graphics',
    'Video Editing',
    'LinkedIn Management',
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24h",
      label: "Response Time"
    },
    {
      icon: <Send className="h-8 w-8" />,
      number: "1000+",
      label: "Projects Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us"
        description="Get in touch with Brandopia for your web development, SEO, branding, and digital marketing needs. We're here to help transform your business."
        keywords="contact, web development services, SEO consultation, branding services, digital marketing"
        url="/contact"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform your digital presence? Get in touch with our team and let's discuss your project.
          </p>
          <div className="mt-8 flex justify-center">
            <a 
              href="https://forms.gle/NkR8pAKEbCeaH5Yq5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6">
                  <Button size="lg" className="w-full hover:scale-105 transition-transform">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/*<section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-scale-in">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Contact Form and Info Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-12">
            {/* Contact Form */}
            {/*<div className="animate-slide-in">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project..."
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full hover:scale-105 transition-transform">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>*/}

            {/* Contact Information */}
            <div className="animate-fade-up">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground text-lg">
                    We'd love to hear from you. Choose the most convenient way to reach out to our team.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-primary mt-1">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                            <p className="text-foreground font-medium mb-2">{info.details}</p>
                            <p className="text-muted-foreground text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-primary text-primary-foreground border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
                    <p className="text-sm opacity-90">
                      We understand the importance of your time. That's why we guarantee a response to your inquiry within 24 hours, often much sooner.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while more complex projects can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we offer comprehensive maintenance and support packages to ensure your website or application continues to perform optimally. This includes regular updates, security monitoring, and technical support."
              },
              {
                question: "What's your pricing structure?",
                answer: "Our pricing is project-based and depends on the specific requirements and scope of work. We provide detailed quotes after understanding your needs during our initial consultation."
              },
              {
                question: "Do you work with businesses outside your local area?",
                answer: "Absolutely! We work with clients globally and have extensive experience managing remote projects. We use modern collaboration tools to ensure smooth communication throughout the project."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
