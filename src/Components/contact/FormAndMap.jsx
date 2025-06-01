import { TextField, Button } from '@mui/material';
import { Phone, Mail } from '@mui/icons-material';
import { useState } from 'react';

const FormAndMap = () => {

  // State to hold form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to show a success message after form submission
  const [successMessage, setSuccessMessage] = useState('');     


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Thank you for contacting us. We'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccessMessage(''), 5000);
  };


  return (
    <section >
      <div className="flex flex-col lg:flex-row gap-4 flex-wrap min-h-[80vh] mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form */}

        <div className="bg-emerald-100 border-1 rounded-xl p-6 flex-1 min-w-[300px]">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Send us a Message</h1>
          <p className="text-gray-600 mb-6">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-12'>
              <TextField
                label="Subject"
                name="subject"
                fullWidth
                required
                value={formData.subject}
                onChange={handleInputChange}
                sx={{ marginBottom: '20px' }}
              />
              <TextField
                label="Message"
                name="message"
                multiline
                rows={6}
                fullWidth
                required
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit" fullWidth variant="contained" sx={{ marginBottom: 'auto' }}>
              Send Message
            </Button>
          </form>

          {/* show message on success */}
          
          {successMessage && (
            <p className="mt-4 pb-0 mb-0 text-green-600 font-medium text-center">{successMessage}</p>
          )}
          <p className='text-center mt-3'>* Required fields. We typically respond within 24 hours.</p>

          
        </div>

        {/* Location & Emergency Info */}

        <div className="flex flex-col flex-1 min-w-[300px] gap-6">

          {/* Location Card */}

          <div className="bg-emerald-100 border-1 rounded-xl p-6">
            <h1 className="text-xl font-semibold mb-4">Visit Our Location</h1>
            <div className="bg-gray-100 h-64 rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.768558226486!2d91.58347187519529!3d26.106472677136935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a4142182c00c1%3A0x69ba1fb4e82844d8!2sLokpriya%20Gopinath%20Bordoloi%20International%20Airport!5e0!3m2!1sen!2sin!4v1748618480230!5m2!1sen!2sin" width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>


          </div>

          {/* Emergency Card */}
          
          <div className="bg-emerald-100 border-1 rounded-xl p-6">
            <h1 className="text-xl font-semibold mb-4">Emergency</h1>
            <p className="text-gray-600 mb-4">
              For urgent medical equipment needs outside business hours:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="font-medium">Emergency Line: +91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <span className="font-medium">urgent@medicaresurgical.com</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Available 24/7 for critical equipment needs and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormAndMap;