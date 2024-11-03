"use client";

import Footer from "./components/footer";
import NavbarMenu from "./components/navbar";
import LandingPage from "./page/LandingPage/landingPage";

export default function Home() {
  return (
    <>
      <header>
        <NavbarMenu />
      </header>
      <main>
        <LandingPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
