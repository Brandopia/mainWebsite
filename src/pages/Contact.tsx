import { useState } from 'react';
import { Mail, Phone, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { CalButton } from '@/components/ui/cal-button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    projectTimeline: '',
    expectation: '',
    heardAboutUs: '',
    referredBy: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const scriptURL =
        'https://script.google.com/macros/s/AKfycbzeARYuEY1aCyNPDON4vw7bpNnkUnEbDpbNv1v4DiTFhOR6zvAnS78i73sk3Ge0rixh/exec';

      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key as keyof typeof formData]);
      }

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          projectTimeline: '',
          expectation: '',
          heardAboutUs: '',
          referredBy: '',
          message: '',
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const services = [
    'Website Development',
    'SEO/SEM Services',
    'Marketing Consulting',
    'Brand Design',
    'Video Editing',
    'LinkedIn Management',
  ];

  const timelines = ['Immediately', 'Within 1 week', '1-3 weeks', 'More than 3 weeks'];

  const heardOptions = ['Google search', 'Social media', 'Referral', 'Other'];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'brandopia.org@gmail.com',
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: ['+91 85953 02724 (urgent only)'],
      description: 'Monday to Friday from 9am to 6pm IST',
    },
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
            Ready to transform your digital presence? Get in touch with our team
            and let's discuss your project.
          </p>
          
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-12">
          <div className="animate-slide-in w-full md:w-1/2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send us a message
                </CardTitle>
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
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Timeline */}
                  <div>
                    <Label>Project Timeline *</Label>
                    <div className="mt-2 space-y-2">
                      {timelines.map((option, i) => (
                        <label key={i} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="projectTimeline"
                            value={option}
                            checked={formData.projectTimeline === option}
                            onChange={handleInputChange}
                            required
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Expectation */}
                  <div>
                    <Label htmlFor="expectation">What do you expect from us?</Label>
                    <Input
                      id="expectation"
                      name="expectation"
                      type="text"
                      value={formData.expectation}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>

                  {/* Heard About Us */}
                  <div>
                    <Label>How did you hear about us?</Label>
                    <div className="mt-2 space-y-2">
                      {heardOptions.map((option, i) => (
                        <label key={i} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="heardAboutUs"
                            value={option}
                            checked={formData.heardAboutUs === option}
                            onChange={handleInputChange}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                    {formData.heardAboutUs === 'Other' && (
                      <Input
                        type="text"
                        name="heardAboutUsOther"
                        placeholder="Please specify"
                        className="mt-2"
                        onChange={handleInputChange}
                      />
                    )}
                  </div>

                  {/* Referred By */}
                  <div>
                    <Label htmlFor="referredBy">Who are you referred by?</Label>
                    <Input
                      id="referredBy"
                      name="referredBy"
                      type="text"
                      value={formData.referredBy}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full hover:scale-105 transition-transform"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  {status === 'success' && (
                    <p className="text-green-600 text-center font-medium mt-4">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-green-600 text-center font-medium mt-4">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info + Cal Button */}
          <div className="animate-fade-up w-full md:w-1/2">
            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition-shadow duration-300 border-border"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground font-medium mb-2">
                          {info.details}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-sm opacity-90">
                    We understand the importance of your time. That's why we
                    guarantee a response to your inquiry within 24 hours, often
                    much sooner.
                  </p>
                </CardContent>
              </Card>

              {/*<Card className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Schedule a Meeting
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Book a free consultation call to discuss your project in
                    detail
                  </p>
                  <CalButton
                    size="lg"
                    className="w-full hover:scale-105 transition-transform"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </CalButton>
                </CardContent>
              </Card>*/}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;