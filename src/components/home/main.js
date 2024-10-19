import Title from '../universal/title';

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-start w-full flex-1">
      <Title props={{ title: 'Welcome To Mek\'s Hub!', subtitle: 'A Platform Full Of Software For Users To Enjoy!'}} />

      <div className="flex flex-row items-center justify-evenly flex-1 w-full">
        <div className="flex flex-col items-center justify-evenly w-[30%] h-[500px] shadow-black shadow-xl rounded-lg p-2">
          <h3 className="font-inkfree text-fg text-3xl font-bold italic underline tracking-wider">
            Unlock A World of Possibilites
          </h3>
          
          <p className="font-inkfree tracking-wider text-center text-fg text-2xl">
            Dive into our curated collection of applications developed by Mek & 
            Friends. Whether you&#39;re seeking solutions to everyday problems or 
            innovative tools, we&#39;ve got you covered. Each app is created with 
            care, ensuring quality and creativity in every click.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-evenly w-[30%] h-[500px] shadow-black shadow-xl rounded-lg p-2">
          <h3 className="font-inkfree text-fg text-2xl font-bold italic underline tracking-wider">Community-Driven Development</h3>
          
          <p className="font-inkfree tracking-wider text-center text-fg text-2xl">
            At Mek's Hub, we believe in the power of teamwork and open 
            collaboration. Our community of developers and users work 
            together to create software that not only meets real-world 
            needs but also fosters creativity and innovation. Be part of
            our journey! 
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-evenly w-[30%] h-[500px] shadow-black shadow-xl rounded-lg p-2">
          <h3 className="font-inkfree text-fg text-2xl font-bold italic underline tracking-wider">Open Source & Beyond</h3>

          <p className="font-inkfree tracking-wider text-center text-fg text-2xl">
            From FOSS projects to unique proprietary solutions, our platform 
            features a blend of software that caters to all. Discover tools 
            built to empower you and your team, and contribute to the future 
            of technology with us. Your next favorite app is just a click away!
          </p>
        </div>
      </div>
    </main>
  );
};
