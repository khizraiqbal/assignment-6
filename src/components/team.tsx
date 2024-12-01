import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  twitter: string;
  dribbble: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'James Nduku',
    role: 'Marketing Coordinator',
    image: '/image/css1.png', 
    linkedin: '<FaLinkedin />',
    twitter: '<FaTwitter />',
    dribbble: '<FaDribbble />',
  },
  {
    name: 'Joseph Munyambu',
    role: 'Nursing Assistant',
    image: '/image/css2.png',
    linkedin: '<FaLinkedin />',
    twitter: '<FaTwitter />',
    dribbble: '<FaDribbble />',
  },
  {
    name: 'Joseph Ngumbau',
    role: 'Medical Assistant',
    image: '/image/css3.png',
    linkedin: '<FaLinkedin />',
    twitter: '<FaTwitter />',
    dribbble: '<FaDribbble />',
  },
  {
    name: 'Erick Kipkemboi',
    role: 'Web Designer',
    image: '/image/css4.png',
    linkedin: '<FaLinkedin />',
    twitter: '<FaTwitter />',
    dribbble: '<FaDribbble />',
  },
  {
    name: 'Stephen Kerubo',
    role: 'President of Sales',
    image: '/image/css5.png',
    linkedin: '<FaLinkedin />',
    twitter: '<FaTwitter />',
    dribbble: '<FaDribbble />',
  },
  {
    name: 'John Leboo',
    role: 'Dog Trainer',
    image: '/image/css6.png',
    linkedin: '<FaLinkedin />',
    twitter: '<FaTwitter />',
    dribbble: '<FaDribbble />',
  },
];

export default function Home() {
  return (
    <>
      
        <title>Our Team</title>
      
      <main className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Team</h2>
          <p className="mt-4 text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="text-center bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <Image
                  className="w-24 h-24 mx-auto rounded-full"
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-gray-600">{member.role}</p>
                <div className="mt-4 flex justify-center space-x-4 cursor-pointer">
                  
                  <FaLinkedin />
                  <FaTwitter />
                <FaDribbble />
                  
              
                    
                </div>
                
              
              </div>
            ))}
          </div>
          
        </div>
    
      </main>
    </>
  );
}


