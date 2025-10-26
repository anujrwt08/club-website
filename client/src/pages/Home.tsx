import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Trophy, Users, GraduationCap, Code, Lock, Terminal } from "lucide-react";
import heroImage from "@assets/generated_images/Cybersecurity_hero_background_image_b52f2121.png";

export default function Home() {
  const activities = [
    {
      icon: Trophy,
      title: "CTF Competitions",
      description: "Participate in Capture The Flag challenges and compete against teams worldwide to sharpen your hacking skills."
    },
    {
      icon: GraduationCap,
      title: "Workshops & Training",
      description: "Learn from industry professionals and experienced members through hands-on workshops covering web security, cryptography, and more."
    },
    {
      icon: Users,
      title: "Networking Events",
      description: "Connect with peers, alumni, and industry professionals. Build relationships that will last throughout your career."
    }
  ];

  const benefits = [
    {
      title: "Hands-On Experience",
      description: "Get practical experience with real-world security challenges and tools used by professionals."
    },
    {
      title: "Career Opportunities",
      description: "Network with industry partners and gain access to internships and job opportunities in cybersecurity."
    },
    {
      title: "Skill Development",
      description: "Build technical skills in penetration testing, cryptography, network security, and secure coding practices."
    },
    {
      title: "Community Support",
      description: "Join a supportive community of students passionate about security and technology."
    }
  ];

  const stats = [
    { value: "200+", label: "Active Members" },
    { value: "50+", label: "Events Per Year" },
    { value: "15+", label: "CTF Wins" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
            College Cybersecurity Club
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Join us in exploring the world of cybersecurity through CTF competitions, workshops, and real-world challenges
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button asChild size="lg" className="text-base px-8">
                <a data-testid="button-hero-join">
                  Join Us
                </a>
              </Button>
            </Link>
            <Link href="/events">
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="text-base px-8 bg-background/20 backdrop-blur-md border-white/30 text-white hover:bg-background/30"
              >
                <a data-testid="button-hero-events">
                  Upcoming Events
                </a>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We're dedicated to building a community of passionate students interested in cybersecurity, ethical hacking, and digital privacy. Our club provides a platform for learning, collaboration, and hands-on experience in the rapidly evolving field of information security.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Whether you're a beginner or an experienced security enthusiast, our club offers something for everyone. We believe in learning by doing, and our activities are designed to challenge and inspire members at all skill levels.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our club offers diverse activities designed to build practical skills and foster a strong security community
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-8">
                  <activity.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3" data-testid={`activity-title-${index}`}>
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`activity-description-${index}`}>
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Join Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Become part of a thriving community and gain valuable skills for your future career
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`benefit-description-${index}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <Terminal className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join our community today and start your journey in cybersecurity. We meet every Thursday at 6:00 PM in Room 204, CS Building.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button asChild size="lg" className="text-base px-8">
                <a data-testid="button-cta-contact">
                  Contact Us
                </a>
              </Button>
            </Link>
            <Button asChild size="lg" variant="outline" className="text-base px-8">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" data-testid="button-cta-discord">
                Join Our Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
