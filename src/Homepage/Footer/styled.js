import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin: 140px 0 0;
  max-width: 60%;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    margin-top: 76px;
    max-width: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin-top: 56px;
  }
`;

export const Message = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.3;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Email = styled.a`
  display: block;
  text-decoration: none;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 900;
  color: ${({ theme }) => theme.elementColor.title};
  margin-top: 24px;
  transition: color 0.3s;

  :hover {
    color: ${({ theme }) => theme.elementColor.button};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigScreen}px) {
    font-size: 28px;
    line-height: 1.2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    font-size: 24px;
    line-height: 1.2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 18px;
    line-height: 1.2;
    margin: 12px 0 0;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.elementColor.title};
  margin: 24px 0 0;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
    margin: 12px 0 0;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 56px 0 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    margin: 40px 0 32px;
  }
`;

export const styleLogo = (Logo) => styled(Logo)`
  fill: ${({ theme }) => theme.elementColor.title};
  width: 48px;
  height: 48px;
  margin-right: 24px;
  transition: fill 0.3s;

  :hover {
    fill: ${({ theme }) => theme.elementColor.button};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;
