import React from "react";
import { BigTileWrapper, Title, List, ListItem, Icon } from "./styled";

const BigTile = ({ title, icon, list }) => {
  return (
    <BigTileWrapper>
      <Title>
        {title}
        <Icon src={icon}></Icon>
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
