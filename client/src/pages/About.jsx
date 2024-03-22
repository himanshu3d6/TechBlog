export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
            About <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">TechBlog</span>
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to TechBlog!
            </p>

            <p>
            An About Us page is a section on a website that provides information about a company, organization, or individual. It is an opportunity to tell your brand’s story, share your vision, history, values, and achievements, and introduce team members. This is where you build trust and credibility with customers.
            </p>

            <p>
              You can leave comments on posts and You can like other people's comments and reply to
              them as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
