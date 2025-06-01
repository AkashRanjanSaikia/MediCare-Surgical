// Stats component displaying key numerical highlights about the company

const Stats = () => {
  return (
    <section className="py-16 bg-blue-500 text-white my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-primary-100">
              Proud to serve the healthcare community with excellence
            </p>
          </div>


          {/* Stats grid showing key metrics */}

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2">500+</div>
              <p className="text-primary-100">Healthcare Partners</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2">15+</div>
              <p className="text-primary-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2">10,000+</div>
              <p className="text-primary-100">Products Delivered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2">99%</div>
              <p className="text-primary-100">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Stats