import React from 'react'

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline  border-b-4 border-gray-500'>About</p>
            </div>
           
            <p className='text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi fuga assumenda maxime deserunt vitae sit unde placeat harum tenetur 
                reprehenderit magnam quod distinctio facilis modi provident itaque, aliquid nemo nulla temporibus deleniti dignissimos molestias eveniet. 
                Sint hic doloribus temporibus at molestiae voluptatibus voluptatum aliquid dicta eos dolor explicabo, eveniet neque.</p>
            <br />
            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo facilis cumque ipsam quidem? Provident dignissimos tempore doloribus
                 vitae ut fugiat voluptatibus eligendi expedita qui nihil quasi rem exercitationem asperiores, nulla distinctio velit dicta magni, 
                 necessitatibus iste. Maxime quos temporibus nisi dolores quas ipsum commodi quo dolorum, officiis, dolorem suscipit eos.</p>
        </div>
    </div>
  )
}

export default About