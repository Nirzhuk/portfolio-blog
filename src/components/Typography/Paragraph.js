import styled from 'styled-components';
import device from '../../utils/devices';
const Paragraph = styled.p`
    margin: 20px 0px 20px 0px;
    @media ${device.laptop} { 
        max-width: ${props => props.width || 'auto'};
    }
`

export default Paragraph;