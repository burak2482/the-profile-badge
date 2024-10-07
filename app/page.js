import Image from 'next/image';
import Button from './components/Button';
import './globals.css';

export default function Home() {
  return (
    <main class='flex justify-center items-center min-h-screen bg-customDarkBlack'>
      <div class='flex justify-center items-center flex-col bg-customBlack px-8 py-9 rounded-md'>
        <div>
          <Image class='rounded-full' src='./avatar-jessica.jpeg' width={100} height={100}  alt=''/>
        </div>
        <div class='flex flex-col justify-center items-center mt-6'>
          <h1 class='text-white font-custom font-semibold text-xl'>Jessica Randall</h1>
          <h2 class='text-customGreen font-custom font-medium text-sm mt-1'>London United Kingdom</h2>
          <h2 className='font-custom mt-3 text-sm'>&quot;Front-end developer and avid reader.&quot;</h2>
        </div>
        <div class='flex flex-col justify-center items-center space-y-2  mt-6'>
          <Button>GitHub</Button>
          <Button>Frontend Mentor</Button>
          <Button>LinkedIn</Button>
          <Button>Twitter</Button>
          <Button>Instagram</Button>
        </div>
      </div>
    </main>
  );
}
