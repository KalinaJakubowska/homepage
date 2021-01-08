import React from "react";
import { BigTileWrapper, Title, List, ListItem, Icon, Point } from "./styled";

const BigTile = ({ title, icon, list, underline }) => {
  return (
    <BigTileWrapper>
      <Title underline={underline}>
        {title}
        <Icon src={icon}></Icon>
      </Title>
      <List>
        {list.map((item) => (
          <ListItem key={item}>
            <Point />
            {item}
          </ListItem>
        ))}
      </List>
    </BigTileWrapper>
  );
};

export default BigTile;
