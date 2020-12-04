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
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 313px);
  justify-content: space-between;
  margin: 32px 0 0 0;
  grid-gap: 8px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.4;
  color: #6e7e91;
  &::marker {
      color: blue;
  }
`;
