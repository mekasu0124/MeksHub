import {
  MainContainer,
  TitleContainer,
  BodyContainer,
  InnerBodyContainer,
  InnerBodyContainer2,
  Title,
  SubTitle,
  BodyLabel,
  BodyText,
  NavLink
} from '../../styles/components/main.style';

export default function Main() {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>
          Welcome To Mek&#39;s Hub!
        </Title>

        <SubTitle>
          A Platform Full Of Software For Users To Enjoy!
        </SubTitle>
      </TitleContainer>

      <BodyContainer>
        <InnerBodyContainer>
          <InnerBodyContainer2>
            <BodyLabel>Unlock A World of Possibilites</BodyLabel>
            
            <BodyText>
              Dive into our curated collection of applications developed by Mek & 
              Friends. Whether you&#39;re seeking solutions to everyday problems or 
              innovative tools, we&#39;ve got you covered. Each app is created with 
              care, ensuring quality and creativity in every click.
            </BodyText>
          </InnerBodyContainer2>
          
          <InnerBodyContainer2>
            <BodyLabel>Community-Driven Development</BodyLabel>
            
            <BodyText>
              At Mek's Hub, we believe in the power of teamwork and open 
              collaboration. Our community of developers and users work 
              together to create software that not only meets real-world 
              needs but also fosters creativity and innovation. Be part of
              our journey! 
            </BodyText>
          </InnerBodyContainer2>
          
          <InnerBodyContainer2>
            <BodyLabel>Open Source & Beyond</BodyLabel>

            <BodyText>
              From FOSS projects to unique proprietary solutions, our platform 
              features a blend of software that caters to all. Discover tools 
              built to empower you and your team, and contribute to the future 
              of technology with us. Your next favorite app is just a click away!
            </BodyText>
          </InnerBodyContainer2>
        </InnerBodyContainer>

        <InnerBodyContainer>
          <NavLink to="/auth/signup">Sign Up</NavLink>
          <NavLink to="/auth/login">Login</NavLink>
        </InnerBodyContainer>
      </BodyContainer>
    </MainContainer>
  );
};
