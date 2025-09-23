import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Code, Search, Palette, Video, Linkedin, Brain, Megaphone, Globe, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Website Development",
      description: "Custom website and web application development tailored to your business needs."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO/SEM Services",
      description: "Comprehensive search engine optimization and marketing to boost your online visibility."
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Marketing Consulting",
      description: "Strategic marketing guidance to help your brand reach its full potential."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand Design",
      description: "Complete brand identity design including brand books and custom graphics."
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Editing",
      description: "Professional video editing services for long-form and short-form content."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Consultancy",
      description: "Expert AI consulting to help integrate artificial intelligence into your business."
    }
  ];

  const testimonials = [
    {
      quote: "Brandopia transformed our digital presence completely. The results exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStart"
    },
    {
      quote: "Professional, creative, and results-driven. Exactly what we needed for our rebrand.",
      author: "Michael Chen",
      role: "Marketing Director, InnovateCorp"
    },
    {
      quote: "The team's attention to detail and strategic thinking made all the difference.",
      author: "Emily Davis",
      role: "Founder, GrowthLab"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Brandopia - Digital Agency & Web Development Services"
        description="Professional web development, SEO, branding, and digital marketing services. Transform your business with Brandopia's expert solutions."
        keywords="web development, SEO, digital marketing, branding, web design, AI consultancy"
        url="/"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Your
              <span className="block text-primary">Digital Presence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              At Brandopia, we craft exceptional digital experiences through innovative web development, strategic SEO, and comprehensive brand solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform" asChild>
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*About us section*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          
          {/* Centered heading */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Who are we?
            </h2>
          </div>

          {/* Two-column layout: paragraph left, image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-up">
            
            {/* Left: paragraph */}
            <div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Brandopia is a digital-first agency reimagining how brands are built. 
                From branding to UI/UX design to web and mobile development, we believe 
                in empowering businesses and individuals to rise from the ground up. 
                Our vision is simple: turn your brand into a digital force that inspires, 
                connects, and endures.
              </p>
            </div>

            {/* Right: image */}
            <div className="flex justify-center">
              <img 
                src="/assets/e0c5ab15-3ee1-4f58-965d-171841ca11d9.png"
                alt="Brandopia"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 animate-slide-in hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent projects and see how we've helped brands transform their digital presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border animate-scale-in hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <span className="text-sm text-primary font-medium">{item.category}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-up">
            <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <Link to="/work">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border animate-slide-in hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life and create something extraordinary together.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform animate-float">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
