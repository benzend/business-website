import styled from "styled-components";

import { AboutSection } from "./AboutSection";
import { Footer } from "../Footer";
import { Header } from "./Header";
import { Nav } from "../Nav";
import { ReviewsSection } from "./ReviewsSection";
import { ServicesSection } from "./ServicesSection";

const NavHeaderContainer = styled.div`
  background: url("https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
    no-repeat center center/cover;
  color: #f1f1f1;
  a {
    color: #ddd;
  }
`;

function Home() {
  return (
    <div>
      <NavHeaderContainer>
        <Nav />
        <Header />
      </NavHeaderContainer>
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default Home;
