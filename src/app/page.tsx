import Link from 'next/link'

export default function HomePage() {
  const services = [
    {
      icon: '⚙️',
      title: 'Machinery Repairs & Maintenance',
      description: 'Expert repair and preventive maintenance services for industrial machinery with 24/7 emergency support.',
      features: ['Emergency Breakdown Repairs', 'Preventive Maintenance Programs', 'Parts Replacement & Sourcing', 'Performance Optimization'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: '👥',
      title: 'Manpower Services',
      description: 'Skilled workforce solutions providing experienced technical and operational staff for your business needs.',
      features: ['Technical Staff Deployment', 'Project-based Teams', 'Operational Support', 'Flexible Staffing Solutions'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '📊',
      title: 'Accounting & Bookkeeping',
      description: 'Professional financial management ensuring accurate records, tax compliance, and strategic financial planning.',
      features: ['Financial Reporting', 'Tax Compliance', 'Payroll Management', 'Budget Planning & Analysis'],
      color: 'from-purple-600 to-indigo-700'
    }
  ]

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: '🎯' },
    { value: '100+', label: 'Happy Clients', icon: '😊' },
    { value: '15+', label: 'Years Experience', icon: '⭐' },
    { value: '24/7', label: 'Support Available', icon: '🚀' }
  ]

  const features = [
    {
      icon: '🏆',
      title: 'Expert Team',
      description: 'Highly skilled professionals with 15+ years of industry experience across multiple domains'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'ISO certified processes ensuring excellence and reliability in every project delivery'
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description: '24/7 emergency support with rapid deployment and efficient problem resolution'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent quotations and no hidden charges'
    },
    {
      icon: '🔒',
      title: 'Safety First',
      description: 'Strict adherence to safety protocols and compliance with industry standards'
    },
    {
      icon: '📞',
      title: 'Customer Support',
      description: 'Dedicated account managers for personalized service and ongoing support'
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'ABC Manufacturing Ltd.',
      text: 'IBM3ENG has been our trusted partner for machinery maintenance. Their quick response and professional service has minimized our downtime significantly.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Tech Solutions Pvt. Ltd.',
      text: 'Excellent accounting services! They handle our books meticulously and their tax planning advice has saved us considerable money.',
      rating: 5
    },
    {
      name: 'Amit Verma',
      company: 'Construction Pro',
      text: 'The manpower services provided by IBM3ENG are top-notch. Skilled workers, timely deployment, and great coordination throughout the project.',
      rating: 5
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Construction', icon: '🏗️' },
    { name: 'Automotive', icon: '🚗' },
    { name: 'Textile', icon: '🧵' },
    { name: 'Food Processing', icon: '🍕' },
    { name: 'Pharmaceuticals', icon: '💊' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-gray-900/90 to-black/95 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-industrial-machinery-in-action-6071/1080p.mp4" type="video/mp4" />
          </video>
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 z-5" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0, 102, 204, .1) 50px, rgba(0, 102, 204, .1) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0, 102, 204, .1) 50px, rgba(0, 102, 204, .1) 51px)',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-down">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight text-white">
                ENGINEERING
                <span className="block mt-2 text-gradient bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400 bg-clip-text text-transparent">
                  EXCELLENCE
                </span>
                <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl">FOR YOUR BUSINESS</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Comprehensive solutions for <span className="text-blue-400 font-semibold">machinery maintenance</span>, 
              <span className="text-orange-400 font-semibold"> manpower services</span>, and 
              <span className="text-purple-400 font-semibold"> accounting excellence</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Link href="/services" className="btn-primary text-lg px-12 py-6 group">
                Explore Services
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-12 py-6 bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                Get Free Quote
              </Link>
            </div>

            {/* Contact Quick Access */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <a href="tel:+919871358409" className="flex items-center text-white hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">+91 98713 58409</span>
              </a>
              <a href="tel:+919540653396" className="flex items-center text-white hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">Technical: +91 95406 53396</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="section-title mb-6">OUR SERVICES</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your business needs with expertise and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-xl card-hover animate-fade-in-up border-2 border-transparent hover:border-blue-200"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-700">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title mb-6">WHY CHOOSE IBM3ENG?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We combine technical expertise with reliable service delivery to ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mr-6 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">INDUSTRIES WE SERVE</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Providing specialized solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4">{industry.icon}</div>
                <p className="font-semibold">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title mb-6">CLIENT TESTIMONIALS</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 animate-fade-in-up">
            READY TO GET STARTED?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto animate-fade-in-up font-light" style={{ animationDelay: '100ms' }}>
            Let's discuss how we can help your business grow with our professional engineering solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-blue-600 bg-white hover:bg-gray-100 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Contact Us Today
            </Link>
            <a 
              href="tel:+919871358409" 
              className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm border-2 border-white"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
