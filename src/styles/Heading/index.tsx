import styled from 'styled-components';
import tw from 'twin.macro';

export const Heading = styled.h1`
  ${() => tw`mb-5 text-3xl font-bold msm:text-3xl`}

  span {
    ${() => tw`block md:inline`}
  }
`;
