export default function TitleBar() {
  return (
    <div className="flex flex-row items-center justify-center w-full border-b-2 border-b-black ">
      <div className="flex flex-col items-center justify-start w-full p-2">
        <img src="/images/app-icon.jpg" alt="Mek's Hub Icon" className="w-[150px] h-[80px] rounded-lg" />
      </div>

      <div className="flex flex-col items-center justify-end w-full p-2">
        <h1 className="font-inkfree font-bold text-fg text-3xl italic">Mek&#39;s Hub</h1>
        <h3 className="font-inkfree text-fg text-base italic">
          A Platform Full of Software
        </h3>
      </div>
    </div>
  );
};
