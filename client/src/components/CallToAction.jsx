import { Button } from 'flowbite-react';
import banner1 from '../banner.png';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to TechBlog</h1>
            <h2 className='text-2xl'>
                Want to learn more about Programming?
            </h2>
            <h3 className='text-gray-500 my-2'>
            Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </h3>
        </div>
        <div className="p-7 flex-1">
            <img src={banner1} />
        </div>
    </div>
  )
}