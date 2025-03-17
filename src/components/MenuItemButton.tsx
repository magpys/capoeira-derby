type MenuItemButtonProps = {
  title: string;
  onClick: () => void;
};

export default function MenuItemButton({
  title,
  onClick,
}: MenuItemButtonProps) {
  return (
    <button
      className="px-4 py-2 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg rounded-lg inline-block cursor-pointer"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
