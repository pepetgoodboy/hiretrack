export default function ButtonAuth({ text, disabled }) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="w-full flex justify-center bg-[#162D3A] hover:bg-[#162D3A]/90 disabled:bg-[#162D3A]/50 transition-all duration-300 ease-in-out cursor-pointer rounded-[12px] text-white p-[14px] text-center"
    >
      {text}
    </button>
  );
}
