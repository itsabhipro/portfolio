import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
          </LinkColumn>

          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:contact.itsabhipro@gmail.com'>111-111-1111</LinkItem>
          </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating on project at a time</Slogan>
        </CompanyContainer>

       <SocialContainer>
       <SocialIcons href='https://github.com'>
        <AiFillGithub/>
      </SocialIcons>
      <SocialIcons href='https://linkdin.com'>
        <AiFillLinkedin/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram/>
      </SocialIcons>
       </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
