import styled from 'styled-components';
import device from '../../utils/devices'
const ContentContainer = styled.div`
    color: white;
    padding-top: 50px;
    padding-left: 50px;
    margin: 0 auto;
    
    @media ${device.mobile} {
        padding: 90px 16px 0 16px;
    }
`;
export default ContentContainer;