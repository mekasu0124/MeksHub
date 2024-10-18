export default function Title({ props }) {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-shrink-0 mt-5">
      <h1 className="font-inkfree italic text-fg text-3xl tracking-widest">
        {props.title}
      </h1>

      {props.subtitle && (
        <h3 className="font-inkfree italic text-fg text-xl mt-2 tracking-widest">
          {props.subtitle}
        </h3>
      )}
    </div>
  );
};
