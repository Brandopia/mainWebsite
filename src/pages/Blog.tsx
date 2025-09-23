
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'SEO', 'Branding', 'Digital Marketing', 'AI & Technology'];

  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to advanced frameworks.",
      category: "Web Development",
      author: "Marcus Johnson",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      slug: "future-web-development-trends-2024"
    },
    {
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Learn essential SEO strategies that will help your website rank higher and attract more organic traffic.",
      category: "SEO",
      author: "Emily Thompson",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=250&fit=crop",
      slug: "seo-best-practices-modern-websites"
    },
    {
      title: "Building a Strong Brand Identity in the Digital Age",
      excerpt: "Discover how to create a compelling brand identity that resonates with your target audience online.",
      category: "Branding",
      author: "Sarah Chen",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      slug: "building-strong-brand-identity-digital-age"
    },
    {
      title: "AI in Business: Practical Applications and Benefits",
      excerpt: "Explore how artificial intelligence can transform your business operations and drive growth.",
      category: "AI & Technology",
      author: "Lisa Wang",
      date: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      slug: "ai-business-practical-applications-benefits"
    },
    {
      title: "Social Media Marketing Strategies That Actually Work",
      excerpt: "Proven social media tactics to boost engagement, build community, and drive conversions.",
      category: "Digital Marketing",
      author: "Emily Thompson",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=250&fit=crop",
      slug: "social-media-marketing-strategies-that-work"
    },
    {
      title: "Responsive Design: Creating Websites That Work Everywhere",
      excerpt: "Master the art of responsive web design to ensure your site looks great on all devices.",
      category: "Web Development",
      author: "Marcus Johnson",
      date: "Dec 3, 2024",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=250&fit=crop",
      slug: "responsive-design-websites-work-everywhere"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog"
        description="Stay updated with the latest insights on web development, SEO, branding, digital marketing, and AI technology from Brandopia's experts."
        keywords="blog, web development tips, SEO guides, branding insights, digital marketing strategies, AI technology"
        url="/blog"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Insights & Ideas
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay ahead of the curve with expert insights on web development, marketing, branding, and the latest technology trends.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-scale-in">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <span className="text-sm text-primary font-medium mb-2">{featuredPost.category}</span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <Button asChild>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between animate-slide-in">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="hover:scale-105 transition-transform"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border animate-fade-up hover:scale-105">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/blog/${post.slug}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
