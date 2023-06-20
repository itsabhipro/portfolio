import React from 'react';
import { DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web development world.From Back-end to Design.
    </SectionText>
    <List>
       <ListItem>
         <DiReact />
         <ListContainer>
           <ListTitle>Frontend</ListTitle>
           <ListParagraph>
            Exprerience with <br/>
            React.js
           </ListParagraph>
         </ListContainer>
       </ListItem>

       <ListItem>
         <DiDatabase />
         <ListContainer>
           <ListTitle>Back-End</ListTitle>
           <ListParagraph>
            Exprerience with <br/>
            Node.js and Databases.
           </ListParagraph>
         </ListContainer>
       </ListItem>

       <ListItem>
         <DiZend />
         <ListContainer>
           <ListTitle>UI/UX</ListTitle>
           <ListParagraph>
            Exprerience with <br/>
            tools like figma.
           </ListParagraph>
         </ListContainer>
       </ListItem>
    </List>
  </Section>
);

export default Technologies;
