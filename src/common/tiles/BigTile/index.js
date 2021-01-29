import React from "react";
import { BigTileWrapper, Title, List, ListItem, Icon, Point } from "./styled";

const BigTile = ({ title, icon, list }) => {
  return (
    <BigTileWrapper as="section">
      <Title>
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
