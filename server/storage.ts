import { type User, type InsertUser, type Member, type InsertMember, type Event, type InsertEvent, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllMembers(): Promise<Member[]>;
  getMember(id: string): Promise<Member | undefined>;
  createMember(member: InsertMember): Promise<Member>;
  
  getAllEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  getAllContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private members: Map<string, Member>;
  private events: Map<string, Event>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.members = new Map();
    this.events = new Map();
    this.contactMessages = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed Leadership
    const leadership = [
      {
        name: "Alex Chen",
        role: "President",
        position: "President",
        major: "Computer Science",
        year: "Senior",
        specialty: "Web Security & Penetration Testing",
        email: "alex.chen@college.edu",
        github: "https://github.com/alexchen",
        linkedin: "https://linkedin.com/in/alexchen",
        type: "leadership" as const,
      },
      {
        name: "Sarah Martinez",
        role: "Vice President",
        position: "Vice President",
        major: "Cybersecurity",
        year: "Junior",
        specialty: "Network Security & Cryptography",
        email: "sarah.m@college.edu",
        github: "https://github.com/sarahm",
        linkedin: "https://linkedin.com/in/sarahm",
        type: "leadership" as const,
      },
      {
        name: "Jordan Kim",
        role: "Technical Lead",
        position: "Technical Lead",
        major: "Computer Engineering",
        year: "Senior",
        specialty: "Binary Exploitation & Reverse Engineering",
        email: "jordan.k@college.edu",
        github: "https://github.com/jordank",
        type: "leadership" as const,
      },
    ];

    leadership.forEach(member => {
      const id = randomUUID();
      this.members.set(id, { ...member, id, imageUrl: null, credentials: null, officeHours: null, currentRole: null });
    });

    // Seed Core Members
    const coreMembers = [
      { name: "Emily Rodriguez", role: "CTF Team Captain", type: "member" as const },
      { name: "Michael Chang", role: "Workshop Coordinator", type: "member" as const },
      { name: "Priya Patel", role: "Social Media Manager", type: "member" as const },
      { name: "David Thompson", role: "Member", type: "member" as const },
      { name: "Lisa Wang", role: "Member", type: "member" as const },
      { name: "Carlos Rivera", role: "Member", type: "member" as const },
      { name: "Rachel Green", role: "Member", type: "member" as const },
      { name: "Kevin Park", role: "Member", type: "member" as const },
    ];

    coreMembers.forEach(member => {
      const id = randomUUID();
      this.members.set(id, { 
        ...member, 
        id, 
        imageUrl: null, 
        major: null, 
        year: null, 
        specialty: null, 
        email: null, 
        github: null, 
        linkedin: null, 
        position: null,
        credentials: null,
        officeHours: null,
        currentRole: null
      });
    });

    // Seed Faculty
    const faculty = [
      {
        name: "Dr. Robert Singh",
        role: "Faculty Advisor",
        type: "faculty" as const,
        credentials: "Ph.D. in Computer Science, Security Researcher",
        officeHours: "Mon & Wed, 2-4 PM",
        email: "r.singh@college.edu",
      },
      {
        name: "Prof. Jennifer Lee",
        role: "Faculty Advisor",
        type: "faculty" as const,
        credentials: "Associate Professor, Network Security Expert",
        officeHours: "Tue & Thu, 3-5 PM",
        email: "j.lee@college.edu",
      },
    ];

    faculty.forEach(member => {
      const id = randomUUID();
      this.members.set(id, { 
        ...member, 
        id, 
        imageUrl: null, 
        major: null, 
        year: null, 
        specialty: null, 
        github: null, 
        linkedin: null,
        position: null,
        currentRole: null
      });
    });

    // Seed Alumni
    const alumni = [
      { name: "James Wilson", currentRole: "Security Engineer @ Google", type: "alumni" as const },
      { name: "Maria Garcia", currentRole: "Penetration Tester @ Facebook", type: "alumni" as const },
      { name: "Tom Anderson", currentRole: "Security Analyst @ Amazon", type: "alumni" as const },
      { name: "Nina Patel", currentRole: "Ph.D. Student @ MIT", type: "alumni" as const },
    ];

    alumni.forEach(member => {
      const id = randomUUID();
      this.members.set(id, { 
        ...member,
        role: "Alumni",
        id, 
        imageUrl: null, 
        major: null, 
        year: null, 
        specialty: null, 
        email: null, 
        github: null, 
        linkedin: null,
        position: null,
        credentials: null,
        officeHours: null
      });
    });

    // Seed Events
    const upcomingEvents = [
      {
        title: "Web Security Workshop: XSS & CSRF Attacks",
        description: "Learn about cross-site scripting and cross-site request forgery vulnerabilities. Hands-on lab session included with real-world examples and prevention techniques.",
        type: "workshop",
        date: new Date("2025-11-15T18:00:00"),
        location: "CS Building, Room 204",
        status: "upcoming" as const,
      },
      {
        title: "PicoCTF 2025 Competition",
        description: "Join us for the annual PicoCTF competition! Compete in teams to solve cybersecurity challenges across multiple categories including cryptography, web exploitation, and forensics.",
        type: "ctf",
        date: new Date("2025-11-22T14:00:00"),
        location: "Online & CS Lab",
        status: "upcoming" as const,
      },
      {
        title: "Industry Night: Cybersecurity Careers Panel",
        description: "Network with cybersecurity professionals from top companies. Learn about career paths, internship opportunities, and what it takes to succeed in the field.",
        type: "networking",
        date: new Date("2025-12-05T18:30:00"),
        location: "Student Union, Conference Room A",
        status: "upcoming" as const,
      },
    ];

    upcomingEvents.forEach(event => {
      const id = randomUUID();
      this.events.set(id, { 
        ...event, 
        id, 
        imageUrl: null,
        attendees: null,
        winners: null,
        highlights: null
      });
    });

    const pastEvents = [
      {
        title: "Cryptography Fundamentals Workshop",
        description: "Introduction to cryptographic algorithms, encryption methods, and real-world applications in cybersecurity.",
        type: "workshop",
        date: new Date("2025-10-10T18:00:00"),
        location: "CS Building, Room 204",
        status: "past" as const,
        attendees: "45",
        highlights: "Great turnout with hands-on crypto challenges",
      },
      {
        title: "HackTheBox University CTF 2024",
        description: "Our team competed in the HTB University CTF, solving challenges in web security, cryptography, and binary exploitation.",
        type: "ctf",
        date: new Date("2025-09-28T10:00:00"),
        location: "Online",
        status: "past" as const,
        attendees: "25",
        winners: "Team CyberWarriors - 3rd Place Overall",
        highlights: "First top-3 finish in a major CTF!",
      },
      {
        title: "Network Security Deep Dive",
        description: "Advanced workshop covering packet analysis, network scanning, and security protocols.",
        type: "workshop",
        date: new Date("2025-09-15T18:00:00"),
        location: "CS Building, Room 204",
        status: "past" as const,
        attendees: "38",
      },
      {
        title: "Fall Semester Kickoff Meeting",
        description: "Welcome back meeting for the fall semester. Club overview, upcoming events, and team formations for CTF competitions.",
        type: "meeting",
        date: new Date("2025-09-05T18:00:00"),
        location: "CS Building, Room 204",
        status: "past" as const,
        attendees: "62",
      },
    ];

    pastEvents.forEach(event => {
      const id = randomUUID();
      this.events.set(id, { 
        ...event, 
        id, 
        imageUrl: null,
        winners: event.winners || null,
        highlights: event.highlights || null,
        attendees: event.attendees || null
      });
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Member methods
  async getAllMembers(): Promise<Member[]> {
    return Array.from(this.members.values());
  }

  async getMember(id: string): Promise<Member | undefined> {
    return this.members.get(id);
  }

  async createMember(insertMember: InsertMember): Promise<Member> {
    const id = randomUUID();
    const member: Member = { ...insertMember, id };
    this.members.set(id, member);
    return member;
  }

  // Event methods
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { ...insertEvent, id };
    this.events.set(id, event);
    return event;
  }

  // Contact message methods
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
