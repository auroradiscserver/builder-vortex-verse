import { ChevronDown, Star, Users, Activity, GraduationCap, TrendingUp, Trophy, Award, User2, ArrowRight, Mail, MessageCircle } from "lucide-react";

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-aurora-dark/70 backdrop-blur-sm border-b border-white/10">
    <div className="max-w-7xl mx-auto px-5 lg:px-20">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">Aurora</span>
            <span className="text-white"> Trading</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-100 hover:text-aurora-green transition-colors">Home</a>
          <a href="#path" className="text-gray-100 hover:text-aurora-green transition-colors">Path to Success</a>
          <a href="#indicators" className="text-gray-100 hover:text-aurora-green transition-colors">Indicators</a>
          <a href="#testimonials" className="text-gray-100 hover:text-aurora-green transition-colors">Testimonials</a>
        </nav>

        {/* CTA Button */}
        <button className="bg-aurora-green text-aurora-dark px-4 py-2 rounded-2xl font-medium hover:bg-aurora-green/90 transition-colors">
          Join Discord
        </button>
      </div>
    </div>
  </header>
);

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/430e3a2a3eff00e84c565fda98fee0d560ba0583?width=2880')`
      }}
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-aurora-dark/60 to-aurora-dark/95" />
    
    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        <span className="text-white">Achieve Unparalleled </span>
        <br />
        <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">Success with Aurora</span>
      </h1>
      
      <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
        Join below to embark on your new journey to success in the world of stock market trading.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <button className="bg-aurora-green text-aurora-dark px-8 py-4 rounded-2xl font-bold text-lg hover:bg-aurora-green/90 transition-all shadow-lg shadow-aurora-purple/30">
          Join the Discord FREE
        </button>
        <button className="border border-aurora-purple text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-aurora-purple/10 transition-all">
          Join Premium
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="animate-bounce">
        <ChevronDown className="w-6 h-6 text-aurora-green mx-auto" />
      </div>
    </div>
  </section>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "15+ Professional",
      subtitle: "Analysts",
      description: "Our team of seasoned analysts deliver daily signals across options, futures, and stocks with detailed insights."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-Time Alerts",
      subtitle: "",
      description: "Receive instant notifications for high-probability trades with detailed entry, exit, and risk management guidance."
    },
    {
      icon: <GraduationCap className="w-8 h-6" />,
      title: "Structured Education",
      subtitle: "",
      description: "Access over 200 educational lessons and attend weekly live study sessions to accelerate your trading knowledge."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Live Analysis Daily",
      subtitle: "",
      description: "Join our daily live trading calls, lessons, and study sessions to revolutionize your trading knowledge and kickstart your journey to success."
    }
  ];

  return (
    <section className="py-20 bg-aurora-dark">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">What Sets Us </span>
            <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">Apart</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the unique advantages that make Aurora Trading the premier community for traders of all experience levels
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-aurora-dark/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-aurora-green/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
              {feature.subtitle && <h4 className="text-xl font-bold text-white mb-4">{feature.subtitle}</h4>}
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Membership Section
const PremiumSection = () => (
  <section className="py-20 bg-aurora-dark">
    <div className="max-w-7xl mx-auto px-5 lg:px-20">
      <div className="bg-gradient-to-r from-aurora-dark/80 to-aurora-dark/90 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-aurora-purple/30 border border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">Premium </span>
              <span className="text-white">Membership</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-semibold">
              Go beyond alerts — gain access to Aurora AI, communal mentorship, advanced education, professional trade alerts, and your personalized growth path.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Exclusive access to Aurora AI tools and predictive market analysis",
                "Daily live trading calls and lessons",
                "Advanced educational content and strategy workshops",
                "Priority trade alerts and in-depth market commentary"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-aurora-green flex-shrink-0 mt-1" />
                  <span className="text-white font-semibold">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-aurora-purple text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-aurora-purple/90 transition-all">
              Unlock Premium Access
            </button>
          </div>

          {/* Right Content - Pricing Card */}
          <div className="bg-aurora-dark/70 border border-aurora-purple/30 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-aurora-green text-sm font-medium mb-2">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Monthly</h3>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-4xl font-bold text-white">$65</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 text-sm">Cancel anytime</p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Access to our proprietary Path to Success integrated course",
                "Advanced educational content",
                "Priority trade alerts",
                "Weekly mentorship sessions"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-aurora-green fill-current" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-aurora-green to-aurora-purple text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
              Subscribe via Whop
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Path to Success Section
const PathSection = () => (
  <section id="path" className="py-20 bg-aurora-dark">
    <div className="max-w-7xl mx-auto px-5 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-white">Your </span>
          <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">Path to Success</span>
        </h2>
        <p className="text-gray-300 text-lg">
          A structured roadmap designed to transform beginners into expert traders
        </p>
      </div>

      {/* Progress Path */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative">
          {/* Progress Points */}
          <div className="relative flex justify-between">
            {/* Progress Line */}
            <div className="absolute top-2.5 h-1 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full" style={{ left: '10px', right: '10px' }} />
            {[
              { label: "Beginner", subtitle: "Fundamentals" },
              { label: "Intermediate", subtitle: "Strategy Building" },
              { label: "Advanced", subtitle: "Application" },
              { label: "Expert", subtitle: "Mastery" }
            ].map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-full shadow-lg shadow-aurora-green/70 mb-4" />
                <div className="text-center">
                  <div className="text-aurora-green font-bold">{stage.label}</div>
                  <div className="text-gray-400 text-sm">{stage.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Journey Card */}
      <div className="bg-aurora-dark/50 border border-gray-700 rounded-2xl p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b06746f73c5f837267fde4f71f330fd591e06a20?width=532"
            alt="Learning Journey"
            className="rounded-xl w-full"
          />
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Structured Learning Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our 7,000-file, quiz-based education engine gives you a structured roadmap from beginner to expert. 
              Unlock rewards, roles, and permanent Premium discounts as you progress.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: <Trophy className="w-5 h-5" />, text: "Skill-based rewards" },
                { icon: <Award className="w-4 h-4" />, text: "Achievement badges" },
                { icon: <User2 className="w-4 h-4" />, text: "Community recognition" },
                { icon: <Star className="w-3 h-4" />, text: "Premium discounts" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-aurora-green">{item.icon}</div>
                  <span className="text-white text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <button className="border border-aurora-green text-aurora-green px-6 py-3 rounded-2xl font-medium hover:bg-aurora-green hover:text-aurora-dark transition-all flex items-center gap-2">
              Explore the Path
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "I went from total beginner to funded trader within 6 months thanks to Aurora. The structured learning path and mentorship made all the difference.",
      author: "Michael T.",
      role: "Funded Trader",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/59bc44e2310a7245a14e634a530bcc048455e2f5?width=96"
    },
    {
      rating: 5,
      text: "The Aurora AI tools have completely changed my trading. I'm now consistently profitable and have a clear strategy for different market conditions.",
      author: "Sarah K.",
      role: "Options Trader",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/a65a7e630243b425b1e50f71ada3c5438940e11f?width=96"
    },
    {
      rating: 5,
      text: "The real-time alerts and analyst commentary helped me understand not just what trades to take, but why they work. This community is worth every penny.",
      author: "David L.",
      role: "Futures Trader",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/8be8dd38573d704413cb7c7f8cf419899c9dfd59?width=96"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-aurora-dark">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">Community Says</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Real stories from traders who have transformed their approach with Aurora Trading
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-aurora-dark/50 border border-gray-700 rounded-2xl p-6 shadow-lg shadow-aurora-purple/20">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => (
  <section className="relative py-20">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/2f6b77fba083b8b3ae46588e39a98b50b799ee9a?width=2880')`
      }}
    />
    <div className="absolute inset-0 bg-aurora-dark/80" />
    
    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        <span className="text-white">Your journey starts here. </span>
        <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">Aurora awaits.</span>
      </h2>
      
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Join thousands of traders who have transformed their approach to the markets with Aurora Trading.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-aurora-green text-aurora-dark px-8 py-4 rounded-2xl font-bold text-lg hover:bg-aurora-green/90 transition-all flex items-center justify-center gap-3">
          <MessageCircle className="w-6 h-5" />
          Join Discord
        </button>
        <button className="bg-aurora-purple text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-aurora-purple/90 transition-all flex items-center justify-center gap-3">
          <Trophy className="w-5 h-5" />
          Join Premium
        </button>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-aurora-dark border-t border-gray-700 py-12">
    <div className="max-w-7xl mx-auto px-5 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-aurora-green to-aurora-purple bg-clip-text text-transparent">Aurora</span>
            <span className="text-white"> Trading</span>
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Professional trading community with real-time alerts, education, and live analysis.
          </p>
          <div className="flex gap-4">
            {/* Social Icons - simplified */}
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Indicators", "Path to Success", "Testimonials"].map((link, index) => (
              <div key={index}>
                <a href="#" className="text-gray-400 hover:text-aurora-green transition-colors">{link}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
          <div className="space-y-2">
            {["Blog", "Education", "Market Analysis", "FAQ"].map((link, index) => (
              <div key={index}>
                <a href="#" className="text-gray-400 hover:text-aurora-green transition-colors">{link}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-aurora-green" />
              <span className="text-gray-400">help.auroratrading@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-4 text-aurora-green" />
              <span className="text-gray-400">Join our Discord</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">© 2023 Aurora Trading. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {["Terms of Service", "Privacy Policy", "Disclaimer"].map((link, index) => (
            <a key={index} href="#" className="text-gray-500 text-sm hover:text-aurora-green transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// Main Homepage Component
export default function Index() {
  return (
    <div className="bg-aurora-dark min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <PremiumSection />
        <PathSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
