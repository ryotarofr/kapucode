export const ContentFooter = ({ onOpen }: any) => {
  return (
    <div className="">
      <button
        className="fixed bottom-1 ml-2 h-8 rounded-full bg-purple-500 px-3 py-1 text-white lg:bottom-2 lg:h-12 lg:px-4 lg:py-3"
        onClick={onOpen}
      >
        スライドを表示
      </button>
    </div>
  );
};
