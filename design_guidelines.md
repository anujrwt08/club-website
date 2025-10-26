# Design Guidelines: College Cybersecurity Club Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern tech-forward organizations (Linear, Stripe, GitHub) combined with cybersecurity aesthetic. The design should feel professional yet approachable for college students, emphasizing technical credibility while maintaining accessibility.

**Core Principles**:
- Technical sophistication with student-friendly warmth
- Information clarity over flashy effects
- Trust-building through professional presentation
- Community-focused visual language

## Typography System

**Font Families** (via Google Fonts CDN):
- **Primary**: Inter (headings, UI elements) - weights: 400, 500, 600, 700
- **Secondary**: JetBrains Mono (technical accents, code snippets) - weights: 400, 500
- **Body**: Inter (all body text) - weight: 400

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl md:text-4xl, font-semibold
- Subsection Headers: text-xl md:text-2xl, font-semibold
- Card Titles: text-lg md:text-xl, font-medium
- Body Text: text-base, leading-relaxed
- Captions/Meta: text-sm, font-mono (JetBrains Mono for dates, tags)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6, p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Card gaps: gap-6, gap-8
- Element margins: mb-4, mb-6, mb-8

**Container Strategy**:
- Full-width sections with max-w-7xl centered containers
- Content sections: max-w-6xl
- Form content: max-w-2xl
- Consistent px-6 md:px-8 horizontal padding

## Page-Specific Layouts

### Home Page
**Hero Section**: Full-width hero (80vh) with striking cybersecurity-themed image (matrix-style code, digital security visualization, or abstract network patterns). Overlay with centered headline + subheadline + dual CTAs ("Join Us" primary, "Upcoming Events" secondary with blurred backgrounds).

**Content Sections** (5 sections total):
1. **About/Mission**: Two-column layout (md:grid-cols-2) - left: compelling mission statement, right: key statistics (members, events hosted, CTF wins) in stat cards
2. **What We Do**: Three-column grid (lg:grid-cols-3) of activity cards with icons (Heroicons) - CTF Competitions, Workshops, Networking
3. **Why Join**: Asymmetric layout with staggered content blocks showcasing benefits with supporting imagery
4. **Recent Highlights**: Horizontal scrolling carousel or 2-column grid of recent event cards with images
5. **CTA Section**: Centered call-to-action with Discord/Slack invite, meeting schedule, and secondary links

### Members Page
**Layout**: No hero image - lead with bold typography header and tagline

**Structure**:
1. **Leadership Grid**: 3-column grid (lg:grid-cols-3, md:grid-cols-2) of detailed profile cards - include photo, name, role, major/year, specialty, contact icon links
2. **Core Members**: 4-column grid (lg:grid-cols-4, md:grid-cols-3) of compact member cards with photos, names, roles
3. **Faculty Advisors**: 2-column grid with enhanced cards showing credentials and office hours
4. **Alumni Section**: Minimal cards showing where past members are now (companies, grad schools)

### Events/Blog Page
**Filtering System**: Sticky top navigation bar with category tabs (All, Upcoming, Workshops, CTFs, Past Events)

**Layout**:
1. **Featured Event**: Large card at top (if upcoming event exists) with image, countdown timer, registration CTA
2. **Upcoming Events**: 2-column grid (md:grid-cols-2) of event cards with date badges, titles, brief descriptions, RSVP buttons
3. **Past Events Archive**: 3-column grid (lg:grid-cols-3) of compact cards with images, dates, titles, "Read More" links
4. **Event Cards Include**: Event type badge, date (in JetBrains Mono), title, brief description, attendance count/winner info for CTFs

### Contact Page
**Layout**: Two-column split (md:grid-cols-2, gap-12)

**Left Column - Contact Form**:
- Full-width inputs with proper labels
- Fields: Name, Email, Subject, Message (textarea)
- Submit button at bottom
- Success/error state messaging area

**Right Column - Context**:
- Meeting information (time, location, frequency)
- Response time expectations
- Alternative contact methods (Discord, social media icons)
- Office/meeting location map placeholder or description
- Quick links to important resources

## Component Library

### Navigation
**Header**: Fixed top navigation with logo/club name left, menu items center/right, "Join" CTA button. Mobile: Hamburger menu with slide-in drawer.

**Footer**: Three-column layout (lg:grid-cols-3) - Column 1: Club info & social links, Column 2: Quick links, Column 3: Meeting schedule + newsletter signup

### Cards
**Profile Cards**: Photo (circular for members, square for leadership), name, role/title, meta info, hover lift effect (translate-y-1)

**Event Cards**: Featured image at top, date badge overlay, content area with title, description, metadata row (location, time), action button

**Activity Cards**: Icon at top, title, description, minimal decoration

### Forms
- Input fields: Rounded borders (rounded-lg), proper spacing (mb-6), focus states with ring utilities
- Labels: text-sm font-medium, mb-2
- Textareas: min-h-32, resize-none
- Buttons: Full styling with hover states handled by Button component

### Icons
**Library**: Heroicons (via CDN)
- Navigation: menu, x-mark, arrow icons
- Social: github, twitter/x, discord, linkedin
- Features: shield-check, academic-cap, trophy, calendar
- Contact: envelope, map-pin, phone

## Images Strategy

**Required Images**:
1. **Home Hero**: Large, impactful cybersecurity-themed image (1920x1080 recommended) - digital security visualization, code matrix, or abstract tech pattern
2. **Activity/Feature Images**: Supporting images for "What We Do" section showing workshops, CTFs in action
3. **Recent Events**: Photos from past events (workshops, competitions, team photos)
4. **Member Photos**: Headshots for all members, leadership, and faculty advisors
5. **Event Cards**: Featured images for each event listing

**Image Treatment**: Subtle overlays on hero images for text readability, consistent aspect ratios (16:9 for event cards, 1:1 for member photos)

## Interaction Patterns

**Minimal Animation**:
- Card hover: Subtle lift (translate-y-1) and shadow enhancement
- Button hovers: Handled by Button component
- Page transitions: Simple fade-ins for section reveals on scroll (optional, use sparingly)
- No flashy effects, no complex scroll-driven animations

**Responsive Behavior**:
- Mobile: Single column, stacked navigation, simplified grids
- Tablet: 2-column grids where appropriate
- Desktop: Full multi-column layouts as specified

This design balances technical credibility with approachability, creating a professional club presence that attracts new members while showcasing the organization's expertise and community.