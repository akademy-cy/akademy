/*
  AKademy content: events, Olympiad calendar and opportunities.

  This is the ONLY file you need to edit to add, change or remove events
  and opportunities. The website builds all cards, filters, countdowns and
  calendar buttons from this data automatically.

  Quick rules
  - Dates are "YYYY-MM-DD". Times are "HH:MM" in Cyprus time (24h).
  - Leave out "time" for an event with no announced time. It then shows as
    an all-day event and no time is displayed.
  - Leave out "mode" or set it to null if you don't want to show online /
    in person. Allowed values: "online", "in-person", "hybrid".
  - Events move to "Past events" automatically once their date has passed.
  - Text in quotes must not contain a straight double quote. Use ’ or “ ”.
  - Every item ends with a comma, except it's fine to leave one at the end.

  Registration types (registration.type)
    "external"  link to an external page, needs "url" (e.g. Luma)
    "form"      a form on this website. Sends the answers by email to
                contactEmail. Add "formEndpoint" (e.g. a Formspree URL) to
                receive answers without opening the visitor's email app.
    "email"     a button that opens an email to contactEmail
    "none"      no registration required
    "members"   AKademy members only
    "soon"      registration coming soon
    "closed"    registration closed / full
  Optional for every type: "label" (button text) and "note" (small text).
*/

window.AKADEMY_CONTENT = {
  contactEmail: "akademy923@gmail.com",
  instagram: "https://www.instagram.com/akademy_maths/",

  /* ------------------------------------------------------------------ */
  /* NUMBERS at the top of the site                                      */
  /* Lectures and hours update by themselves: every week, once the       */
  /* lecture day has ended (endTime, Cyprus time), perWeek lectures are  */
  /* added. hours = lectures × hoursEach.                                */
  /* skipDates: lecture days with no lectures (holidays), "YYYY-MM-DD".  */
  /* To correct the count, set count to the real number and              */
  /* countedUntil to today's date.                                       */
  /* ------------------------------------------------------------------ */
  stats: {
    girls: 27,
    ageGroups: 2,
    lectures: {
      count: 0,                   // lectures held up to and including countedUntil
      countedUntil: "2026-10-12", // first lecture was Tuesday 13 October 2026
      weekday: 2,                 // 0 = Sunday, 1 = Monday, 2 = Tuesday ...
      endTime: "21:00",           // when the lectures finish, Cyprus time
      perWeek: 2,                 // Gymnasium + Lyceum
      hoursEach: 1.5,
      skipDates: []               // e.g. ["2026-12-29", "2027-01-05"]
    }
  },

  /* ------------------------------------------------------------------ */
  /* EVENTS                                                              */
  /* ------------------------------------------------------------------ */
  events: [
    {
      id: "zilin-su-functional-equations",
      title: "Guest Lecture: Functional Equations",
      category: "Guest lecture",
      date: "2026-11-17",
      // No time or location announced, so none are set.
      audience: "AKademy members",
      summary: "A guest lecture on functional equations by Zilin Su.",
      description: "Zilin Su joins AKademy for a guest lecture on functional equations, one of the classic olympiad topics.",
      topics: ["Functional equations"],
      speakers: [
        {
          name: "Zilin Su",
          role: "Guest lecturer",
          bio: "IMO 2026 and BMO 2026 for Cyprus. Bronze medal, JBMO 2025. 5× Gold, Cyprus Math Olympiad. 1st place in Regional and National competitions 2025."
        }
      ],
      registration: { type: "members", note: "No registration required." }
    },

    {
      id: "cambridge-graduate-perspective",
      title: "Study & Life at Cambridge: The Graduate Perspective",
      category: "University talk",
      date: "2026-11-27",
      time: "18:45",
      mode: "online",
      audience: "Students and parents",
      cost: "Free",
      summary: "Cambridge graduates talk about their academic journeys, student life and careers, with live Q&A.",
      description: "Three Cambridge graduates share their academic journeys, what student life is really like, the challenges and friendships along the way, and the career opportunities that followed. The session ends with a live Q&A.",
      topics: ["Academic journeys", "Student life", "Challenges", "Friendships", "Career opportunities", "Live Q&A"],
      speakers: [
        { name: "Feidias Kyriakidis", role: "BA Economics", bio: "Investment Research Analyst at Hymans Robertson." },
        { name: "Stylianos Kalotaris", role: "BA Mathematics", bio: "Research Project." },
        { name: "Ioannis Skordis", role: "BA History and Politics", bio: "PGDL." }
      ],
      moderators: [
        { name: "Petros Symeon", role: "Moderator", bio: "PhD Candidate in Engineering, University of Cambridge." }
      ],
      collaborators: [{ name: "STEM Futures Europe" }],
      registration: { type: "external", url: "https://luma.com/mfufcai4", label: "Register on Luma" }
    },

    {
      id: "cambridge-academic-perspective",
      title: "Study & Research at Cambridge: The Academic Perspective",
      category: "University talk",
      date: "2026-12-05",
      time: "18:45",
      mode: "online",
      audience: "Students and parents",
      cost: "Free",
      summary: "A Cambridge Research Fellow on academic life, teaching, research and independent thinking, with live Q&A.",
      description: "Dr Yusuf Karli talks about academic life at Cambridge from the other side of the desk: teaching, research, how students learn and why independent thinking matters. The session ends with a live Q&A.",
      topics: ["Academic life", "Teaching", "Research", "Student learning", "Independent thinking", "Live Q&A"],
      speakers: [
        { name: "Dr Yusuf Karli", role: "Speaker", bio: "Research Fellow at Emmanuel College, Cambridge, and Director of Studies in Natural Sciences (Physical)." }
      ],
      moderators: [
        { name: "Christoforos Iakovou", role: "Moderator", bio: "PhD Candidate in Physics, University of Cambridge." }
      ],
      collaborators: [{ name: "STEM Futures Europe" }],
      registration: { type: "external", url: "https://luma.com/0hk04ejk", label: "Register on Luma" }
    },

    {
      id: "national-math-competition-2026",
      title: "National Mathematics Competition",
      category: "Competition",
      date: "2026-12-12",
      // Time and location intentionally not shown.
      audience: "Students who qualified through the regional competitions",
      summary: "The national round. Only students who qualify through the regional competitions can take part.",
      description: "The national round of the Cyprus mathematics competitions. Only students who qualified through the regional competitions can participate.",
      registration: { type: "none", note: "Only students who qualified through the regionals can participate." }
    }

    /* TEMPLATE: copy this block (without the comment marks) to add an event
    ,{
      id: "unique-id-no-spaces",
      title: "Event title",
      category: "Workshop",
      date: "2027-01-10",
      time: "18:00",
      durationMinutes: 90,
      mode: "online",
      location: "",
      audience: "Everyone",
      cost: "Free",
      featured: false,
      summary: "One sentence shown on the card.",
      description: "Longer text shown in the details view.",
      topics: ["Topic one", "Topic two"],
      speakers: [{ name: "Name", role: "Role", bio: "Short bio" }],
      moderators: [],
      collaborators: [{ name: "Partner name", url: "https://partner.example" }],
      links: [{ label: "Official page", url: "https://example.com" }],
      registration: { type: "form", label: "Register", note: "" }
    }
    */
  ],

  /* ------------------------------------------------------------------ */
  /* OLYMPIAD CALENDAR                                                   */
  /* date: null means the date has not been announced yet.               */
  /* confirmed: true shows a "Confirmed" badge.                          */
  /* ------------------------------------------------------------------ */
  olympiad: {
    competitions: [
      { id: "EGMO", name: "EGMO", full: "European Girls’ Mathematical Olympiad" },
      { id: "BMO",  name: "BMO",  full: "Balkan Mathematical Olympiad" },
      { id: "IMO",  name: "IMO",  full: "International Mathematical Olympiad" }
    ],
    stages: [
      { id: "A", name: "A Selection", date: "2027-01-23", confirmed: true, contributesTo: ["EGMO", "BMO", "IMO"] },
      { id: "B", name: "B Selection", date: "2027-02-13", confirmed: true, contributesTo: ["EGMO", "BMO", "IMO"] },
      { id: "C", name: "C Selection", date: "2027-03-27", confirmed: true, contributesTo: ["BMO", "IMO"] },
      { id: "D", name: "D Selection (BMO)", date: null, confirmed: false, contributesTo: ["IMO"],
        note: "The D Selection is the BMO itself." }
    ],
    // Other national competitions, shown below the selection timeline.
    // "tag" is the small label above the name.
    separate: [
      { name: "National Mathematics Competition", date: "2026-12-12", confirmed: true,
        tag: "National round",
        note: "Only students who qualify through the regional competitions can take part." },
      { name: "Cyprus Mathematical Olympiad", date: "2027-04-18", confirmed: true,
        note: "A separate national competition. It is not part of the EGMO selection." }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* OPPORTUNITIES                                                       */
  /* category must be one of the names in opportunityCategories.         */
  /* status: "open", "upcoming" or "closed".                             */
  /* ------------------------------------------------------------------ */
  opportunityCategories: [
    "Mathematics competitions",
    "Olympiad camps",
    "Summer schools",
    "STEM programmes",
    "University programmes",
    "Scholarships",
    "Research opportunities"
  ],

  opportunities: [
    /* TEMPLATE: copy this block (without the comment marks) to add one
    {
      title: "Opportunity name",
      category: "Summer schools",
      organiser: "Who runs it",
      description: "What it is, in one or two sentences.",
      eligibility: "Who can apply",
      deadline: "2027-03-01",
      location: "Online / City, Country",
      cost: "Free / €100 / Fully funded",
      url: "https://official-page.example",
      status: "open"
    },
    */
  ]
};
