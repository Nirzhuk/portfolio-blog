import React from 'react';
import GlitchText from '../../components/GlitchText';
import Paragraph from '../../components/Typography/Paragraph';
import Showcase from '../../components/Showcase';
import ContentContainer from '../../components/StyledComponents/ContentContainer';

const Content = () => {
    return (
        <ContentContainer>
            <GlitchText size="32px"> Work:: </GlitchText>
            <Paragraph width="500px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Paragraph>
            <Showcase to="blog" text="Lorem ipsum dolor sit amet consectetur" src="portfolio-preview/gatsby-portfolio.png" />
            <Showcase text="Lorem ipsum dolor sit amet consectetur" src="portfolio-preview/gatsby-portfolio.png" />
        </ContentContainer>
    )
};

export default Content;
