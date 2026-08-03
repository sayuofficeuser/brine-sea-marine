import TopBar from "./TopBar";
import Footer from "./Footer";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
