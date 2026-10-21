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
  { month:"December", year:"2026", kind:"tour", example:true,
    title:"Mince Pies & Monologues", strap:"Festive tour",
    dates:"Thursdays through December",
    venue:"Care homes and day centres", price:"Free to host venues",
    blurb:"Short festive sketches and readings, brought to people who can't easily get out to a show.",
    tickets:"" },
  { month:"February", year:"2027", kind:"main", example:true,
    title:"Love Letters from the Front Room", strap:"A comedy of courtship",
    dates:"Thu 25 – Sat 27 Feb, 7pm",
    venue:"The Parish Rooms, Titchfield", price:"£10 · £8 concessions",
    blurb:"Two widowed neighbours, one shared hedge and a postman who reads everything. Romance at any age.",
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
