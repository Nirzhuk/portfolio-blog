import React from 'react';
import styled from 'styled-components';
import GlitchText from '../../components/GlitchText'
import Paragraph from '../../components/Typography/Paragraph'
import Showcase from '../../components/Showcase'
const ContentContainer = styled.div`
    color: white;
    padding-top: 90px;
    padding-left: 50px;
    margin: 0 auto;
`;


const Content = () => {
    return (
        <ContentContainer>
            <GlitchText size="32px"> About me:: </GlitchText>
            <Showcase direction="left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab alias cumque, aut maiores aliquid placeat quibusdam temporibus, commodi at repellat, similique distinctio dolor consequuntur sit quis provident ullam vitae dolorem.
            </Showcase>
            <Showcase direction="right">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab alias cumque, aut maiores aliquid placeat quibusdam temporibus, commodi at repellat, similique distinctio dolor consequuntur sit quis provident ullam vitae dolorem.
            </Showcase>

            <Paragraph width="500px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas modi repudiandae tempora est. Obcaecati dolores iusto quia accusantium quo porro placeat culpa quae. Quo omnis repellendus quae labore minima.
            </Paragraph>
        </ContentContainer>
    )
};

export default Content;
