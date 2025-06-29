import emailjs from 'emailjs-com';
import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaAt } from 'react-icons/fa';

// ✅ INIT REQUIRED
emailjs.init('IBB4sgoYTiJenbS5o'); // Replace with your actual public key

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_mim3i7o',        // service ID
        'template_ewym8be',       // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      
      // Success feedback
      alert('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Oops! Something went wrong, please try again. 😅');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      label: 'Phone',
      value: '+1 (812) 837-7652',
      href: 'tel:+18128377652',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'mprajwal1998@gmail.com',
      href: 'mailto:mprajwal1998@gmail.com',
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/prajwal-manohar-ba442a1a9/',
      gradient: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:text-blue-600'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/PrajwalManohar',
      gradient: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:text-gray-700'
    }
  ];

  return (
    <section id='contact' className='min-h-screen py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Contact Info */}
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-xl">
                  <FaEnvelope className="text-3xl text-white" />
                </div>
                <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
                  Let's Connect
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Ready to bring your ideas to life? I'm just a message away. 
                  Let's discuss how we can work together to create something amazing.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">
                    📞
                  </span>
                  Get in Touch
                </h3>
                
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs mr-3">
                    🌐
                  </span>
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 flex items-center justify-center text-2xl text-gray-600 ${social.hoverColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Username Display */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <p className="text-2xl font-bold text-gray-800 flex items-center justify-center lg:justify-start">
                  <span className="text-blue-600 mr-2">@</span>
                  PrajwalManohar
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/50">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Send a Message</h3>
                <p className="text-gray-600">Fill out the form below and I'll get back to you soon!</p>
              </div>

              <form className='space-y-6' onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    value={formData.name}
                    placeholder='Your Name'
                    name='name'
                    required
                    className='w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300'
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaAt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    value={formData.email}
                    placeholder='your.email@example.com'
                    type='email'
                    name='email'
                    required
                    className='w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300'
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    value={formData.message}
                    placeholder='Tell me about your project, ideas, or just say hello...'
                    name='message'
                    rows={6}
                    required
                    className='w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 resize-none'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 ${isSubmitting ? 'animate-pulse' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};