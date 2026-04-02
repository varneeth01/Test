import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle, MapPin, Building, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

const locationData: Record<string, {
  city: string;
  state: string;
  marketSize: string;
  projects: string;
  activeClients: string;
  highlights: string[];
  description: string;
}> = {
  india: {
    city: "India",
    state: "",
    marketSize: "₹4.2T",
    projects: "500+",
    activeClients: "120+",
    highlights: [
      "Largest construction management platform in India",
      "Active across 25+ states and union territories",
      "Support for all Indian regulatory frameworks",
      "Offline mode for remote and rural construction sites",
      "Local-language support for foremen and workers",
    ],
    description: "Infrakaart is India's leading AI-powered construction management software, built specifically for the unique challenges of Indian infrastructure projects — from metro rail corridors to highway widening to commercial towers.",
  },
  hyderabad: {
    city: "Hyderabad",
    state: "Telangana",
    marketSize: "₹42,000Cr",
    projects: "80+",
    activeClients: "22",
    highlights: [
      "Active across Hyderabad Metro, Outer Ring Road projects",
      "Integrated with Telangana construction regulatory portal",
      "Support for Telugu-language site operations",
      "Real-time monsoon risk monitoring for Musi river projects",
    ],
    description: "Hyderabad's construction sector is booming with IT corridor expansion, metro phase 2, and large-scale residential development. Infrakaart is the platform of choice for Hyderabad's top construction companies.",
  },
  mumbai: {
    city: "Mumbai",
    state: "Maharashtra",
    marketSize: "₹85,000Cr",
    projects: "120+",
    activeClients: "35",
    highlights: [
      "Coastal Construction Zone regulatory compliance built-in",
      "Mumbai Metro and Coastal Road project tracking",
      "CRZ (Coastal Regulation Zone) alert integration",
      "High-rise structural monitoring with IoT sensors",
    ],
    description: "Mumbai's infrastructure boom — from Coastal Road to Metro Line 3 — demands world-class project intelligence. Infrakaart's platform is trusted by Maharashtra's leading contractors for multi-site, high-stakes urban construction.",
  },
  delhi: {
    city: "Delhi",
    state: "Delhi NCR",
    marketSize: "₹68,000Cr",
    projects: "95+",
    activeClients: "28",
    highlights: [
      "DMRC integration for Delhi Metro project tracking",
      "NHAI highway project monitoring across NCR",
      "Real-time air quality compliance monitoring",
      "Smart city project tracking for Delhi Smart City Mission",
    ],
    description: "Delhi NCR's massive infrastructure development — from RRTS to airport expansion — requires sophisticated project intelligence. Infrakaart brings AI-powered monitoring to Delhi's most complex construction projects.",
  },
  bengaluru: {
    city: "Bengaluru",
    state: "Karnataka",
    marketSize: "₹55,000Cr",
    projects: "75+",
    activeClients: "20",
    highlights: [
      "Namma Metro Phase 2 project monitoring",
      "Tech corridor infrastructure tracking",
      "BBMP project compliance integration",
      "Underground utility mapping for dense urban projects",
    ],
    description: "Bengaluru's tech-driven growth is creating unprecedented construction demand. Infrakaart serves Bengaluru's infrastructure sector with AI-powered delay prediction and real-time site intelligence.",
  },
  "andhra-pradesh": {
    city: "Andhra Pradesh",
    state: "Andhra Pradesh",
    marketSize: "₹28,000Cr",
    projects: "45+",
    activeClients: "14",
    highlights: [
      "Amaravati Capital Region development tracking",
      "AP infrastructure corridor project monitoring",
      "Integration with AP government project portal",
      "Rural construction support with offline mode",
    ],
    description: "Andhra Pradesh's rapid infrastructure development, including the Amaravati capital region and coastal corridor, makes it one of India's fastest-growing construction markets. Infrakaart serves AP's contractors with purpose-built intelligence.",
  },
};

const slugToKey: Record<string, string> = {
  "construction-software-india": "india",
  "construction-software-hyderabad": "hyderabad",
  "construction-software-mumbai": "mumbai",
  "construction-software-delhi": "delhi",
  "construction-software-bengaluru": "bengaluru",
  "construction-software-andhra-pradesh": "andhra-pradesh",
};

export default function LocationPage() {
  const params = useParams<{ location: string }>();
  const key = slugToKey[params.location] || params.location;
  const data = locationData[key];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-black text-[#EAB308] mb-4">404</div>
          <div className="text-[#A1A1AA] mb-4">Location not found</div>
          <Link href="/" className="text-[#EAB308] hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const locationLabel = data.state ? `${data.city}, ${data.state}` : data.city;
  const urlKey = params.location;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Infrakaart — Construction Management Software ${locationLabel}`,
    "description": data.description,
    "url": `https://infrakaart.com/construction-software-${urlKey.replace("construction-software-", "")}`,
    "areaServed": {
      "@type": "Place",
      "name": locationLabel
    },
    "serviceType": "Construction Management Software"
  };

  const otherLocations = Object.entries(locationData).filter(([k]) => k !== key);

  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg text-white overflow-x-hidden">
      <SEOHead
        title={`Construction Management Software ${locationLabel} | #1 Platform`}
        description={`Infrakaart is the leading construction management software in ${locationLabel}. AI-powered workforce tracking, project monitoring, and cost optimization. ${data.activeClients}+ active clients.`}
        canonical={`/${urlKey}`}
        keywords={`construction management software ${data.city.toLowerCase()}, construction software ${data.state.toLowerCase()}, infrastructure software ${data.city.toLowerCase()}, construction tech India`}
        schema={schema}
      />
      <Navbar />
      <div className="pt-20 pb-24">

        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-[#A1A1AA] mb-8">
              <Link href="/" className="hover:text-[#EAB308] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/construction-management-software" className="hover:text-[#EAB308] transition-colors">Construction Software</Link>
              <ChevronRight size={12} />
              <span className="text-[#EAB308]">{locationLabel}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="hazard-stripe h-1 w-24 mb-8" />
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-[#EAB308]" />
                <span className="text-xs text-[#EAB308] uppercase tracking-widest font-mono">{locationLabel}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
                Construction Management Software <span className="text-[#EAB308]">{data.city}</span>
              </h1>
              <p className="text-[#A1A1AA] text-xl max-w-3xl leading-relaxed mb-8">{data.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboard" className="flex items-center gap-2 px-6 py-3 bg-[#EAB308] text-black font-black uppercase tracking-wider hover:bg-[#FACC15] transition-colors yellow-glow">
                  Open Platform <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-bold uppercase tracking-wider hover:border-[#EAB308] transition-colors">
                  About Infrakaart
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local stats */}
        <section className="py-12 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {[
                { stat: data.marketSize, label: "Local market size" },
                { stat: data.projects, label: "Active projects tracked" },
                { stat: data.activeClients, label: "Client companies" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-[#0A0A0A] p-6 text-center">
                  <div className="text-3xl font-black text-[#EAB308] mb-1">{stat}</div>
                  <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local highlights */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black mb-8">Why {locationLabel} contractors choose Infrakaart</h2>
            <div className="grid md:grid-cols-2 gap-3 max-w-3xl">
              {data.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 border border-white/10 bg-[#18181B] p-4">
                  <CheckCircle size={16} className="text-[#EAB308] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#A1A1AA] leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other locations */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-black mb-6">Infrakaart across India</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {otherLocations.slice(0, 5).map(([k, loc]) => {
                const locSlug = Object.entries(slugToKey).find(([, v]) => v === k)?.[0] || k;
                return (
                  <Link key={k} href={`/${locSlug}`} className="block group">
                    <div className="border border-white/10 bg-[#18181B] p-4 group-hover:border-[#EAB308]/30 transition-colors card-hover">
                      <div className="flex items-center gap-2 mb-1">
                        <Building size={14} className="text-[#EAB308]" />
                        <span className="font-bold text-white text-sm">{loc.city}</span>
                      </div>
                      <div className="text-xs text-[#A1A1AA]">{loc.projects} projects · {loc.activeClients} clients</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-4">Explore Platform</div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/construction-management-software", label: "Construction Management Software" },
                { href: "/workforce-tracking-construction", label: "Workforce Tracking" },
                { href: "/blog", label: "Construction Tech Blog" },
                { href: "/investors", label: "Investor Overview" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-[#A1A1AA] hover:text-[#EAB308] border border-white/10 px-3 py-1.5 hover:border-[#EAB308]/30 transition-colors">
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
