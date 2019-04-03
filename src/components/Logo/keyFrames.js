import { keyframes } from 'styled-components'

const blinkEffect = keyframes`
0% { opacity: 0; }

     5%  { opacity: 0; }
     6% { opacity: 1; }
     11% { opacity: .4; }
     11.25% { opacity: .6; }
     11.5% { opacity: .4; }
     18% { opacity: 1; }
     18.5% { opacity: .9; }
     22% { opacity: 1; }
    
      // flicker
     38.5% { opacity: 1; }
     39% { opacity: .8; }
     42% { opacity: 1; }
    
     // flicker
     60% { opacity: 1; }
     60.5% { opacity: 0; }
     62% { opacity: 0; }
     63% { opacity: .2; }
     63.25% { opacity: 0; }
     65% { opacity: 1; }
    
     // flicker
     73% { opacity: 1; }
     75% { opacity: .8; }
     79% { opacity: 1; }
    
     100% { opacity: 1; }
`;

export { blinkEffect };