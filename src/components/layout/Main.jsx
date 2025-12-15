export default function Main({ children }) {
  return (
    <main
      className="
        flex-1
        px-4 py-6
        bg-white dark:bg-neutral-600
        text-black dark:text-white
        transition-colors
      "
    >
      {children}
    </main>
  );
}
