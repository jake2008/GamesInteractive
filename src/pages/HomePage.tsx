import { Hero } from "../components/Hero";
import { FundedBy } from "../components/FundedBy";
import { Ethos } from "../components/Ethos";
import { Portfolio } from "../components/Portfolio";
import { FounderProfile } from "../components/FounderProfile";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Ethos />
      <Portfolio />
      <FounderProfile />
      <FundedBy />
      <Contact />
    </main>
  );
}
