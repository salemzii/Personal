import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Stack</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To basic Design technologies
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Html & Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Django, Flask, Fastapi & SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
