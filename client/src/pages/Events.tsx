import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import { format } from "date-fns";
import type { Event } from "@shared/schema";
import { useState } from "react";

export default function Events() {
  const [filter, setFilter] = useState<string>("all");
  
  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const filteredEvents = events.filter(event => {
    if (filter === "all") return true;
    if (filter === "upcoming") return event.status === "upcoming";
    if (filter === "past") return event.status === "past";
    return event.type === filter;
  });

  const upcomingEvents = filteredEvents.filter(e => e.status === "upcoming");
  const pastEvents = filteredEvents.filter(e => e.status === "past");

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      workshop: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      ctf: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      networking: "bg-green-500/10 text-green-500 border-green-500/20",
      meeting: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    };
    return colors[type] || "bg-gray-500/10 text-gray-500";
  };

  const getTypeIcon = (type: string) => {
    if (type === "ctf") return Trophy;
    return Calendar;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-card rounded w-64" />
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Events & Activities</h1>
          <p className="text-xl text-muted-foreground">
            Join our workshops, competitions, and community events
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilter("all")}
            data-testid="button-filter-all"
          >
            All Events
          </Button>
          <Button
            variant={filter === "upcoming" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilter("upcoming")}
            data-testid="button-filter-upcoming"
          >
            Upcoming
          </Button>
          <Button
            variant={filter === "workshop" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilter("workshop")}
            data-testid="button-filter-workshop"
          >
            Workshops
          </Button>
          <Button
            variant={filter === "ctf" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilter("ctf")}
            data-testid="button-filter-ctf"
          >
            CTFs
          </Button>
          <Button
            variant={filter === "past" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setFilter("past")}
            data-testid="button-filter-past"
          >
            Past Events
          </Button>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => {
                const TypeIcon = getTypeIcon(event.type);
                return (
                  <Card key={event.id} className="hover-elevate" data-testid={`card-upcoming-event-${event.id}`}>
                    {event.imageUrl && (
                      <div 
                        className="h-48 bg-cover bg-center rounded-t-md" 
                        style={{ backgroundImage: `url(${event.imageUrl})` }}
                      />
                    )}
                    <CardHeader className="gap-2 space-y-0 pb-4">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <Badge className={getTypeColor(event.type)} data-testid={`badge-event-type-${event.id}`}>
                          {event.type.toUpperCase()}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(event.date), "MMM dd, yyyy")}
                        </div>
                      </div>
                      <CardTitle className="text-xl" data-testid={`text-event-title-${event.id}`}>
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-event-description-${event.id}`}>
                        {event.description}
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-mono">{format(new Date(event.date), "EEEE, MMMM dd 'at' h:mm a")}</span>
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Past Events</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover-elevate" data-testid={`card-past-event-${event.id}`}>
                  {event.imageUrl && (
                    <div 
                      className="h-40 bg-cover bg-center rounded-t-md" 
                      style={{ backgroundImage: `url(${event.imageUrl})` }}
                    />
                  )}
                  <CardHeader className="space-y-0 pb-3">
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs" data-testid={`badge-past-event-type-${event.id}`}>
                        {event.type}
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground">
                        {format(new Date(event.date), "MMM dd, yyyy")}
                      </span>
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-past-event-title-${event.id}`}>
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    {event.attendees && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    )}
                    {event.winners && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                        <Trophy className="w-3 h-3 text-primary" />
                        <span>Winners: {event.winners}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground">
              Check back later for upcoming events and activities
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
