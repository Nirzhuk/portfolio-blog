import React from 'react';
import GlitchText from '../../components/GlitchText';
import Paragraph from '../../components/Typography/Paragraph';
import Showcase from '../../components/Showcase';
import ContentContainer from '../../components/StyledComponents/ContentContainer';

const Content = () => {
    return (
        <ContentContainer>
            <GlitchText size="32px"> Who I am:: </GlitchText>
            <Paragraph width="980px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas modi repudiandae tempora est. Obcaecati dolores iusto quia accusantium quo porro placeat culpa quae. Quo omnis repellendus quae labore minima.
            </Paragraph>
        </ContentContainer>
    )
};

export default Content;
