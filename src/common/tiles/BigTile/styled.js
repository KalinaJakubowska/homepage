import styled from "styled-components";
import { TileWrapper } from "../tileStyles";

export const BigTileWrapper = styled(TileWrapper)`
  padding: 32px;
  margin: 72px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    margin: 48px 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    padding: 16px;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 30px;
  line-height: 1.2;
  margin: 0px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.elementColor.bigTileTitleUnderline};
  color: ${({ theme }) => theme.elementColor.title};

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: space-between;
  margin: 32px 0 0;
  grid-gap: 8px;
  padding-left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    grid-template-columns: 1fr;
    margin: 16px 0 0;
  }
`;

export const ListItem = styled.li`
  line-height: 1.4;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const Point = styled.span`
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.elementColor.button};
  margin-right: 16px;
`;

export const Icon = styled.img`
  height: 24px;
  width: auto;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    height: 20px;
  }
`;
