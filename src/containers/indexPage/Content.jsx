import React from 'react';
import GlitchText from '../../components/GlitchText';
import Paragraph from '../../components/Typography/Paragraph';
import ContentContainer from '../../components/StyledComponents/ContentContainer';

const Content = () => {
  return (
    <ContentContainer>
      <GlitchText size="32px"> Who I am:: </GlitchText>
      <Paragraph width="980px">My name is Joan Rafael Serrano Perez. I'm actually a Fullstack Developer working and living on Barcelona. </Paragraph>
      <Paragraph width="980px">Please, enjoy my portfolio, I tried something different. </Paragraph>
    </ContentContainer>
  )
};

export default Content;
