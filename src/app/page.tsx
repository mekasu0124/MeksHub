import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <header className="flex flex-row justify-evenly items-center w-full h-14 bg-bg2">
        <h1 className="font-inkfree text-foreground text-3xl tracking-widest font-bold italic txtShadow">Mek&#39;s Hub</h1>
        <Image src="/images/app-icon.jpg" alt="Mek's Hub Icon" width={100} height={50} className="rounded" />
      </header>

      <main></main>

      <footer className="flex flex-col items-center justify-center w-full h-14 bottom-0 fixed bg-bg2">
        <p className="font-inkfree text-foreground text-2xl tracking-widest font-bold italic txtShadow">&copy;Mek & Friends 2024</p>
      </footer>
    </div>
  );
}
