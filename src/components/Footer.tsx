
import { Mail, Phone, Copyright, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* First Section - Contact Information */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Information
          </h3>
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Naveen</span>
            </div>
          </div>
          
          
          
          <div className="space-y-3">
            <p className="text-xl font-semibold">Naveen</p>
            
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-lg">9876543210</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-purple-400" />
              <span className="text-lg">algotacademy@gmail.com</span>
            </div>
          </div>
        </div>
        
        {/* Horizontal Divider */}
        <div className="border-t border-gray-600 my-8"></div>
        
        {/* Second Section - Copyright */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Copyright className="h-5 w-5 text-gray-400" />
            <span className="text-lg">2025 Algot Academy</span>
          </div>
          <p className="text-gray-400">
            All rights reserved. Educational content designed for student success.
          </p>
        </div>
        
        {/* Horizontal Divider */}
        <div className="border-t border-gray-600 my-8"></div>
        
        {/* Third Section - Additional Information */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-5 w-5 text-red-500" />
            <span className="text-lg font-semibold">Made with Love for Education</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering students with quality education and innovative learning experiences. 
            Our mission is to make learning accessible, engaging, and effective for everyone.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <p>License expires: June 30, 2025 at 8:00 AM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
