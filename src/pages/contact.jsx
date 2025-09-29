import { useState } from 'react';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label.jsx';
import { Textarea } from '../components/ui/textarea.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useAuth } from '../hooks/useAuth.js';

const Contact = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.username || '',
        email: user?.email || '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to your backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        // Reset form
        setFormData({
            name: user?.username || '',
            email: user?.email || '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-orange-800 via-orange-600 to-orange-800 bg-clip-text text-transparent">Contact Us</h1>
            <p className="text-muted-foreground mb-8 text-center">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Information */}
                <div className="lg:col-span-1">
                    <Card className="bg-gradient-to-br from-white to-orange-50 border border-orange-200">
                        <CardHeader>
                            <CardTitle className="text-orange-800">Get in Touch</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-orange-800">Email</h3>
                                    <p className="text-muted-foreground">support@surefindings.com</p>
                                    <p className="text-muted-foreground">info@surefindings.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-orange-800">Phone</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                    <p className="text-muted-foreground">+91 98765 01234</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-orange-800">Office</h3>
                                    <p className="text-muted-foreground">123 Business Avenue</p>
                                    <p className="text-muted-foreground">Tech Park, Hyderabad</p>
                                    <p className="text-muted-foreground">Telangana 500081, India</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card className="bg-gradient-to-br from-white to-orange-50 border border-orange-200">
                        <CardHeader>
                            <CardTitle className="text-orange-800">Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this regarding?"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Please describe your inquiry in detail..."
                                        rows={6}
                                        required
                                    />
                                </div>

                                <Button type="submit" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3">
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;