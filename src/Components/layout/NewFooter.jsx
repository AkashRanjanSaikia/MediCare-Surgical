import { Link } from 'react-router-dom';
import { Stethoscope, Phone, Mail, MapPin } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';

const NewFooter = () => {
    return (
        <footer className="bg-white text-gray-800 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-25 mb-12">

                    {/* Brand and Contact Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-blue-400 p-2 rounded-lg">
                                <Stethoscope className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-semibold text-gray-900">MediCare Surgical</span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md">
                            Your trusted partner for premium medical surgical goods. Serving distributors,
                            pharmacies, doctors, and healthcare facilities with quality equipment and
                            reliable service since 2010.
                        </p>

                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-start">
                                <div className="bg-gray-100 p-2 rounded-lg mr-3 mt-0.5">
                                    <Phone className="h-4 w-4 text-blue-600" />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gray-100 p-2 rounded-lg mr-3 mt-0.5">
                                    <Mail className="h-4 w-4 text-blue-600" />
                                </div>
                                <span>info@medicaresurgical.com</span>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gray-100 p-2 rounded-lg mr-3 mt-0.5">
                                    <MapPin className="h-4 w-4 text-blue-600" />
                                </div>
                                <span>
                                    123 Medical Plaza, Bhangagarh,<br />
                                    Guwahati, Assam 781005, India
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Links and Socials */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-25">
                            {/* Quick Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                                    <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                                    <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                                </ul>
                            </div>

                            {/* Legal Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
                                    <li><Link to="/terms" className="hover:text-blue-600">Terms & Conditions</Link></li>
                                    <li><Link to="/refund" className="hover:text-blue-600">Refund Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                            <p className="text-gray-600 text-sm mb-4">Stay updated with our latest products and solutions.</p>
                            <div className='flex gap-5'>
                                <IconButton
                                    component="a"
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ bgcolor: '#f3f4f6', '&:hover': { bgcolor: '#0a66c2', color: '#fff' } }}
                                >
                                    <LinkedInIcon />
                                </IconButton>

                                <IconButton
                                    component="a"
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ bgcolor: '#f3f4f6', '&:hover': { bgcolor: '#333', color: '#fff' } }}
                                >
                                    <GitHubIcon />
                                </IconButton>

                                <IconButton
                                    component="a"
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ bgcolor: '#f3f4f6', '&:hover': { bgcolor: '#1da1f2', color: '#fff' } }}
                                >
                                    <TwitterIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 p-5 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-500">
                        © 2025 MediCare Surgical. All rights reserved. | Professional medical equipment supplier.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default NewFooter;
