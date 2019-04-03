import React from 'react';
import GlitchText from '../../components/GlitchText';
import Paragraph from '../../components/Typography/Paragraph';
import Showcase from '../../components/Showcase';
import ContentContainer from '../../components/StyledComponents/ContentContainer';

const Content = () => {
    return (
        <ContentContainer>
            <GlitchText size="32px"> About me:: </GlitchText>
            <Showcase to="blog" text="Lorem ipsum dolor sit amet consectetur" src="portfolio-preview/gatsby-portfolio.png" />
            <Showcase text="Lorem ipsum dolor sit amet consectetur" src="portfolio-preview/gatsby-portfolio.png" />

            <Paragraph width="500px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas modi repudiandae tempora est. Obcaecati dolores iusto quia accusantium quo porro placeat culpa quae. Quo omnis repellendus quae labore minima.
            </Paragraph>
            <Paragraph width="500px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas modi repudiandae tempora est. Obcaecati dolores iusto quia accusantium quo porro placeat culpa quae. Quo omnis repellendus quae labore minima.
            </Paragraph>
            <Paragraph width="500px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas modi repudiandae tempora est. Obcaecati dolores iusto quia accusantium quo porro placeat culpa quae. Quo omnis repellendus quae labore minima.
            </Paragraph>
        </ContentContainer>
    )
};

export default Content;
