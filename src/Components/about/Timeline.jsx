import { milestones } from "../../Constants"

// Timeline component to showcase key milestones in the company’s journey

const Timeline = () => {
  return (
    <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Milestones that shaped our commitment to healthcare excellence
            </p>
          </div>

          {/* List of milestones */}
          
          <div className="space-y-8 ">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex  items-center">
                <div className="flex-shrink-0 w-24 mt-2">
                  <div className="bg-blue-500 text-white text-sm font-semibold py-3 px-3 rounded-full text-center">
                    {milestone.year}
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Timeline