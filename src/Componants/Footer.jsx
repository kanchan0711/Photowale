import React from 'react'
import { Youtube , Facebook, Instagram, Twitter, Phone, MapPinHouse , Mail} from 'lucide-react'
// import "./Footer.css"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-10">
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  mb-12">
        
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">About us</h2>
          <p>
            Premium wedding photography for everlasting stories of love. <br />
            Made with love in Gurgaon, India.
          </p>
        </div>
  
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            {['About Us', 'Portfolio', 'Contact Us', 'Our Services', 'FAQs'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Social</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-white transition"><Youtube size={16}/> Youtube</li>
            <li className="flex items-center gap-2 hover:text-white transition"><Facebook size={16}/> Facebook</li>
            <li className="flex items-center gap-2 hover:text-white transition"><Instagram size={16}/> Instagram</li>
            <li className="flex items-center gap-2 hover:text-white transition"><Twitter size={16}/> X</li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><Phone size={16}/> 999999999</li>
            <li className="flex items-center gap-2"><Mail size={16}/> email</li>
            <li className="flex  gap-2"><MapPinHouse size={16}/>
            <p>Fine Home Apartments,
              <br/> Mayur Vihar, New Delhi, Delhi, 110091
            </p>
            </li>
          </ul>
        </div>
      </div>
  
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © Photowale, All Rights Reserved.
      </div>
    </div>
  </footer>
  
  )
}

export default Footer