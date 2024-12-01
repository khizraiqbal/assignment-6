import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div >

<section className="md:flex items-center px-8 ">
    <div className="md:w-1/2 p-10">
      <h1 className=" text-4xl  font-bold mb-4">Learn new skills online with ease</h1>
      <p className="text-gray-600  mb-8 text-[18px]">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      <div className="space-x-3 flex ">
        <button className="px-3 py-2 bg-black text-white rounded hover:bg-gray-800">Start Learning Now</button>
        <button className="px-3 py-2 border border-gray-400 rounded hover:border-black">Explore Courses</button>
      </div>
    </div>
    <div className="md:w-1/2">
      <Image src="/image/file holding girl.jpeg" alt="girl picture" width={640} height={900} className=''/>
    </div>
  </section>
  

   {/* Trusted By Section */}
   <section className=" px-4 py-6 md:justify-center md:items-center md:text-left md:flex md:gap-x-40">
        <p className="text-black text-left text-lg md:text-2xl font-bold ml-0 ">Trusted by 2000+ companies worldwide</p>
        <p className="text-black text-lg font-bold ml-0 md:hidden"> [social proof to build credibility]</p>
        <div className="flex justify-center ">
          {/* logos */}
          <Image  src="/image/logo1.png" alt="logo"  width={120} height={50}/>
          <Image  src="/image/logo2.png" alt="logo"  width={120} height={50}/>
          <Image  src="/image/logo3.png" alt="logo"  width={120} height={50}/>
          <Image  src="/image/logo4.png" alt="logo"  width={120} height={50}/>
          <Image  src="/image/logo5.png" alt="logo"  width={120} height={50} className='hidden'/>
          <Image  src="/image/logo6.png" alt="logo"  width={120} height={50} className='hidden'/>



        </div>
      </section>


      {/* Explore Courses Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Explore Courses By Category</h2>
        <p className="text-center text-gray-600 mb-10">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {[
            { image:"/image/11.jpeg", title: "Design & Development", desc: "50+ Courses Available" },
            { title: "Marketing", desc: "50+ Courses Available" },
            { title: "Development", desc: "50+ Courses Available" },
            { title: "Communication", desc: "50+ Courses Available" },
            { title: "Digital Marketing", desc: "50+ Courses Available" },
            { title: "Self Development", desc: "50+ Courses Available" },
            { title: "Business", desc: "50+ Courses Available" },
            { title: "Finance", desc: "50+ Courses Available" },
            { title: "Consulting", desc: "50+ Courses Available" },
          ].map((course, index) => (
            <div
              key={index}

              

              className="p-6 bg-slate-100 shadow-lg rounded-lg text-center"
            >
               {/* Course Image */}
      {/* <Image
        src={course.image}
        alt={course.image}
        width={25}
        height={20} 
        className="w-full h-48 object-cover"
      /> */}
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700">{course.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            View All Courses
          </button>
        </div>
      </section>


      {/* Our Achievements Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Our Achievements</h2>
        <p className="text-center text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-6 text-center">
          {[
            { count:"+200",  label: "Courses" ,  },
            { count: "50K", label: "Mentors" },
            { count: "370K", label: "Students" },
            { count: "100+", label: "Recognition" },
          ].map((item, index) => (
            <div key={index}>
              
              <h3 className="text-4xl font-bold text-black mb-2">{item.count}</h3>
              <p className="text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>





      <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Courses</h2>
          <p className="text-gray-600">Your Ultimate Guide to Learning</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {["Popular", "Recommended", "Best Price"].map((filter, index) => (
            <button
              key={index}
              className="px-4 py-2 text-black border border-black rounded-lg hover:bg-black hover:text-white"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
           
           
           {
              title: "UX/UI Design 201",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
              category: "Design",
              price: "$400",
              rating: "5.0",
              image:"/image/website 1.jpeg"
          
            },
            
            {
              title: "Introduction to Python",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
              category: "Programming",
              price: "$400",
              rating: "5.0",
              image: "/image/11.jpeg",
            },
            {
              title: "Data Analysis for Beginners",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
              category: "Business",
              price: "$400",
              rating: "5.0",
              image: "/image/22.jpeg"
            },

            {
              category: 'Art',
              title: 'Art Specialization',
              description: 'Learn the fundamentals of art and creativity.',
              price: '$400',
              rating: 5,
              image: '/image/33.jpeg',
            },
            {
              category: 'Law',
              title: 'Rule of Law',
              description: 'Understand the principles of legal systems.',
              price: '$400',
              rating: 5,
              image: '/image/44.jpeg',
            },
            {
              category: 'Tech',
              title: 'Introduction to Webflow',
              description: 'Master modern web development tools.',
              price: '$400',
              rating: 5,
              image: '/image/55.jpeg',
            },

            

          ].map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
             {/* Course Image */}
      <Image
        src= {course.image }
        alt={course.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
              
                 
              
              <div className="p-6">
                
                <span className="text-sm text-gray-500">{course.category}</span>
                <h3 className="text-lg font-bold my-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                    ENROLL NOW
                  </button>
                  <span className="text-lg font-bold">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-200">
          View All Courses
        </button></div>
        </div>
        
    </section>


    <main>

      
    










    </main>
    </div>
  )
}

export default Hero