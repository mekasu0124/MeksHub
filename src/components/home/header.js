import {
  HeaderContainer,
  TitleContainer,
  BodyContainer,
  ImageContainer,
  InnerTitleContainer,
  InnerLeftContainer,
  InnerRightContainer,
  Title,
  SubTitle,
  Img,
  NavLink
} from '../../styles/components/header.style';

export default function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <ImageContainer>
          <Img src="/images/app-icon.jpg" alt="Mek's Hub Icon" />
        </ImageContainer>

        <InnerTitleContainer>
          <Title>Mek&#39;s Hub</Title>
          <SubTitle>A Platform Full of Software</SubTitle>
        </InnerTitleContainer>
      </TitleContainer>

      <BodyContainer>
        <InnerLeftContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Browse</NavLink>
          <NavLink to="/">Library</NavLink>
        </InnerLeftContainer>

        <InnerRightContainer>
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/">Support</NavLink>
          <NavLink to="https://discord.gg/vU7BHVtHdR" target="_blank">Join Our Discord</NavLink>
        </InnerRightContainer>
      </BodyContainer>
    </HeaderContainer>
  );
};
