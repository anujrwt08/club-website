import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin } from "lucide-react";
import type { Member } from "@shared/schema";

export default function Members() {
  const { data: members = [], isLoading } = useQuery<Member[]>({
    queryKey: ["/api/members"],
  });

  const leadership = members.filter(m => m.type === "leadership");
  const coreMembers = members.filter(m => m.type === "member");
  const faculty = members.filter(m => m.type === "faculty");
  const alumni = members.filter(m => m.type === "alumni");

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-card rounded w-64" />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-card rounded-md" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Meet the passionate individuals driving our cybersecurity community
          </p>
        </div>

        {/* Leadership Section */}
        {leadership.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Leadership</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {leadership.map((member) => (
                <Card key={member.id} className="hover-elevate" data-testid={`card-leader-${member.id}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src={member.imageUrl || undefined} alt={member.name} />
                        <AvatarFallback className="text-lg">{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold mb-1" data-testid={`text-leader-name-${member.id}`}>
                        {member.name}
                      </h3>
                      {member.position && (
                        <Badge variant="secondary" className="mb-3" data-testid={`badge-leader-position-${member.id}`}>
                          {member.position}
                        </Badge>
                      )}
                      {member.major && (
                        <p className="text-sm text-muted-foreground mb-1">
                          {member.major} {member.year && `• ${member.year}`}
                        </p>
                      )}
                      {member.specialty && (
                        <p className="text-xs text-muted-foreground mb-4 font-mono">
                          {member.specialty}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="hover-elevate active-elevate-2 p-2 rounded-md"
                            data-testid={`link-leader-email-${member.id}`}
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover-elevate active-elevate-2 p-2 rounded-md"
                            data-testid={`link-leader-github-${member.id}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover-elevate active-elevate-2 p-2 rounded-md"
                            data-testid={`link-leader-linkedin-${member.id}`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Core Members Section */}
        {coreMembers.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Core Members</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
              {coreMembers.map((member) => (
                <Card key={member.id} className="hover-elevate" data-testid={`card-member-${member.id}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-20 h-20 mb-3">
                        <AvatarImage src={member.imageUrl || undefined} alt={member.name} />
                        <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold mb-1" data-testid={`text-member-name-${member.id}`}>
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Faculty Advisors Section */}
        {faculty.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Faculty Advisors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faculty.map((member) => (
                <Card key={member.id} className="hover-elevate" data-testid={`card-faculty-${member.id}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="w-20 h-20 flex-shrink-0">
                        <AvatarImage src={member.imageUrl || undefined} alt={member.name} />
                        <AvatarFallback className="text-lg">{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1" data-testid={`text-faculty-name-${member.id}`}>
                          {member.name}
                        </h3>
                        {member.credentials && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {member.credentials}
                          </p>
                        )}
                        {member.officeHours && (
                          <p className="text-xs font-mono text-muted-foreground mb-3">
                            Office Hours: {member.officeHours}
                          </p>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="text-sm text-primary hover:underline"
                            data-testid={`link-faculty-email-${member.id}`}
                          >
                            {member.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Alumni Section */}
        {alumni.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Notable Alumni</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
              {alumni.map((member) => (
                <Card key={member.id} className="hover-elevate" data-testid={`card-alumni-${member.id}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-16 h-16 mb-3">
                        <AvatarImage src={member.imageUrl || undefined} alt={member.name} />
                        <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold mb-1" data-testid={`text-alumni-name-${member.id}`}>
                        {member.name}
                      </h3>
                      {member.currentRole && (
                        <p className="text-xs text-muted-foreground">
                          {member.currentRole}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
