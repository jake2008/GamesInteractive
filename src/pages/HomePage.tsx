import { Hero } from "../components/Hero";
import { FundedBy } from "../components/FundedBy";
import { Ethos } from "../components/Ethos";
import { Services } from "../components/Services";
import { FounderProfile } from "../components/FounderProfile";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Ethos />
      <Services />
      <FounderProfile />
      <FundedBy />
      <Contact />
    </main>
  );
}
