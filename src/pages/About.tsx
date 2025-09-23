
import { Users, Award, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards in all our deliverables."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients as partners to achieve shared success and meaningful results."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of industry trends."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliability",
      description: "We deliver on our promises, meeting deadlines consistently while maintaining exceptional quality."
    }
  ];

  const milestones = [
    { year: "2018", title: "Agency Founded", description: "Started with a vision to create exceptional digital experiences" },
    { year: "2019", title: "Team Expansion", description: "Grew to 10 talented professionals across design and development" },
    { year: "2021", title: "100+ Projects", description: "Successfully delivered over 100 projects for clients worldwide" },
    { year: "2023", title: "Industry Recognition", description: "Received multiple awards for outstanding design and innovation" },
    { year: "2024", title: "Global Reach", description: "Expanded our services internationally with clients in 20+ countries" }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "6", label: "Years Experience" },
    { number: "25+", label: "Team Members" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Our Agency
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're a passionate team of designers, developers, and strategists dedicated to creating 
            exceptional digital experiences that drive meaningful results for our clients.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2018, our agency began with a simple mission: to help businesses 
                create meaningful connections with their audiences through exceptional design 
                and strategic thinking.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small team of passionate creatives has grown into a 
                full-service digital agency, working with clients from startups to Fortune 500 
                companies across various industries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to push boundaries, embrace new technologies, and deliver 
                innovative solutions that drive real business results.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-up">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that have shaped our agency's growth and success.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
