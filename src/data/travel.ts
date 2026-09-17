import heroAdventure from "@/assets/hero-adventure.jpg";
import heroFamily from "@/assets/hero-family.jpg";
import heroKashmir from "@/assets/hero-kashmir.jpg";
import heroMaldives from "@/assets/hero-maldives.jpg";
import heroRomance from "@/assets/hero-romance.jpg";

export type DestinationCategory = "popular" | "india" | "visa-free";
export type Destination = {
  id: string;
  name: string;
  country: string;
  category: DestinationCategory[];
  image: string;
  description: string;
  duration?: string;
  featured?: boolean;
};

export const heroSlides = [
  { image: heroKashmir, location: "Kashmir, India", quote: "Every journey begins with a dream.", description: "Turn your travel dreams into unforgettable memories with Happy Hearts Holidays.", cta: "Plan My Trip", href: "#enquiry" },
  { image: heroMaldives, location: "Maldives", quote: "Leave the ordinary. Discover the extraordinary.", description: "Escape to beautiful destinations designed around you.", cta: "Explore Destinations", href: "#destinations" },
  { image: heroFamily, location: "Kerala, India", quote: "The best journeys are the ones we remember together.", description: "Create beautiful memories with the people who matter most.", cta: "Plan a Family Trip", href: "#enquiry" },
  { image: heroRomance, location: "Bali, Indonesia", quote: "Some destinations become memories. Some become stories.", description: "Make your honeymoon or romantic escape truly special.", cta: "Plan a Romantic Escape", href: "#enquiry" },
  { image: heroAdventure, location: "The Swiss Alps", quote: "The world is waiting. Your next story starts here.", description: "From peaceful escapes to unforgettable adventures, your journey starts here.", cta: "Start Your Journey", href: "#enquiry" },
] as const;

export const destinations: Destination[] = [
  { id: "kashmir", name: "Kashmir", country: "India", category: ["popular", "india"], image: heroKashmir, description: "Where mountains meet unforgettable memories.", duration: "5 nights · 6 days", featured: true },
  { id: "kerala", name: "Kerala", country: "India", category: ["popular", "india"], image: heroFamily, description: "Slow mornings, emerald waterways and soulful stays.", duration: "5 nights · 6 days" },
  { id: "goa", name: "Goa", country: "India", category: ["popular", "india"], image: heroRomance, description: "Golden coastlines and easygoing days by the sea.", duration: "4 nights · 5 days" },
  { id: "dubai", name: "Dubai", country: "United Arab Emirates", category: ["popular"], image: heroAdventure, description: "Bold city energy, desert horizons and refined stays.", duration: "4 nights · 5 days" },
  { id: "bali", name: "Bali", country: "Indonesia", category: ["popular"], image: heroRomance, description: "Island rituals, hidden beaches and tropical calm.", duration: "6 nights · 7 days" },
  { id: "maldives", name: "Maldives", country: "Maldives", category: ["popular", "visa-free"], image: heroMaldives, description: "Barefoot luxury surrounded by infinite blue.", duration: "4 nights · 5 days" },
  { id: "rajasthan", name: "Rajasthan", country: "India", category: ["india"], image: heroAdventure, description: "Palaces, desert light and living heritage.", duration: "6 nights · 7 days" },
  { id: "manali", name: "Manali", country: "India", category: ["india"], image: heroAdventure, description: "Mountain air, pine forests and alpine adventure.", duration: "4 nights · 5 days" },
  { id: "ooty", name: "Ooty", country: "India", category: ["india"], image: heroKashmir, description: "Misty hills and quiet moments in the Nilgiris.", duration: "3 nights · 4 days" },
  { id: "andaman", name: "Andaman", country: "India", category: ["india"], image: heroMaldives, description: "Clear waters and secluded island shores.", duration: "5 nights · 6 days" },
  { id: "coorg", name: "Coorg", country: "India", category: ["india"], image: heroFamily, description: "Coffee country wrapped in forest and rain.", duration: "3 nights · 4 days" },
  { id: "nepal", name: "Nepal", country: "Nepal", category: ["visa-free"], image: heroAdventure, description: "Sacred cities beneath the Himalayas." },
  { id: "bhutan", name: "Bhutan", country: "Bhutan", category: ["visa-free"], image: heroKashmir, description: "High valleys, monasteries and mindful travel." },
  { id: "mauritius", name: "Mauritius", country: "Mauritius", category: ["visa-free"], image: heroMaldives, description: "Lagoon days and a vibrant island culture." },
  { id: "seychelles", name: "Seychelles", country: "Seychelles", category: ["visa-free"], image: heroMaldives, description: "Granite coves and beautifully unhurried escapes." },
  { id: "srilanka", name: "Sri Lanka", country: "Sri Lanka", category: ["visa-free"], image: heroFamily, description: "Tea country, coastlines and timeless heritage." },
  { id: "thailand", name: "Thailand", country: "Thailand", category: ["visa-free"], image: heroRomance, description: "Temples, island sunsets and vivid flavours." },
];

export const experiences = [
  { title: "Honeymoon", text: "Romantic escapes designed for unforgettable moments.", image: heroRomance },
  { title: "Family Holidays", text: "Stress-free holidays for families and loved ones.", image: heroFamily },
  { title: "Beach Getaways", text: "Relax, unwind and enjoy paradise.", image: heroMaldives },
  { title: "Adventure", text: "Explore, experience and create unforgettable memories.", image: heroAdventure },
  { title: "Friends & Group Trips", text: "Travel together. Laugh together. Remember forever.", image: heroKashmir },
  { title: "Luxury Escapes", text: "Premium stays and experiences tailored to you.", image: heroMaldives },
] as const;

export const testimonials = [
  { name: "Arun & Priya", destination: "Maldives", type: "Honeymoon", story: "Everything was beautifully planned, from the hotel to the transfers. We could simply relax and enjoy every moment of our honeymoon." },
  { name: "Rahul Family", destination: "Kashmir", type: "Family Holiday", story: "The itinerary was perfectly balanced between sightseeing and relaxation. The entire family had an amazing experience." },
  { name: "Sneha & Friends", destination: "Bali", type: "Friends Trip", story: "From planning to the actual trip, everything felt smooth and well organized. We created memories we'll never forget." },
] as const;

export const packages = destinations.slice(0, 8);

export const gallery = [
  { title: "Mountain mornings", image: heroKashmir },
  { title: "Island stillness", image: heroMaldives },
  { title: "Together in Kerala", image: heroFamily },
  { title: "A sunset for two", image: heroRomance },
  { title: "The next horizon", image: heroAdventure },
] as const;
