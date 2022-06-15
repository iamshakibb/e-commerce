import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <Wrapper>
      <Grid>
        <div className="grid-item">
          <h2>CUSTOMER SERVICE</h2>
          <ul>
            {customer_service.map((cs) => (
              <li key={cs.id}>
                <Link href={cs.link}>
                  <a>{cs.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid-item">
          <h2>INFO</h2>
          <ul>
            {info.map((cs) => (
              <li key={cs.id}>
                <Link href={cs.link}>
                  <a>{cs.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid-item">
          <h2>FOLLOW US</h2>
          <ul>
            {social.map((s) => (
              <li key={s.id}>
                <Link href={s.link}>
                  <a>
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </Wrapper>
  );
}

export default Footer;

const social = [
  {
    id: 1,
    name: 'FACEBOOK',
    link: '/',
    icon: <AiFillFacebook />,
  },
  {
    id: 1,
    name: 'LINKEDIN',
    link: '/',
    icon: <AiFillLinkedin />,
  },
];

const info = [
  {
    name: 'GIFT VOUCHERS',
    link: '/gift-vouchers',
    id: 1,
  },
  {
    name: 'SIZE GUIDE',
    link: '/size-guide',
    id: 2,
  },
  {
    name: 'CAREERS AT E-COMMERCE',
    link: '/careers',
    id: 3,
  },
  {
    name: 'ABOUT US',
    link: '/about_us',
    id: 4,
  },
  {
    name: 'LEGAL POLICIES',
    link: '/legal-policies',
    id: 5,
  },
];

const customer_service = [
  {
    name: 'CONTACT',
    link: '/contact',
    id: 1,
  },
  {
    name: 'TRACK ORDER',
    link: '/track-order',
    id: 2,
  },
  {
    name: 'DELIVERY & RETURNS',
    link: '/delivery-and-returns',
    id: 3,
  },
  {
    name: 'PAYMENT',
    link: '/payment',
    id: 4,
  },
  {
    name: 'MAKE A RETURN',
    link: '/make-a-return',
    id: 5,
  },
  {
    name: 'FAQ',
    link: '/faq',
    id: 6,
  },
];

const Wrapper = styled.footer`
  ${() => tw`container py-12 mt-24`}
`;

const Grid = styled.div`
  ${() => tw`grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3`}

  & > .grid-item {
    & > h2 {
      ${() => tw`text-sm font-black mb-4`}
    }

    & > ul {
      & > li {
        ${() => tw`mb-2 font-semibold`}

        & > a {
          ${() => tw`flex items-center gap-4 text-sm`}
        }
      }
    }
  }
`;
