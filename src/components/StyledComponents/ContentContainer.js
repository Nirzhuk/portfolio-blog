import styled from 'styled-components';
import device from '../../utils/devices'
const ContentContainer = styled.div`
    color: white;
    padding-left: 50px;
    margin: 0 auto;
    
    @media ${device.mobileS} {
        padding-top: 90px;
    }

    @media ${device.desktop} {
        padding-top: 50px;
    }
`;
export default ContentContainer;