import Button from '@mui/material/Button';

const Joining = () => {
  return (

     // Section for call-to-action to encourage partnerships


    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Partner with Us?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join hundreds of healthcare professionals who trust MediCare Surgical
          for their medical equipment needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: 'blue',
              '&:hover': { bgcolor: '#f0f0f0' },
            }}
          >
            Get Started Today
          </Button>
          
          <Button
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: 'blue',
              '&:hover': { bgcolor: '#f0f0f0' },
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Joining;
