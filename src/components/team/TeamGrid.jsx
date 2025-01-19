import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import bikesh  from '../../assets/images/team/bikesh.jpg';
import janam  from '../../assets/images/team/janam.jpeg';
import pradip  from '../../assets/images/team/pradip.jpg';
import dharmendra  from '../../assets/images/team/dharmendra.jpg';
import harihar  from '../../assets/images/team/harihar.jpeg';
import bishnuhari  from '../../assets/images/team/bishnuhari-tripathi.jpeg';

const teamMembers = [
  {
    name: 'Pradip Timsina',
    role: 'Chief Executive Officer (CEO)',
    image: pradip,
    linkedin: 'https://www.linkedin.com/in/pradiptimsina?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'pradip.timsina@thinktankinfotech.com',
  },
  {
    name: 'Janam Pandey',
    role: 'Managing Director (MD)',
    image: janam,
    linkedin: 'https://np.linkedin.com/in/janam-pandey-6bb571199',
    email: 'janam.pandey@thinktankinfotech.com',
  },
  {
    name: 'Bikesh Gupta',
    role: 'Chief Technical Officer (CTO)',
    image: bikesh,
    linkedin: 'https://np.linkedin.com/in/bikesh-kumar-gupta-aa646b236',
    email: 'bikesh.gupta@thinktankinfotech.com',
  },
  {
    name: 'Dharmendra Thakur',
    role: 'Research & Development Head (R&D)',
    image: dharmendra,
    linkedin: '#',
    email: 'dharmendra.thakur@thinktankinfotech.com',
  },
];

// Our advisors deta here 
const OurAdvisors = [
  {
    name: 'Harihar Kadel',
    role: 'Senior Advisor',
    corporation: 'Oracle Corporation',
    image: harihar,
    linkedin: '#',
    email: '#',
  },
  {
    name: 'Bishnuhari Tripathi',
    role: 'Senior Advisor',
    corporation: '',
    image: bishnuhari,
    linkedin: '#',
    email: '#',
  }
];

const TeamGrid = () => {
  return (
    <>
    <section className="py-20 bg-gray-50">
    {/* Add teams details here  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-700 mb-4" data-aos="zoom-in">
          <span className="text-green-700">Meet</span>{" "}
          <span className="text-orange-600">Our Team</span>
          </h2>
          <p className="text-xl text-gray-600" data-aos="zoom-in">
            The brilliant minds behind our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="1000">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-orange-600">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 group-hover:text-orange-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 group-hover:text-orange-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* Add advisor details here  */}
    <section className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-700 mb-4" data-aos="zoom-in">
          <span className="text-green-700">Our</span>{" "}
          <span className="text-orange-600">Advisors</span>
           </h2>
          {/* <p className="text-xl text-gray-600">
            The brilliant minds behind our success
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="1000">
          {OurAdvisors.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
            <div className="flex justify-center items-center my-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-64 rounded-full object-cover"
              />
               </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-orange-600">{member.name}</h3>
                <p className="text-gray-600 mb-1">{member.role}</p>
                <p className="text-gray-600">{member.corporation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
    
  );
};

export default TeamGrid;