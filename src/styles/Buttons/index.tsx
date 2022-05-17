import tw from 'twin.macro';
import styled from 'styled-components';

export const Button = styled.button<{ twoColor?: boolean }>`
  ${() =>
    tw`p-3.5 border-black border-2 text-[14px] mt-2 font-bold max-w-[200px] w-full`}

  ${({ twoColor }) => (twoColor ? tw`md:border-white` : tw`md:border-black`)}
`;
