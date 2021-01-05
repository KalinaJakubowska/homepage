import styled from "styled-components";
import { TileWrapper } from "../tileStyles";

export const BigTileWrapper = styled(TileWrapper)`
  padding: 32px;
  margin: 72px auto;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 1.2;
  margin: 0px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
  color: ${({ theme }) => theme.color.title};
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  margin: 32px 0 0 0;
  grid-gap: 8px;
`;

export const ListItem = styled.li`
  line-height: 1.4;
  display: flex;
  align-items: center;
`;

export const Point = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.button};
  margin-right: 16px;
`;

export const Icon = styled.img`
  height: 24px;
  width: auto;
  margin-left: 16px;
`;
