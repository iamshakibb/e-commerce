import tw from 'twin.macro';
import styled, { css } from 'styled-components';

export const Button = styled.button<{
  twoColor?: boolean;
  blackBorder?: boolean;
  borderColor?: string;
}>`
  ${() =>
    tw`p-3.5 border-black border-2 text-[14px] mt-2 font-bold max-w-[200px] w-full`}

  /* ${({ twoColor }) =>
    twoColor ? tw`lg:border-white` : tw`lg:border-black`} */

  ${({ blackBorder }) =>
    blackBorder ? tw`lg:border-black` : tw`lg:border-white`}

    ${({ borderColor }) =>
    borderColor &&
    css`
      border-color: ${borderColor};
    `}
`;
