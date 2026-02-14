import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: '⚙️',
      title: 'Machinery Repairs & Maintenance',
      description: 'Comprehensive repair and maintenance solutions for industrial machinery and equipment to ensure optimal performance and minimal downtime.',
      details: [
        'Emergency breakdown repairs',
        'Preventive maintenance programs',
        'Equipment diagnostics and troubleshooting',
        'Parts replacement and sourcing',
        'Performance optimization',
        'Regular inspection services'
      ],
      benefits: [
        'Reduced downtime',
        'Extended equipment life',
        'Cost-effective solutions',
        '24/7 emergency support'
      ]
    },
    {
      icon: '👥',
      title: 'Manpower Services',
      description: 'Professional manpower solutions providing skilled and experienced workforce for various industrial and operational requirements.',
      details: [
        'Skilled technical staff deployment',
        'Operational support teams',
        'Project-based workforce',
        'Temporary and permanent staffing',
        'Specialized technicians',
        'Site management personnel'
      ],
      benefits: [
        'Flexible staffing solutions',
        'Trained professionals',
        'Quick deployment',
        'Reduced hiring costs'
      ]
    },
    {
      icon: '📊',
      title: 'Accounting & Bookkeeping Services',
      description: 'Expert financial management and bookkeeping services to help businesses maintain accurate records and ensure compliance.',
      details: [
        'Financial statement preparation',
        'Bookkeeping and record maintenance',
        'Tax preparation and compliance',
        'Payroll processing',
        'Budget planning and analysis',
        'Financial consulting'
      ],
      benefits: [
        'Accurate financial records',
        'Tax compliance',
        'Cost savings',
        'Professional expertise'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-dark-800 to-dark-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              OUR SERVICES
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive solutions designed to support and grow your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div 
                  className={`animate-fade-in-up ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  style={{ animationDelay: '100ms' }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="text-7xl mb-6">{service.icon}</div>
                    <h2 className="text-4xl font-display font-bold text-dark-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-dark-900 mb-4">Service Details:</h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, dIndex) => (
                          <li key={dIndex} className="flex items-start text-gray-700">
                            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div 
                  className={`animate-fade-in-up ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{ animationDelay: '200ms' }}
                >
                  <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-8 shadow-xl text-white">
                    <h3 className="text-3xl font-display font-bold mb-6">Key Benefits</h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-center">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/30">
                      <Link 
                        href="/contact"
                        className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-primary-600 bg-white hover:bg-gray-100 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Request This Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title mb-4">OUR PROCESS</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple and efficient workflow to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial discussion to understand your requirements' },
              { step: '02', title: 'Assessment', desc: 'Detailed evaluation and solution planning' },
              { step: '03', title: 'Implementation', desc: 'Professional execution of services' },
              { step: '04', title: 'Support', desc: 'Ongoing support and maintenance' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-display font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in-up">
            NEED A CUSTOMIZED SOLUTION?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Contact us to discuss your specific requirements and get a tailored solution
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-primary-600 bg-white hover:bg-gray-100 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
