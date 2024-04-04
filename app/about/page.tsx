import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen-minus-footer mx-auto px-10 max-w-xl flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">About Me</h1>
      <p>
        Hello! I&apos;m a senior computer science student who&apos;s deeply
        passionate about all things CS-related. I have real-world experience
        operating Linux systems in an internship environment, and I have taken
        elective courses in microcontrollers and network protocols. In the
        upcoming semester, I will also be taking an elective in digital signal
        processing.
      </p>

      <div className="flex flex-col gap-4">
        <p>For this website, I used the following tech stack:</p>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Front-end: React, Typescript, Tailwind</li>
          <li>Back-end: NextJS</li>
          <li>CI/CD: Jenkins, Docker</li>
          <li>Hosting: EC2 AWS with AlmaLinux</li>
        </ul>

        <p className="border-t border-gray-300 pt-6">
          Note that this website is a work in progress.
        </p>
        <p>You can check out the code for this website {' '}
          <a href="https://github.com/availe/availe.io" target="_blank" rel="noopener noreferrer" className='underline'>here</a></p>
      </div>
    </div>
  );
}
