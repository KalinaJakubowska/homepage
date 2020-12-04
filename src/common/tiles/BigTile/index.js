import React from "react";
import { BigTileWrapper, Title, List, ListItem } from "./styled";

const BigTile = ({ title, icon, list }) => {
  return (
    <BigTileWrapper>
      <Title>
        {title}
        {icon}
      </Title>
      <List>
        {list.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </BigTileWrapper>
  );
};

export default BigTile;
