export function Footer() {
  return (
    <footer className="container section" style={{ paddingBottom: "3rem" }}>
      <div className="muted" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>? {new Date().getFullYear()} Intelliwave</span>
        <span>Design minimal, impact maximal.</span>
      </div>
    </footer>
  );
}
