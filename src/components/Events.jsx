// pages/Events.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Image,
  ArrowRight,
  Search,
  X,
  ChevronDown,
  Users,
  Building2,
  UserPlus,
  Handshake,
  MapPin,
  Clock,
  Camera,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize,
  Minimize,
  Mail,
  Send,
  Award,
  Cpu,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Layers,
  Zap,
  TrendingUp,
  Globe,
  ChevronUp,
} from 'lucide-react';

// Sample Events Data
const eventsData = [
  {
    id: 1,
    title: "DGX AI Training Workshop",
    category: "Training",
    year: "2026",
    location: "San Francisco, CA",
    date: "March 15-16, 2026",
    participants: 150,
    photos: 45,
    description: "Hands-on training with NVIDIA DGX systems for deep learning and AI applications.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    ],
    speakers: ["Dr. Sarah Johnson", "Prof. Michael Chen"],
  },
  {
    id: 2,
    title: "AI in Healthcare Conference",
    category: "Conference",
    year: "2026",
    location: "Boston, MA",
    date: "April 5-7, 2026",
    participants: 300,
    photos: 78,
    description: "Exploring the impact of AI and machine learning in modern healthcare.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    ],
    speakers: ["Dr. Emily Rodriguez", "Prof. David Kim"],
  },
  {
    id: 3,
    title: "NVIDIA Hackathon 2026",
    category: "Hackathon",
    year: "2026",
    location: "Austin, TX",
    date: "May 20-22, 2026",
    participants: 200,
    photos: 56,
    description: "24-hour hackathon focused on building AI solutions with NVIDIA technologies.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    ],
    speakers: ["Dr. James Wilson", "Prof. Lisa Park"],
  },
  {
    id: 4,
    title: "Deep Learning Seminar",
    category: "Seminar",
    year: "2026",
    location: "Seattle, WA",
    date: "June 10, 2026",
    participants: 80,
    photos: 23,
    description: "Advanced deep learning techniques and architectures for modern AI applications.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    ],
    speakers: ["Dr. Anna Martinez"],
  },
  {
    id: 5,
    title: "University AI Research Summit",
    category: "University Visit",
    year: "2026",
    location: "Cambridge, MA",
    date: "July 15-16, 2026",
    participants: 120,
    photos: 34,
    description: "Collaborative research summit with leading universities in AI and machine learning.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    ],
    speakers: ["Prof. Robert Chang", "Dr. Maria Garcia"],
  },
  {
    id: 6,
    title: "Robotics Workshop",
    category: "Workshop",
    year: "2026",
    location: "Pittsburgh, PA",
    date: "August 3-5, 2026",
    participants: 90,
    photos: 41,
    description: "Building intelligent robots with AI and computer vision technologies.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    ],
    speakers: ["Dr. Thomas Wright", "Prof. Sarah Lee"],
  },
  {
    id: 7,
    title: "Cybersecurity AI Conference",
    category: "Conference",
    year: "2026",
    location: "Washington DC",
    date: "September 12-14, 2026",
    participants: 250,
    photos: 62,
    description: "AI-powered cybersecurity solutions for modern threats and challenges.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    ],
    speakers: ["Dr. Mark Thompson", "Prof. Jennifer Kim"],
  },
  {
    id: 8,
    title: "NVIDIA DGX User Training",
    category: "Training",
    year: "2026",
    location: "Santa Clara, CA",
    date: "October 5-7, 2026",
    participants: 60,
    photos: 28,
    description: "Comprehensive training on NVIDIA DGX platform for enterprise AI deployment.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    ],
    speakers: ["Dr. Kevin Patel"],
  },
  {
    id: 9,
    title: "Machine Learning Bootcamp",
    category: "Workshop",
    year: "2026",
    location: "New York, NY",
    date: "November 1-5, 2026",
    participants: 180,
    photos: 53,
    description: "Intensive bootcamp covering ML fundamentals to advanced techniques.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    ],
    speakers: ["Prof. David Zhang", "Dr. Rachel Adams"],
  },
  {
    id: 10,
    title: "AI Research Symposium",
    category: "Conference",
    year: "2026",
    location: "Chicago, IL",
    date: "December 1-3, 2026",
    participants: 400,
    photos: 89,
    description: "Premier research symposium on cutting-edge AI technologies and innovations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    ],
    speakers: ["Dr. Alan Turing", "Prof. Grace Hopper"],
  },
];

// Hero Section Component
const HeroSection = () => {
  const floatingImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-white via-[#DCFCE7]/10 to-white">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#16A34A]/5"
            style={{
              width: Math.random() * 200 + 50 + 'px',
              height: Math.random() * 200 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#DCFCE7] rounded-full border border-[#BBF7D0]">
              <span className="animate-pulse flex h-2 w-2 rounded-full bg-[#16A34A] mr-2"></span>
              <span className="text-[#16A34A] text-sm font-medium">
                Upcoming Events 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#0F172A]">
              Events & Workshops
            </h1>

            <p className="text-xl text-[#374151] max-w-lg">
              Discover our conferences, AI workshops, DGX training programs, 
              university collaborations, hackathons, research initiatives and 
              community events.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-[#16A34A] rounded-2xl font-semibold text-white hover:shadow-2xl hover:shadow-[#16A34A]/30 transition-all duration-300 flex items-center gap-2"
              >
                Explore Events
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border border-[#E5E7EB] rounded-2xl font-semibold text-[#0F172A] hover:border-[#16A34A] hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Image className="w-5 h-5" />
                View Gallery
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            {floatingImages.map((img, index) => (
              <motion.div
                key={index}
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  width: index === 0 ? '320px' : index === 1 ? '280px' : '240px',
                  height: index === 0 ? '280px' : index === 1 ? '240px' : '200px',
                  top: index * 30 + '%',
                  left: index * 20 + '%',
                  zIndex: 4 - index,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: index % 2 === 0 ? [0, 5, 0] : [0, -5, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.5,
                }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="text-sm font-medium">AI Workshop</div>
                      <div className="text-xs opacity-80">2026 Conference</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Statistics Section Component
const StatsSection = () => {
  const [counts, setCounts] = useState({
    events: 0,
    universities: 0,
    participants: 0,
    partners: 0,
  });

  useEffect(() => {
    const targets = { events: 120, universities: 50, participants: 10000, partners: 25 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      events: targets.events / steps,
      universities: targets.universities / steps,
      participants: targets.participants / steps,
      partners: targets.partners / steps,
    };
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setCounts({
        events: Math.min(Math.round(increment.events * current), targets.events),
        universities: Math.min(Math.round(increment.universities * current), targets.universities),
        participants: Math.min(Math.round(increment.participants * current), targets.participants),
        partners: Math.min(Math.round(increment.partners * current), targets.partners),
      });
      if (current >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Calendar, value: counts.events, label: 'Events Conducted' },
    { icon: Building2, value: counts.universities, label: 'Universities' },
    { icon: UserPlus, value: counts.participants, label: 'Participants' },
    { icon: Handshake, value: counts.partners, label: 'Industry Partners' },
  ];

  return (
    <section className="py-20 bg-[#DCFCE7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-white rounded-2xl mb-4 shadow-sm">
                <stat.icon className="w-8 h-8 text-[#16A34A]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#0F172A]">
                {stat.value}+
              </div>
              <div className="text-[#374151] mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Search & Filter Component
const SearchFilter = ({ events, setFilteredEvents }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Workshop', 'Training', 'Conference', 'Hackathon', 'Seminar', 'University Visit'];

  useEffect(() => {
    let filtered = events;
    
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedYear) {
      filtered = filtered.filter(event => event.year === selectedYear);
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    setFilteredEvents(filtered);
  }, [searchTerm, selectedYear, selectedCategory, events, setFilteredEvents]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedYear('');
    setSelectedCategory('');
  };

  return (
    <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E5E7EB] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4B5563] w-5 h-5" />
            <input
              type="text"
              placeholder="Search Events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#DCFCE7]/50 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all duration-300"
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-3 bg-[#DCFCE7]/50 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all duration-300 min-w-[120px]"
            >
              <option value="">Year</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-[#DCFCE7]/50 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all duration-300 min-w-[140px]"
            >
              <option value="">Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            
            <button
              onClick={resetFilters}
              className="px-4 py-3 bg-[#16A34A] text-white rounded-xl hover:bg-[#16A34A]/90 transition-all duration-300 font-medium whitespace-nowrap"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Featured Event Component
const FeaturedEvent = ({ events }) => {
  const featured = events[0];
  
  if (!featured) return null;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative bg-white border-2 border-[#E5E7EB] rounded-3xl overflow-hidden hover:border-[#16A34A] hover:shadow-2xl hover:shadow-[#16A34A]/20 transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/20 to-transparent"></div>
              <div className="absolute top-4 left-4 px-4 py-2 bg-[#16A34A] text-white rounded-full text-sm font-medium">
                Featured Event
              </div>
            </div>
            
            <div className="p-8 lg:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#DCFCE7] text-[#16A34A] rounded-full text-sm font-medium">
                  {featured.category}
                </span>
                <span className="text-[#4B5563] text-sm">{featured.year}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-[#0F172A]">{featured.title}</h2>
              <p className="text-[#374151]">{featured.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#4B5563]">
                  <Calendar className="w-5 h-5 text-[#16A34A]" />
                  <span>{featured.date}</span>
                </div>
                <div className="flex items-center gap-2 text-[#4B5563]">
                  <MapPin className="w-5 h-5 text-[#16A34A]" />
                  <span>{featured.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#4B5563]">
                  <Users className="w-5 h-5 text-[#16A34A]" />
                  <span>{featured.participants} participants</span>
                </div>
              </div>
              
              {featured.speakers && (
                <div>
                  <div className="text-sm font-medium text-[#4B5563] mb-2">Speakers:</div>
                  <div className="flex flex-wrap gap-2">
                    {featured.speakers.map((speaker, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#DCFCE7]/50 text-[#0F172A] rounded-full text-sm">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-3 pt-4">
                <button className="px-6 py-3 bg-[#16A34A] text-white rounded-xl hover:shadow-lg hover:shadow-[#16A34A]/30 transition-all duration-300 font-medium">
                  View Details
                </button>
                <button className="px-6 py-3 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#16A34A] hover:bg-[#DCFCE7]/30 transition-all duration-300 font-medium">
                  View Photos
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Events Grid Component
const EventsGrid = ({ events, setLightboxOpen, setLightboxImages, setCurrentImageIndex }) => {
  const [visibleEvents, setVisibleEvents] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleEvents(prev => Math.min(prev + 6, events.length));
      setIsLoading(false);
    }, 500);
  };

  const handleImageClick = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 bg-[#DCFCE7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Upcoming Events</h2>
          <p className="text-[#374151] max-w-2xl mx-auto">
            Explore our diverse range of events and join the AI revolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, visibleEvents).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#16A34A]/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(event.gallery || [event.image], 0)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#16A34A] text-white text-xs rounded-full">
                  {event.category}
                </div>
                <div className="absolute bottom-3 right-3 text-white text-sm flex items-center gap-1">
                  <Camera className="w-4 h-4" />
                  {event.photos || 0}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2 group-hover:text-[#16A34A] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[#374151] text-sm mb-3 line-clamp-2">{event.description}</p>
                <div className="space-y-1 text-sm text-[#4B5563]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#16A34A]" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#16A34A]" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#16A34A]" />
                    {event.participants} participants
                  </div>
                </div>
                <button className="mt-4 text-[#16A34A] font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleEvents < events.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="px-8 py-4 bg-[#16A34A] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#16A34A]/30 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Load More Events'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Masonry Gallery Component
const MasonryGallery = ({ setLightboxOpen, setLightboxImages, setCurrentImageIndex }) => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
  ];

  const handleImageClick = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Event Gallery</h2>
          <p className="text-[#374151] max-w-2xl mx-auto">
            Capturing moments from our events and workshops
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
              onClick={() => handleImageClick(galleryImages, index)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <div className="text-white">
                  <div className="text-sm font-medium">Event Photo</div>
                  <div className="text-xs opacity-80">Click to view</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Lightbox Component
const Lightbox = ({ isOpen, setIsOpen, images, currentIndex, setCurrentIndex }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <div className="relative max-w-6xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
        />
        
        <div className="absolute top-4 left-4 text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
            <Download className="w-5 h-5" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Timeline Section Component
const Timeline = () => {
  const timelineData = [
    { year: '2026', events: ['DGX User Training', 'AI Workshop', 'NVIDIA Conference'] },
    { year: '2025', events: ['University Programs', 'Hackathons', 'Research Symposium'] },
    { year: '2024', events: ['AI Summit', 'Developer Conference', 'Training Programs'] },
  ];

  return (
    <section className="py-20 bg-[#DCFCE7]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Our Journey</h2>
          <p className="text-[#374151]">Track our growth and milestones over the years</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#BBF7D0]"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-all duration-300">
                  <div className="text-[#16A34A] font-bold text-2xl mb-2">{item.year}</div>
                  {item.events.map((event, idx) => (
                    <div key={idx} className="text-[#0F172A] py-1">{event}</div>
                  ))}
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#16A34A] rounded-full border-4 border-white shadow-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Categories Section Component
const Categories = () => {
  const categories = [
    { icon: Brain, label: 'AI Training', color: 'text-[#16A34A]' },
    { icon: Cpu, label: 'Machine Learning', color: 'text-blue-500' },
    { icon: Layers, label: 'Deep Learning', color: 'text-purple-500' },
    { icon: Rocket, label: 'Robotics', color: 'text-orange-500' },
    { icon: Shield, label: 'Cyber Security', color: 'text-red-500' },
    { icon: Cloud, label: 'Cloud Computing', color: 'text-cyan-500' },
    { icon: Zap, label: 'NVIDIA DGX', color: 'text-green-500' },
    { icon: TrendingUp, label: 'Research', color: 'text-indigo-500' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Categories</h2>
          <p className="text-[#374151] max-w-2xl mx-auto">Explore our diverse range of event categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white border-2 border-[#E5E7EB] rounded-2xl p-6 text-center cursor-pointer hover:border-[#16A34A] hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-[#DCFCE7] rounded-2xl mb-4 group-hover:bg-[#16A34A]/10 transition-colors">
                <cat.icon className={`w-8 h-8 ${cat.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="text-[#0F172A] font-medium">{cat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      university: 'MIT',
      feedback: 'The DGX training workshop was exceptional. The hands-on experience with NVIDIA\'s latest technology was invaluable.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Prof. Michael Chen',
      university: 'Stanford University',
      feedback: 'The AI conference provided incredible insights into the future of machine learning and its applications.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      name: 'Dr. Emily Rodriguez',
      university: 'UC Berkeley',
      feedback: 'Participating in the hackathon was a transformative experience. The collaborative environment was outstanding.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#DCFCE7]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Testimonials</h2>
          <p className="text-[#374151]">What our participants say about our events</p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-sm border border-[#E5E7EB] p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#16A34A]"
              />
              <div className="text-[#0F172A] font-semibold text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-[#4B5563] text-sm mb-4">
                {testimonials[currentIndex].university}
              </div>
              <p className="text-[#374151] text-lg italic">"{testimonials[currentIndex].feedback}"</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-[#DCFCE7] hover:bg-[#16A34A]/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#16A34A]" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-[#DCFCE7] hover:bg-[#16A34A]/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#16A34A]" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#16A34A] w-8' : 'bg-[#E5E7EB]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Section Component
const VideoSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Event Highlights</h2>
          <p className="text-[#374151]">Watch our featured event highlights</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop"
            alt="Video Thumbnail"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-2xl hover:shadow-[#16A34A]/50 transition-all duration-300"
            >
              <Play className="w-12 h-12 ml-1" />
            </motion.button>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-lg font-semibold">GRIL AI Conference 2026</div>
            <div className="text-sm opacity-80">Watch the highlights</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Sponsors Component
const Sponsors = () => {
  const sponsors = [
    'NVIDIA', 'Microsoft', 'Google', 'AWS', 'IBM', 'Intel', 'AMD', 'Meta'
  ];

  return (
    <section className="py-20 bg-[#DCFCE7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Our Sponsors</h2>
          <p className="text-[#374151]">Supported by industry leaders</p>
        </div>

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap"
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-lg hover:border-[#16A34A] transition-all duration-300"
              >
                <span className="text-2xl font-bold text-[#0F172A]">{sponsor}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Calendar Component
const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2026);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const eventDates = [5, 15, 20, 25]; // Sample event dates

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const daysArray = [];

    // Empty cells for days before first day
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const isEvent = eventDates.includes(day);
      const isSelected = selectedDate === day;
      daysArray.push(
        <motion.button
          key={day}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSelectedDate(day)}
          className={`h-12 rounded-xl transition-all duration-300 relative ${
            isSelected
              ? 'bg-[#16A34A] text-white shadow-lg shadow-[#16A34A]/30'
              : isEvent
              ? 'bg-[#DCFCE7] text-[#0F172A] hover:bg-[#16A34A]/20'
              : 'hover:bg-[#DCFCE7]/50'
          }`}
        >
          {day}
          {isEvent && !isSelected && (
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#16A34A]"></span>
          )}
        </motion.button>
      );
    }

    return daysArray;
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Event Calendar</h2>
          <p className="text-[#374151]">Stay updated with our upcoming events</p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-3xl shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => {
                if (currentMonth === 0) {
                  setCurrentMonth(11);
                  setCurrentYear(currentYear - 1);
                } else {
                  setCurrentMonth(currentMonth - 1);
                }
              }}
              className="p-2 rounded-full hover:bg-[#DCFCE7] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#0F172A]" />
            </button>
            <div className="text-xl font-bold text-[#0F172A]">
              {months[currentMonth]} {currentYear}
            </div>
            <button
              onClick={() => {
                if (currentMonth === 11) {
                  setCurrentMonth(0);
                  setCurrentYear(currentYear + 1);
                } else {
                  setCurrentMonth(currentMonth + 1);
                }
              }}
              className="p-2 rounded-full hover:bg-[#DCFCE7] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#0F172A]" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {days.map(day => (
              <div key={day} className="text-center text-[#4B5563] font-medium text-sm py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {renderCalendar()}
          </div>

          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-[#DCFCE7]/30 rounded-xl border border-[#BBF7D0]"
            >
              <div className="text-[#0F172A] font-semibold">Events on {months[currentMonth]} {selectedDate}, {currentYear}</div>
              <div className="text-[#374151] text-sm mt-1">AI Workshop at 10:00 AM</div>
              <div className="text-[#374151] text-sm">DGX Training at 2:00 PM</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
const Newsletter = () => {
  return (
    <section className="py-20 bg-[#DCFCE7]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#16A34A]/5 via-[#DCFCE7] to-[#16A34A]/5 rounded-3xl p-12 border border-[#BBF7D0] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#16A34A]/5"
                style={{
                  width: Math.random() * 200 + 50 + 'px',
                  height: Math.random() * 200 + 50 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              Stay Updated
            </h2>
            <p className="text-[#374151] mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter and never miss an event
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-[#16A34A] text-white rounded-xl hover:shadow-2xl hover:shadow-[#16A34A]/30 transition-all duration-300 font-medium flex items-center justify-center gap-2">
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Next Event?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Be part of the AI revolution and connect with industry leaders
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#16A34A] text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-[#16A34A]/30 transition-all duration-300"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#16A34A] text-white rounded-full shadow-2xl shadow-[#16A34A]/30 hover:shadow-[#16A34A]/50 transition-all duration-300"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Main Events Component
const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <SearchFilter 
        events={eventsData} 
        setFilteredEvents={setFilteredEvents}
      />
      <FeaturedEvent events={filteredEvents} />
      <EventsGrid 
        events={filteredEvents} 
        setLightboxOpen={setLightboxOpen}
        setLightboxImages={setLightboxImages}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <MasonryGallery 
        setLightboxOpen={setLightboxOpen}
        setLightboxImages={setLightboxImages}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <Timeline />
      <Categories />
      <Testimonials />
      <VideoSection />
      <Sponsors />
      <EventCalendar />
      <Newsletter />
      <CTASection />
      <BackToTop />
      
      <Lightbox 
        isOpen={lightboxOpen}
        setIsOpen={setLightboxOpen}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </div>
  );
};

export default Events;