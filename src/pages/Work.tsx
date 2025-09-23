
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Branding', 'Digital Marketing', 'Video Production'];

  const projects = [
    {
      title: "TechCorp Website Redesign",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Complete website overhaul with modern design and enhanced user experience.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Startup Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      description: "Comprehensive brand identity system for innovative tech startup.",
      tags: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "Custom e-commerce solution with advanced features and seamless UX.",
      tags: ["Next.js", "Shopify", "Custom API"],
      link: "#"
    },
    {
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      description: "Multi-channel marketing campaign that increased conversions by 150%.",
      tags: ["SEO", "PPC", "Content Marketing"],
      link: "#"
    },
    {
      title: "Product Launch Video",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      description: "High-impact product launch video for major tech company.",
      tags: ["Video Editing", "Motion Graphics", "Sound Design"],
      link: "#"
    },
    {
      title: "Restaurant Chain Rebrand",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      description: "Complete rebranding for established restaurant chain.",
      tags: ["Brand Strategy", "Visual Identity", "Packaging Design"],
      link: "#"
    },
    {
      title: "SaaS Platform Development",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      description: "Enterprise-level SaaS platform with complex integrations.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=300&fit=crop",
      description: "Viral social media campaign reaching over 2M impressions.",
      tags: ["Social Media", "Content Creation", "Influencer Marketing"],
      link: "#"
    },
    {
      title: "Corporate Video Series",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop",
      description: "Professional video series for corporate communications.",
      tags: ["Corporate Video", "Interviews", "Post-Production"],
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Work"
        description="Explore Brandopia's portfolio of successful projects in web development, branding, digital marketing, and video production."
        keywords="portfolio, web development projects, branding work, digital marketing campaigns, video production"
        url="/work"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how we've helped businesses transform their digital presence through strategic design and innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="hover:scale-105 transition-transform"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border animate-slide-in hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild variant="secondary" size="sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-muted px-2 py-1 rounded-md text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary that drives results for your business.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
