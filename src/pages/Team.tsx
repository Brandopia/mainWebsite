import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Globe, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Team = () => {
  const teamMembers = [
    {
      name: "Tanishka Narsaria",
      role: "Founder & CEO",
      image: "/assets/Tanishka.jpeg",
      bio: "Founder and CEO of Brandopia | Marketing and Analytics Intern at Global Ocean Logistics | Student at Flame 2028'Mumbai, Maharashtra, India",
      social: {
        linkedin: "https://in.linkedin.com/in/tanishka-narsaria",
      }
    },
    {
      name: "Maanit Agarwal",
      role: "Co-Founder",
      image: "/assets/Maanit.jpeg",
      bio: "YC Startup School | Co-Founder Brandopia | PW School of Startups Fellowship | Ex Vice Chairman at The Helping Hand NGO | RU’29",
      social: {
        linkedin: "https://in.linkedin.com/in/maanit-agarwal",
      }
    },
    {
      name: "Kishan Dubey",
      role: "CHRO",
      image: "/assets/kishan.jpeg",
      bio: [
        "Hi, I’m Kishan.",
        "I am a hardworking, punctual, and efficient individual who values trust and responsibility in every role I take on. Currently, I serve as the Chief Human Resources Officer (CHRO) at Brandopia, where I oversee the people side of the company—ensuring smooth coordination, fostering teamwork, and maintaining a culture of reliability and growth. Alongside my role, I am pursuing my education at Bhaurav Devras Saraswati Vidya Mandir, which further strengthens my dedication and discipline."
      ],
      social: {},
    },
    {
      name: "Leander Fernandes",
      role: "CTO",
      image: "/assets/leander.jpeg",
      bio: ["Hi, I’m Leander.",
            "An highly ambitious and technology-driven Computer Engineering student at KJ Somaiya College of Engineering, Vidyavihar. As the Chief Technical Officer at Brandopia, I oversee the technical aspects of client projects, including the development of brand identity and e-commerce websites."
            ],
      social: {
        linkedin: "https://www.linkedin.com/in/leander-f-a413b8291/",
        instagram: "https://www.instagram.com/leander0905?igsh=OGQ5ZDc2ODk2ZA=="
      }
    },
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
    <div id="top" className="min-h-screen bg-background">
      <SEO 
        title="Meet our leadership Team"
        description="Meet the talented professionals behind Brandopia. Our diverse team of experts in web development, design and marketing."
        keywords="team, web developers, designers, marketing experts,"
        url="/team"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Leadership Team
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A diverse group of passionate professionals dedicated to creating exceptional digital experiences for our clients.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                  <div className="text-muted-foreground text-sm mb-4">
                    {Array.isArray(member.bio) ? (
                      member.bio.map((line, idx) => (
                        <p key={idx} className="mb-2">{line}</p>
                      ))
                    ) : (
                      <p>{member.bio}</p>
                    )}
                  </div>
                  <div className="flex justify-center space-x-3">
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {/*member.social.website && (
                      <a href={member.social.website} className="text-muted-foreground hover:text-primary transition-colors">
                        <Globe className="h-5 w-5" />
                      </a>
                    )*/}
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
          <Button
            size="lg"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.location.assign("/contact");
            }}
          >
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
