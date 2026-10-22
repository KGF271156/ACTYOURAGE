/* =====================================================
   ACT YOUR AGE: SHOW LISTINGS
   This is the only file to change when shows change.
   Edit it on GitHub (open the file, press the pencil icon),
   then press "Commit changes". The website updates itself.

   Upcoming shows (PRODUCTIONS):
   - current: true marks the show featured on the Home page
   - tickets: the booking link (e.g. the TicketSource page).
     Leave it "" and the button reads "Tickets on sale soon".
   - kind: "main" (Parish Rooms production) or "tour" (community visit)
   - poster: the image file name, uploaded next to index.html
   - example: true shows an "Example" label. Delete placeholders when real shows are ready.

   When a show has finished, move it down into PAST.
   ===================================================== */
const PRODUCTIONS = [
  { month:"November", year:"2026", current:true, kind:"main",
    title:"The Séance", strap:"Murder from Beyond · by Janette Evans",
    poster:"seance-poster.jpg",
    quote:"“You killed me and I have the proof.”",
    dates:"Fri 13 Nov 7pm · Sat 14 Nov 2.30pm & 7pm · Sun 15 Nov 5pm",
    venue:"The Parish Rooms (Titchfield Village Hall), PO14 4AQ", price:"Prices and booking on TicketSource",
    blurb:[
      "A message from ‘the other side’. Betty thinks it's all a bit iffy, but Didi is convinced the dead speak. But who did what, and why?",
      "AYA present a murder from beyond. Betty and Didi investigate in their own indomitable fashion, with little to go on, including the victim.",
      "A brand new murder mystery play, with a large helping of humour."
    ],
    tickets:"https://www.ticketsource.com/act-your-age-cic/the-seance/e-kkgvgl" },
  { month:"March", year:"2027", kind:"main",
    title:"Just Call Me Vic", strap:"A new play by Janette Evans",
    poster:"vic-poster.jpg",
    dates:"Thu 4 & Fri 5 March, evenings · Sat 6 March, matinee & evening",
    venue:"The Parish Rooms (Titchfield Village Hall)", price:"Tickets on sale soon",
    blurb:"A brand new play by Janette Evans. Full details and tickets coming soon. We're casting now: see Get Involved.",
    tickets:"" },
  { month:"April", year:"2027", kind:"main", example:true,
    title:"The Spring Revue", strap:"Songs, sketches and surprises",
    dates:"Thu 22 – Sat 24 Apr, 7pm",
    venue:"The Parish Rooms, Titchfield", price:"£8 · £6 concessions",
    blurb:"Our end-of-season variety night, with every member of the company on stage at least once.",
    tickets:"" }
];

/* Past shows, newest first. */
const PAST = [
  { title:"A Showcase", when:"9 & 10 October 2026",
    venue:"The Parish Rooms (Titchfield Village Hall)",
    poster:"showcase-poster.jpg",
    blurb:"Life is too short not to laugh. A plethora of short pieces looking at the lighter side of life, for a giggle or a proper belly buster." },
  { title:"Jack", by:"Janette Evans", when:"",
    poster:"jack-poster.jpg",
    blurb:"Sarah: wife, mother and daughter. An important job with many deadlines, a son Albert who's twelve, nearly thirteen, and her Dad, Jack, who can't look after himself but isn't easy to look after. And then there's Kali!" }
];

/* =====================================================
   CASTING CALL (shown on the Get Involved page)
   Set CASTING = null; to hide it when casting has closed.
   ===================================================== */
const CASTING = {
  show:"Just Call Me Vic", by:"Janette Evans",
  auditions:"Saturday 7 November 2026, 2pm – 5pm",
  where:"The Queen's Head, Titchfield",
  email:"janetteevans@hotmail.com",
  key_dates:[
    "Performances: Thu 4 and Fri 5 March (evenings), Sat 6 March (matinee and evening)",
    "Dress rehearsal: Sunday 28 February",
    "You must be available for all of these dates."
  ],
  rehearsals:"A mix of Monday, Tuesday and Friday evenings, plus the Sundays in February.",
  notes:[
    "There are no show fees.",
    "You'll print your own script and help with props and costume.",
    "The cast helps move the set and set up the hall."
  ],
  also:"We're also looking for a stage manager.",
  roles:[
    ["Vic","Female","35–60","The Vicar"],
    ["Janet","Female","40–60","Verger"],
    ["Chris","Male","40–70","Church warden"],
    ["David","Male","20–30",""],
    ["Shania","Female","20–30",""],
    ["Pat","Female","40–50","Landlady"],
    ["Gracie","Female","70+",""],
    ["Gavin","Male","20–35",""],
    ["Steph","Female","20–35",""],
    ["Sam","Male or female","20–30",""],
    ["Jo(e)","Male or female","18–25",""],
    ["Maureen","Female","40–70",""]
  ]
};
