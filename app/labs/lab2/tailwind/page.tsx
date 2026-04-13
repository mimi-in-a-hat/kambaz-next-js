import "./index.css";


export default function TailwindLab() {
 return (
   <div className="p-8">
     <h1 className="text-4xl font-bold mb-8">Tailwind CSS</h1>

      <div>
     <h2 className="text-3xl">Margin</h2>
     <div className="bg-blue-200 mb-4 p-4">
       This div has a bottom margin of 4.
     </div>
     <div className="bg-blue-200 ms-4 me-8 p-4">
       This div has a start margin of 4 and an end margin of 8.
     </div>
     <h2 className="text-3xl mt-8">Padding</h2>
     <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
       This div has starting padding of 2, top padding of 4, and bottom padding of 8.
     </div>
     <div className="bg-green-200 p-6">
       This div has padding all around of 6.
     </div>
   </div>

 <div>
     <h2 className="text-3xl">Font Size</h2>
     <p className="text-sm">This is small text.</p>
     <p className="text-base">This is base text.</p>
     <p className="text-lg">This is large text.</p>
     <p className="text-xl">This is extra large text.</p>
     <p className="text-2xl">This is 2x extra large text.</p>
     <p className="text-3xl">This is 3x extra large text.</p>
     <h2 className="text-3xl font-bold mt-4">Font Weight</h2>
     <p className="font-thin">This is thin font weight.</p>
     <p className="font-light">This is light font weight.</p>
     <p className="font-normal">This is normal font weight.</p>
     <p className="font-medium">This is medium font weight.</p>
     <p className="font-semibold">This is semi-bold font weight.</p>
     <p className="font-bold">This is bold font weight.</p>
     <p className="font-extrabold">This is extra-bold font weight.</p>
     <p className="font-black">This is black font weight.</p>
   </div>

 <div>
     <h2 className="text-3xl font-bold mb-4">Background Colors</h2>
     <div className="bg-red-500 text-white p-4 mb-4">
       This div has a red background.
     </div>
     <div className="bg-green-500 text-white p-4 mb-4">
       This div has a green background.
     </div>
     <div className="bg-blue-500 text-white p-4 mb-4">
       This div has a blue background.
     </div>
     <div className="bg-yellow-500 text-black p-4 mb-4">
       This div has a yellow background.
     </div>
   </div>

<div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
     <div className="md:flex">
       <div className="md:shrink-0">
         <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/react.png" alt="ReactJS logo" />
       </div>
       <div className="p-8">
         <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
           Professional Courses
         </div>
         <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline" >
           Rocket Propulsion Fundamentals
         </a>
         <p className="mt-2 text-gray-500">
           This course provides an in-depth study of the fundamentals of rocket
           propulsion, covering topics such as propulsion theory, engine types,
           fuel chemistry, and the practical applications of rocket technology.
           Designed for students with a strong background in physics and
           engineering, the course includes both theoretical instruction and
           hands-on laboratory work
         </p>
       </div>
     </div>
     <br />
   </div>

   <div>
     <div>
       <h3>Blurs</h3>
       <div className="flex">
         <img className="blur-none w-1/4" src="/images/angelfalls.jpg" />
         <img className="blur-sm w-1/4" src="/images/angelfalls.jpg" />
         <img className="blur-lg w-1/4" src="/images/angelfalls.jpg" />
         <img className="blur-2xl w-1/4" src="/images/angelfalls.jpg" />
       </div>
     </div>
   </div>

   <div>
     <h2>Tailwind Grids</h2>
     <div>
       <h3 className="mt-6 text-3xl font-bold">4 Columns Grid</h3>
       <div className="grid grid-cols-4 gap-4">
         <div className="text-center bg-blue-300 p-3">01</div>
         <div className="text-center bg-blue-300 p-3">02</div>
         <div className="text-center bg-blue-300 p-3">03</div>
         <div className="text-center bg-blue-300 p-3">04</div>
         <div className="text-center bg-blue-300 p-3">05</div>
         <div className="text-center bg-blue-300 p-3">06</div>
         <div className="text-center bg-blue-300 p-3">07</div>
         <div className="text-center bg-blue-300 p-3">08</div>
         <div className="text-center bg-blue-300 p-3">09</div>
       </div>
     </div>
     <div>
       <h3 className="mt-6 text-3xl font-bold">3 Columns Grid</h3>
       <div className="grid grid-cols-3 gap-4">
         <div className="text-center bg-blue-300 p-3">01</div>
         <div className="text-center bg-blue-300 p-3">02</div>
         <div className="text-center bg-blue-300 p-3">03</div>
         <div className="col-span-2 text-center bg-blue-300 p-3">04</div>
         <div className="text-center bg-blue-300 p-3">05</div>
         <div className="text-center bg-blue-300 p-3">06</div>
         <div className="col-span-2 text-center bg-blue-300 p-3">07</div>
       </div>
     </div>
   </div>

   </div>

   
 );


}
