import { ChevronDown, Star, Users, Eye, AlertTriangle, Palette, Lock, Award, Trophy, BabyIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Header Component
const Header = () => (
  <header className="flex w-full h-16 px-20 justify-center items-center border border-white/10 bg-slate-900/70">
    <div className="w-full max-w-7xl flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">
          Aurora
        </span>
        <span className="text-white"> Trading</span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
        <Link to="/path-to-success" className="text-white font-medium">Path to Success</Link>
        <span className="text-white/80">Indicators</span>
        <span className="text-white/80">Testimonials</span>
      </nav>
      
      <button className="bg-aurora-green text-slate-900 px-6 py-2 rounded-2xl font-medium hover:bg-aurora-green/90 transition-colors">
        Join Discord
      </button>
    </div>
  </header>
);

// Hero Section
const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/22a97188a0cdd8a7b6448656b02e6926f1b606ae?width=2880')"
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/95" />
    
    <div className="relative z-10 max-w-6xl mx-auto px-48 text-center">
      <h1 className="text-6xl font-bold leading-tight mb-8">
        <span className="text-white">The Most Advanced Trading
        </span>
        <br />
        <span className="bg-gradient-to-r from-aurora-green via-aurora-green to-aurora-purple bg-clip-text text-transparent">
          Education Built Into Discord
        </span>
      </h1>
      
      <p className="text-xl text-white mb-12 max-w-4xl mx-auto">
        Aurora's Path to Success is a guided, quiz-locked, XP-powered journey — fully integrated 
        into our trading community.
      </p>
      
      <div className="flex justify-center gap-4 mb-12">
        <button className="bg-aurora-green text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-aurora-green/50">
          Join the Discord FREE
        </button>
        <button className="border border-aurora-purple text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-aurora-purple/10 transition-colors">
          Join Premium
        </button>
      </div>
      
      <div className="flex justify-center">
        <ChevronDown className="text-aurora-green w-6 h-6 animate-bounce" />
      </div>
    </div>
  </section>
);

// How it Works Section
const HowItWorksSection = () => (
  <section className="py-20 px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-white">How the </span>
          <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">
            Path to Success
          </span>
          <span className="text-white"> Works</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          A fully automated Discord education system with 7,000+ files, quiz-locked progression, and real rewards
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full flex items-center justify-center mb-6 mx-auto">
            <span className="text-white font-bold text-2xl">1</span>
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-4">Start Your Journey</h3>
          <p className="text-gray-300 text-center">
            Use <code className="bg-gray-700 px-2 py-1 rounded text-aurora-green">/startsurvey</code> in any channel
            — the bot builds a custom learning path based on your goals and experience level.
          </p>
        </div>
        
        <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full flex items-center justify-center mb-6 mx-auto">
            <span className="text-white font-bold text-2xl">2</span>
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-4">Complete Lessons</h3>
          <p className="text-gray-300 text-center">
            Progress through video-based lessons with <code className="bg-gray-700 px-2 py-1 rounded text-aurora-green">/viewpath</code> and <code className="bg-gray-700 px-2 py-1 rounded text-aurora-green">/completelesson</code>.
          </p>
        </div>
        
        <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full flex items-center justify-center mb-6 mx-auto">
            <span className="text-white font-bold text-2xl">3</span>
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-4">Pass Quizzes</h3>
          <p className="text-gray-300 text-center">
            Take timed quizzes with <code className="bg-gray-700 px-2 py-1 rounded text-aurora-green">/startquiz</code> (75% pass required) to advance and unlock real perks.
          </p>
        </div>
      </div>
      
      <div className="bg-slate-900 border border-aurora-purple/20 rounded-3xl p-8 shadow-lg shadow-aurora-purple/30">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Key Discord Commands</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-aurora-green/20 rounded-xl p-4">
            <div className="text-aurora-green text-lg font-medium mb-2">/startsurvey</div>
            <p className="text-gray-300 text-sm">Begin your personalized learning path</p>
          </div>
          <div className="bg-slate-900/80 border border-aurora-green/20 rounded-xl p-4">
            <div className="text-aurora-green text-lg font-medium mb-2">/viewpath</div>
            <p className="text-gray-300 text-sm">View assigned lessons and progress</p>
          </div>
          <div className="bg-slate-900/80 border border-aurora-green/20 rounded-xl p-4">
            <div className="text-aurora-green text-lg font-medium mb-2">/startquiz</div>
            <p className="text-gray-300 text-sm">Take timed quizzes to advance</p>
          </div>
          <div className="bg-slate-900/80 border border-aurora-green/20 rounded-xl p-4">
            <div className="text-aurora-green text-lg font-medium mb-2">/viewquizcooldown</div>
            <p className="text-gray-300 text-sm">Check timer between quizzes</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Rank Ladder Section
const RankLadderSection = () => (
  <section className="py-20 px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-white">Full </span>
          <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">
            Rank Ladder
          </span>
        </h2>
        <p className="text-gray-300 text-lg">
          Progress through 8 trading ranks and earn permanent Premium discounts
        </p>
      </div>
      
      {/* Progress Line */}
      <div className="relative mb-16">
        <div className="h-1.5 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full mx-62 relative">
          {[...Array(7)].map((_, i) => (
            <div 
              key={i}
              className="w-6 h-6 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full shadow-lg shadow-aurora-green/70 absolute top-1/2 -translate-y-1/2"
              style={{ left: `${(i * 100) / 6}%`, transform: 'translateX(-50%) translateY(-50%)' }}
            />
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Baby Trader */}
        <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-6">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto">
            <BabyIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white text-center mb-2">@Baby Trader</h3>
          <p className="text-gray-400 text-sm text-center mb-4">Just joined Aurora</p>
          <div className="text-red-400 text-xl font-bold text-center">$65/mo</div>
        </div>
        
        {/* Novice Trader */}
        <div className="bg-slate-900/50 border border-yellow-500/30 rounded-2xl p-6">
          <div className="w-12 h-12 bg-gradient-to-b from-yellow-600 to-yellow-300 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Users className="w-6 h-6 text-slate-900" />
          </div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-600 to-yellow-300 bg-clip-text text-transparent text-center mb-2">@Novice Trader</h3>
          <p className="text-gray-400 text-sm text-center mb-4">1st leg complete</p>
          <div className="text-xl font-bold bg-gradient-to-b from-yellow-600 to-yellow-300 bg-clip-text text-transparent text-center">$60/mo</div>
        </div>
        
        {/* Competent Trader */}
        <div className="bg-slate-900/50 border border-green-500/30 rounded-2xl p-6">
          <div className="w-12 h-12 bg-gradient-to-b from-yellow-300 to-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent text-center mb-2">@Competent Trader</h3>
          <p className="text-gray-400 text-sm text-center mb-4">3rd leg complete</p>
          <div className="text-xl font-bold bg-gradient-to-b from-yellow-300 to-green-500 bg-clip-text text-transparent text-center">$60/mo</div>
        </div>
        
        {/* Intermediate Trader */}
        <div className="bg-slate-900/50 border border-emerald-400/30 rounded-2xl p-6">
          <div className="w-12 h-12 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent text-center mb-2">@Intermediate Trader</h3>
          <p className="text-gray-400 text-sm text-center mb-4">5th leg complete</p>
          <div className="text-xl font-bold bg-gradient-to-b from-green-500 to-emerald-400 bg-clip-text text-transparent text-center">$55/mo</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Advanced Trader */}
        <div className="bg-slate-900/50 border border-cyan-400/30 rounded-2xl p-6">
          <div className="w-12 h-12 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-center mb-2">@Advanced Trader</h3>
          <p className="text-gray-400 text-sm text-center mb-4">6th leg complete</p>
          <div className="text-xl font-bold bg-gradient-to-b from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-center">$55/mo</div>
        </div>
        
        {/* Expert Trader */}
        <div className="bg-slate-900/50 border border-blue-500/30 rounded-2xl p-6">
          <div className="w-12 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Star className="w-6 h-6 text-slate-900" />
          </div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center mb-2">@Expert Trader</h3>
          <p className="text-gray-400 text-sm text-center mb-4">7th leg complete</p>
          <div className="text-xl font-bold bg-gradient-to-b from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">$50/mo</div>
        </div>
        
        {/* Elite Trader */}
        <div className="bg-slate-900/50 border border-purple-500/30 rounded-2xl p-6">
          <div className="w-12 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center mb-2">@Elite Trader</h3>
          <p className="text-gray-400 text-sm text-center mb-4">8th leg complete</p>
          <div className="text-xl font-bold bg-gradient-to-b from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">$45/mo</div>
        </div>
      </div>
    </div>
  </section>
);

// Performance Rewards Section
const PerformanceRewardsSection = () => (
  <section className="py-20 px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-white">Performance-Based </span>
          <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">
            Elite Rewards
          </span>
        </h2>
        <p className="text-gray-300 text-lg">
          After completing the Path, earn additional discounts through proven profitable trading performance
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-r from-red-500/20 to-slate-900/80 border border-red-500/30 rounded-2xl p-8">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-red-500 text-center mb-4">@Master Trader</h3>
          <p className="text-gray-300 text-center mb-6">Proven profitable quarter</p>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">$40/mo</div>
            <p className="text-gray-400 text-sm">Staff-evaluated performance</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500/80 to-slate-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-lg shadow-yellow-500/15">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Trophy className="w-8 h-8 text-slate-900" />
          </div>
          <h3 className="text-2xl font-bold text-yellow-500 text-center mb-4">@Legendary Trader</h3>
          <p className="text-gray-300 text-center mb-6">Proven profitable full year</p>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">$20/mo</div>
            <p className="text-gray-400 text-sm">Ultimate achievement</p>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-900/80 border border-aurora-purple/20 rounded-2xl p-6 flex items-center justify-center">
        <AlertTriangle className="w-4 h-4 text-aurora-purple mr-3" />
        <p className="text-gray-300 text-center">
          These roles are staff-evaluated and separate from quiz progression
        </p>
      </div>
    </div>
  </section>
);

// Gamification Features Section
const GamificationSection = () => (
  <section className="py-20 px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-white">Gamification </span>
          <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">
            Features
          </span>
        </h2>
        <p className="text-gray-300 text-lg">
          Experience the most advanced Discord education system with XP tracking and rewards
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-900/50 border border-aurora-green/20 rounded-2xl p-6">
          <div className="w-12 h-12 bg-aurora-green rounded-full flex items-center justify-center mb-4 mx-auto">
            <Star className="w-6 h-6 text-slate-900" />
          </div>
          <h3 className="text-lg font-bold text-white text-center mb-3">XP Rewards</h3>
          <p className="text-gray-300 text-sm text-center">
            Earn XP from messages, attending sessions, and passing quizzes
          </p>
        </div>
        
        <div className="bg-slate-900/50 border border-aurora-purple/20 rounded-2xl p-6">
          <div className="w-12 h-12 bg-aurora-purple rounded-full flex items-center justify-center mb-4 mx-auto">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white text-center mb-3">Smart Tracking</h3>
          <p className="text-gray-300 text-sm text-center">
            Discord bot tracks all progress and cooldowns automatically
          </p>
        </div>
        
        <div className="bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white text-center mb-3">Visual Status</h3>
          <p className="text-gray-300 text-sm text-center">
            Usernames glow with role colors and higher sidebar positioning
          </p>
        </div>
        
        <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-6">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white text-center mb-3">Progress Lock</h3>
          <p className="text-gray-300 text-sm text-center">
            All Path progress resets if you cancel your Premium status
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Premium System Section
const PremiumSystemSection = () => (
  <section className="py-20 px-48">
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-aurora-green/10 to-aurora-purple/10 border border-aurora-green/15 rounded-3xl p-12 shadow-lg shadow-aurora-purple/30">
        <div className="w-20 h-20 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full flex items-center justify-center mb-8 mx-auto">
          <Lock className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-white">Premium-Only </span>
          <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">
            Education System
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-12 leading-relaxed">
          The Path to Success education system is exclusive to Premium members. Get access to 8 immersive legs of education, structured progression, and permanent discounts.
        </p>
        
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm mb-2">Starting at</p>
          <div className="text-5xl font-bold bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent mb-2">
            $65/mo
          </div>
          <p className="text-lg text-gray-300">Decreases as you progress through ranks</p>
        </div>
        
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-aurora-green to-aurora-purple text-slate-900 px-12 py-3 rounded-xl font-bold text-lg shadow-lg shadow-aurora-purple/50">
            Upgrade via Whop
          </button>
        </div>
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQSection = () => {
  const faqs = [
    "How long does the course take?",
    "Are quizzes hard?", 
    "Can I lose progress?",
    "Do I have to follow the path exactly?",
    "Where can I find my information?"
  ];

  return (
    <section className="py-20 px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            <span className="text-white">Frequently Asked </span>
            <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Everything you need to know about the Path to Success
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-500/50 rounded-xl">
              <button className="w-full flex justify-between items-center py-6 px-6 text-left hover:bg-gray-800/30 transition-colors">
                <span className="text-xl font-bold text-white">{faq}</span>
                <ChevronDown className="w-4 h-4 text-aurora-green" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => (
  <section className="py-20 px-48">
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-aurora-green/20 to-aurora-purple/20 border border-aurora-green/30 rounded-3xl p-12 shadow-lg shadow-aurora-purple/20">
        <h2 className="text-5xl font-bold text-center mb-8 leading-tight">
          <span className="text-white">A smarter trader isn't born — they're </span>
          <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">
            built.
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-12">
          Start your transformation with Aurora Trading.
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-aurora-green text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-aurora-green/50">
            Join Discord
          </button>
          <button className="bg-gradient-to-r from-aurora-green to-aurora-purple text-slate-900 px-12 py-4 rounded-xl font-bold text-lg">
            Start the Path to Success
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Main Page Component
const PathToSuccess = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <RankLadderSection />
      <PerformanceRewardsSection />
      <GamificationSection />
      <PremiumSystemSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default PathToSuccess;
