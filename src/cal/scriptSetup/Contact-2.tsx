import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageSquare, MapPin, Clock, CheckCircle, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    serviceType: "",
    propertyOccupied: "",
    timeline: "",
    message: "",
    contactMethod: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbw_Wz3veJLEFDCane6ahOiG8rcHFO6nS6cJoQtDFFSZ7WSEAt75G7wZCOG0V0p_-_fdsA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(
          Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [key, String(value)])
          )
        ).toString(),
      });

      const resultText = await response.text();
      console.log("Raw response text from Apps Script:", resultText);

      let result;
      try {
        result = JSON.parse(resultText);
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        throw new Error("Invalid JSON returned from Google Apps Script");
      }

      if (result.result === "success") {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll reach out within 24 hours to discuss your property needs.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyAddress: "",
          serviceType: "",
          propertyOccupied: "",
          timeline: "",
          message: "",
          contactMethod: ""
        });
      } else {
        throw new Error(
          typeof result.error === "object" ? JSON.stringify(result.error) : result.error || "Failed to submit form"
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const faqItems = [
    {
      question: "What types of properties do you service?",
      answer: "We service residential properties including single-family homes, duplexes, and small multi-family units. We're expanding into commercial properties as well."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the Tampa Bay Area and surrounding counties with fast response times and local expertise."
    },
    {
      question: "Do you offer customizable service packages?",
      answer: "Yes! From single services to bundled packages, we tailor every project to fit your property, budget, and goals."
    },
    {
      question: "Do you provide eco-friendly or sustainable service options?",
      answer: "Absolutely! We offer eco-friendly cleaning products, sustainable landscaping solutions, and energy-efficient upgrade recommendations to help reduce your propertys environmental impact."
    },
    {
      question: "How quickly can you respond to service requests?",
      answer: "We pride ourselves on fast response times and scheduling. Most consultations can be scheduled within 24-48 hours."
    },
    {
      question: "Do you work with Airbnb properties?",
      answer: "Yes! We specialize in Airbnb and short-term Rental properties, offering staging, cleaning, and turnover services."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Discuss Your Property Goals
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Schedule a free consultation today and discover how we can beautify and manage your property
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(727) 861-9326</p>
                    <p className="text-sm text-gray-500">Click to call</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">Allinoneresidentials@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Tampa Bay Area<br />and surrounding counties</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 10:00 AM - 5:00 PM<br />
                      Saturday & Sunday: By appointment
                    </p>
                    <p className="text-sm text-green-600 font-medium mt-1">Fast Response Time</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Service Guarantee</h3>
                  <p className="text-sm text-gray-600">
                    We stand by our work with a 100% satisfaction guarantee on all services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                      <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange("contactMethod", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="propertyAddress">Property Address (if applicable)</Label>
                    <Input
                      id="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={(e) => handleInputChange("propertyAddress", e.target.value)}
                      placeholder="123 Main Street, Tampa, FL"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceType">What type of service are you looking for?</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="interior">Interior Services</SelectItem>
                        <SelectItem value="lawn">Lawn Services</SelectItem>
                        <SelectItem value="cleaning">Cleaning</SelectItem>
                        <SelectItem value="staging">Staging (Airbnb's Included)</SelectItem>
                        <SelectItem value="Minor painting">Painting</SelectItem>
                        <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                        <SelectItem value="other">Other (please specify in message)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyOccupied">Is the property currently occupied?</Label>
                      <Select value={formData.propertyOccupied} onValueChange={(value) => handleInputChange("propertyOccupied", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occupancy status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">When are you hoping to start the project?</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-2-weeks">Within 1–2 weeks</SelectItem>
                          <SelectItem value="within-month">Within a month</SelectItem>
                          <SelectItem value="exploring">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Any special requests or important notes?</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your property needs or any specific questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-20 bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Contact</h3>
              <p className="text-gray-600 text-sm">We'll reach out within 24 hours to schedule your consultation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Property Evaluation</h3>
              <p className="text-gray-600 text-sm">We'll assess your property and discuss your specific goals and needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Proposal</h3>
              <p className="text-gray-600 text-sm">We'll provide a tailored service plan with transparent pricing</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">No obligation • Free consultation • Fast response</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
