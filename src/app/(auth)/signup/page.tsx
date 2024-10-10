export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-[90vh]">
      <div className="flex flex-col items-center justify-center w-[60%] h-24 mt-3 tracking-widest">
        <h1 className="font-inkfree text-[#C6C6C6] text-3xl font-bold italic txtShadow2">
          Let&#39;s Get You Started With An Account!
        </h1>
      </div>

      <div className="flex flex-col items-center justify-evenly w-full h-full">
        <form className="flex flex-col items-center justify-evenly w-full h-full">
          <div className="flex flex-col items-center justify-center w-[70%] h-[500px] rounded-3xl border-2 border-foreground shadow-inner boxShadow scrollBox"></div>

          <div className="flex flex=row items-center justify-evenly w-[70%]">
            <button type="button" className="font-inkfree font-bold tracking-wider text-foreground text-2xl border-foreground border-2 w-[300px] rounded-full text-center p-3 hoverButton">Back</button>
            <button type="submit" className="font-inkfree font-bold tracking-wider text-foreground text-2xl border-foreground border-2 w-[300px] rounded-full text-center p-3 hoverButton">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};
