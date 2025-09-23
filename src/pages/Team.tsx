
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Visionary leader with 10+ years in digital transformation and business strategy.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c78b?w=300&h=300&fit=crop",
      bio: "Award-winning designer specializing in brand identity and user experience design.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Full-stack developer with expertise in modern web technologies and AI integration.",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Emily Thompson",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Digital marketing expert with a proven track record in SEO and content strategy.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Park",
      role: "Video Production Lead",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop",
      bio: "Creative video producer and editor with expertise in both long-form and short-form content.",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Lisa Wang",
      role: "AI Consultant",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
      bio: "AI specialist helping businesses integrate cutting-edge artificial intelligence solutions.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve, embracing new technologies and creative solutions."
    },
    {
      title: "Collaboration",
      description: "We believe the best results come from working together with our clients as partners."
    },
    {
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in everything we do."
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and reliable partnerships."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Team"
        description="Meet the talented professionals behind Brandopia. Our diverse team of experts in web development, design, marketing, and AI consultancy."
        keywords="team, web developers, designers, marketing experts, AI consultants"
        url="/team"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A diverse group of passionate professionals dedicated to creating exceptional digital experiences for our clients.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border animate-scale-in hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.website && (
                      <a href={member.social.website} className="text-muted-foreground hover:text-primary transition-colors">
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border animate-slide-in">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            <Link to="/contact">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
