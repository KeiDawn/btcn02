export default function Main({ children }) {
  return (
    <main
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "calc(100vh - 80px)",
        paddingTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingBottom: "1rem",
      }}
    >
      {children}
    </main>
  );
}
