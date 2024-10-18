import Title from '../universal/title';

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-start w-full flex-1">
      <Title props={{ title: 'Welcome To Mek&#39;s Hub!', subtitle: 'A Platform Full Of Software For Users To Enjoy!'}} />

      <div className="flex flex-row items-center justify-evenly flex-1 w-full">
        <div className="flex flex-col items-center justify-start w-[30%] h-[300px] shadow-black shadow-xl rounded-lg p-2"></div>
        
        <div className="flex flex-col items-center justify-start w-[30%] h-[300px] shadow-black shadow-xl rounded-lg p-2"></div>
        
        <div className="flex flex-col items-center justify-start w-[30%] h-[300px] shadow-black shadow-xl rounded-lg p-2"></div>
      </div>
    </main>
  );
};
