export default function Button({children}) {
  return (
    <button class='bg-customGrey text-white font-medium text-sm hover:bg-customGreen py-3 px-12 rounded-md w-full'>
      {children}
    </button>
  );
}
