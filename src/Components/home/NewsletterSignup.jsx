import { Mail } from 'lucide-react';
import { TextField, Button, Stack, Box } from '@mui/material';
import { useState } from 'react';


const NewsletterSignup = () => {

    // State for storing email input and submission status
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed with email:', email);
        setEmail('');                   // Clear input field
        setSubmitted(true);             // Show success message
        setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds
    };

    return (
        <section className='my-30'>
            <div className='flex-center flex-col'>
                <div className="bg-gray-900/10 backdrop-blur-md rounded-full border border-white/5 shadow-sm p-4 mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className='text-center'>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        Stay Updated with Medical Innovations
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 ">
                        Get the latest updates on medical equipment, industry news, and exclusive <br />
                        offers delivered directly to your inbox.
                    </p>
                </div>

                 {/* Email input form */}
                <div className='text-center'>
                    <Box maxWidth="800px" width="100%" mx="auto" mt={2}>
                        <form onSubmit={handleSubmit}>
                            <Stack
                                spacing={2}
                                direction={{ xs: 'column', sm: 'row' }}
                                alignItems="center"
                            >
                                <TextField
                                    label="Email address"
                                    variant="outlined"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    fullWidth
                                    size="small"
                                    sx={{ height: 40 }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        width: { xs: '100%', sm: 'auto' },
                                        minWidth: { sm: 150 },
                                        height: 40,
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Stack>
                        </form>
                    </Box>

                    <p className="text-sm text-gray-500 mt-4 mb-6">
                        We respect your privacy. Unsubscribe at any time.
                    </p>

                     {/* Submission success message */}
                     
                    {submitted && (
                        <p className="text-green-600 ">Thanks for subscribing!</p>
                    )}
                </div>

            </div>
        </section>
    )
}

export default NewsletterSignup