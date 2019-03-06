import React from 'react';
import styled from 'styled-components';
import GlitchText from '../../components/GlitchText'
import Paragraph from '../../components/Typography/Paragraph'

const ContentContainer = styled.div`
    color: white;
    padding-top: 30px;
    padding-left: 50px;
    margin: 0 auto;
`;


const Content = () => {
    return (
        <ContentContainer>
            <GlitchText size="32px"> About me:: </GlitchText>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas modi repudiandae tempora est. Obcaecati dolores iusto quia accusantium quo porro placeat culpa quae. Quo omnis repellendus quae labore minima.
            </Paragraph>
        </ContentContainer>
    )
};

export default Content;
