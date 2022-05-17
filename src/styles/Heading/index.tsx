import styled from 'styled-components';
import tw from 'twin.macro';

export const Heading = styled.h1`
  ${() => tw`font-bold text-4xl mb-5 msm:text-5xl`}

  span {
    ${() => tw`block md:inline`}
  }
`;
