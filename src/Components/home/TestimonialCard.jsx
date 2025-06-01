import { Star } from 'lucide-react';

//  Props:
//   name: string - Name of the person giving the testimonial
//   role: string - Role or job title of the person
//   company: string - Company or organization name
//   content: string - Testimonial text content
//   rating: number - Number of stars to display (1-5)


const TestimonialCard = ({ name, role, company, content, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 hover:shadow-md transition-shadow">
            
      {/* to Show the Stars as rating */}

      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">"{content}"</p>
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-primary font-medium">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;