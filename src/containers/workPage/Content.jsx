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
                Work previously done. All types of project except videogames.
            </Paragraph>
            <Showcase to="blog" text="Synergia App" src="portfolio-preview/test-project.jpg" />
            <Showcase to="blog" text="Les meves ajudes" src="portfolio-preview/test-project.jpg" />
        </ContentContainer>
    )
};

export default Content;
