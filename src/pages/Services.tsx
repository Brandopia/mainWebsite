import { Link } from 'react-router-dom';
import { ArrowRight, Code, Search, Megaphone, Palette, Video, Brain, Globe, Users, Linkedin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Website Development",
      description: "Custom website and web application development using the latest technologies and best practices.",
      features: [
        "Responsive Web Design",
        "Custom Web Applications", 
        "E-commerce Development",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ]
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your website secure, updated, and performing optimally.",
      features: [
        "Regular Security Updates",
        "Content Management",
        "Performance Monitoring",
        "Backup & Recovery",
        "24/7 Technical Support"
      ]
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO/SEM Services",
      description: "Comprehensive search engine optimization and marketing to boost your online visibility and drive traffic.",
      features: [
        "Keyword Research & Strategy",
        "On-page SEO Optimization",
        "Technical SEO Audits",
        "Google Ads Management",
        "Performance Tracking & Reporting"
      ]
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Meta Ads Management",
      description: "Strategic Facebook and Instagram advertising campaigns to reach your target audience effectively.",
      features: [
        "Campaign Strategy & Setup",
        "Audience Targeting",
        "Creative Development",
        "Performance Optimization",
        "ROI Tracking & Reporting"
      ]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Marketing Consulting",
      description: "Strategic marketing guidance to help your business grow and reach its full potential.",
      features: [
        "Marketing Strategy Development",
        "Brand Positioning",
        "Customer Journey Mapping",
        "Competitive Analysis",
        "Growth Planning"
      ]
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Brand Design",
      description: "Complete brand identity solutions including brand books, logos, and custom graphics.",
      features: [
        "Logo Design & Branding",
        "Brand Guidelines & Books",
        "Custom Graphics & Illustrations",
        "Marketing Collateral Design",
        "Stationary and business card design"
      ]
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Video Production",
      description: "Professional video editing services for both long-form and short-form content.",
      features: [
        "Video Editing & Post-Production",
        "Short-form Content Creation",
        "Motion Graphics",
        "Sound Design",
        "Social Media Video Optimization"
      ]
    },
    {
      icon: <Linkedin className="h-10 w-10" />,
      title: "LinkedIn Management",
      description: "Professional LinkedIn management to build your professional network and generate leads.",
      features: [
        "Profile Optimization",
        "Content Strategy & Creation",
        "Network Building",
        "Lead Generation",
        "Performance Analytics"
      ]
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and challenges through comprehensive research and analysis."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Based on our findings, we develop a strategic approach tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Design",
      description: "Our creative team brings the strategy to life with compelling designs that resonate with your audience."
    },
    {
      step: "04",
      title: "Development",
      description: "We build robust, scalable solutions using the latest technologies and best practices."
    },
    {
      step: "05",
      title: "Launch",
      description: "We ensure a smooth launch with thorough testing and optimization for maximum impact."
    },
    {
      step: "06",
      title: "Growth",
      description: "Post-launch, we provide ongoing support and optimization to drive continuous improvement."
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$5,000",
      description: "Perfect for small businesses and startups",
      features: [
        "Brand Identity Design",
        "5-Page Website",
        "Mobile Responsive",
        "Basic SEO Setup",
        "30-Day Support"
      ]
    },
    {
      name: "Professional",
      price: "$15,000",
      description: "Ideal for growing businesses",
      features: [
        "Complete Brand System",
        "Custom Website Development",
        "E-commerce Integration",
        "Advanced SEO & Analytics",
        "90-Day Support",
        "Content Management System"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations and complex projects",
      features: [
        "Full Digital Transformation",
        "Custom Applications",
        "Multi-platform Development",
        "Advanced Integrations",
        "Ongoing Support & Maintenance",
        "Dedicated Account Manager"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A simple website typically takes 4-6 weeks, while more complex projects can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes, from startups to Fortune 500 companies. We tailor our approach and services to match your specific needs and budget."
    },
    {
      question: "What's included in ongoing support?",
      answer: "Our ongoing support includes regular updates, security monitoring, performance optimization, technical support, and access to our team for questions and minor modifications."
    },
    {
      question: "Can you help with existing websites or applications?",
      answer: "Absolutely! We offer redesign, optimization, and enhancement services for existing digital properties. We can help improve performance, user experience, and functionality."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Services"
        description="Comprehensive digital services including web development, SEO, branding, video production, AI consultancy, and more. Transform your business with Brandopia."
        keywords="web development, SEO services, branding, video editing, digital marketing, LinkedIn management"
        url="/services"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We offer comprehensive digital solutions designed to help your business 
            thrive in today's competitive digital landscape.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-items-center gap-8">
            {services.map((service, index) => (
              <Link to="/contact" key={index} className="w-full">
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border animate-scale-in hover:scale-105">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      {/*<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the package that best fits your needs, or let us create a custom solution for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`mx-auto relative hover:shadow-xl transition-shadow duration-300 ${pkg.popular ? 'border-primary scale-105' : 'border-border'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help bring your vision to life.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => {
                window.location.href = '/contact';
              }, 300);
            }}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
