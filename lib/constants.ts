export const BUSINESS = {
  name: "Dave The Handy Guy",
  phone: "(828) 616-0050",
  phoneLink: "tel:8286160050",
  smsLink: "sms:8286160050",
  address: "125 Manor Rdg, Boone, NC 28607",
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 5:00 PM",
    saturday: "Saturday: By Appointment",
    sunday: "Sunday: Closed",
  },
  youtubeEmbed: "https://www.youtube.com/embed/K54WzUnN7WM",
  youtubeChannel: "https://www.youtube.com/channel/UCwFQ8FqmEy_mJ1DwaITXBqw",
  facebook: "https://www.facebook.com/DaveTheHandyGuy/",
  yelp: "https://www.yelp.com/biz/dave-the-handy-guy-boone",
  googleReviews:
    "https://www.google.com/search?sca_esv=bab5d0a3aacebeff&rlz=1C5CHFA_enUS1197US1197&sxsrf=ANbL-n46tmm2O1eQFyqIl0_DvFOvWGIR5w:1777296832381&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXZIVTLR2F2FX6oLEAvEAXDVOAM1b-_0WCDTzaZSlBQr-Yz3eegFnaHiPA7QOGVFUcTS_u25LH7O4AeYsn-J3asWo011tUJBkwe2SZmyJfHTda7qNQ%3D%3D&q=Dave+The+Handy+Guy+Reviews&sa=X&ved=2ahUKEwir2OrSko6UAxXurokEHX24Gq0Q0bkNegQIJxAF&biw=1247&bih=704&dpr=2",
  nexalyUrl: "https://nexalydigital.com",
  rating: 4.8,
  reviewCount: 100,
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  { icon: "DoorOpen", name: "Door Repairs & Hardware" },
  { icon: "Monitor", name: "TV Mounting" },
  { icon: "Fan", name: "Ceiling Fans & Lights" },
  { icon: "Armchair", name: "Furniture Assembly" },
  { icon: "Droplets", name: "Pressure Washing" },
  { icon: "Paintbrush", name: "Deck Staining" },
  { icon: "Wrench", name: "Plumbing Fixes" },
  { icon: "Zap", name: "Basic Electrical" },
  { icon: "LayoutGrid", name: "Shelving & Mounting" },
  { icon: "Palette", name: "Small Paint Jobs" },
  { icon: "SlidersHorizontal", name: "Filters & Maintenance" },
  { icon: "Hammer", name: "Furniture Repair" },
] as const;

export const REVIEWS = [
  {
    text: "Dave has been so helpful to keep things working properly at my condo. I live out of state and whenever I need maintenance done he has taken care of it. I trust him to take care of things when I'm out of town and his knowledge base covers a huge variety of home related issues. He's a great find and I wholeheartedly recommend him.",
    name: "Condo Owner",
    location: "Boone",
    stars: 5,
  },
  {
    text: "Dave responds quickly and shows up on time. He is kind, reliable, honest, and hardworking. He is also reasonably priced and does quality work. I will hire him again for any handyman job!",
    name: "Homeowner",
    location: "High Country",
    stars: 5,
  },
  {
    text: "Dave is genuine, honest, and has quite the skills. We had him mount 3 TVs and hang 2 big mirrors and a large painting. One of the TVs was 75 inches and heavy. Great work.",
    name: "Satisfied Customer",
    location: "",
    stars: 5,
  },
  {
    text: "Our law office hired Dave to do a touch-up paint job of the interior walls as well as re-stain the exterior deck. Dave was extremely professional, had great communication, was on time, and was very clean in his work.",
    name: "Law Office",
    location: "Boone",
    stars: 5,
  },
] as const;

export const SERVICE_AREAS = [
  { name: "Boone, NC", primary: true },
  { name: "Blowing Rock, NC", primary: false },
  { name: "Banner Elk, NC", primary: false },
] as const;

export const SERVICE_OPTIONS = [
  "Door Repairs & Hardware",
  "TV Mounting",
  "Ceiling Fans & Light Fixtures",
  "Furniture Assembly or Repair",
  "Pressure Washing",
  "Deck Staining",
  "Plumbing Fixes",
  "Electrical Basics",
  "Shelving & Wall Mounting",
  "Painting",
  "Filters & Maintenance",
  "Other",
] as const;

export const ABOUT_PARAGRAPHS = [
  "There's no call center, no office manager, no crew of guys you've never met. It's just me. I give you the estimate, I do the work, and if something's not right, I'm the one you call about it.",
  "I ran a successful carpet cleaning business out in California, and eventually sold it. When I moved out to the High Country, I started doing handyman work because honestly, I just like fixing things.",
  "I just want to do good work for good people.",
  "Being a veteran, I learned respect, being on time, and I ALWAYS return calls. Over 100 families around Boone, Blowing Rock, and Banner Elk have trusted me in their homes.",
] as const;

export const STATS = [
  { num: "100+", label: "Google Reviews" },
  { num: "4.8", label: "Star Rating" },
  { num: "8+", label: "Years Experience" },
  { num: "Veteran", label: "Owned & Operated" },
] as const;
