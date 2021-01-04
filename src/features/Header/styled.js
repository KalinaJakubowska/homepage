import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 101px auto 63px;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 66px;
`;

export const Announcement = styled.p`
  text-transform: uppercase;
  font-size: 13px;
  line-height: 1.3;
  font-weight: bold;
  margin: 0;
`;

export const Name = styled.p`
  margin: 12px 0 0 0;
  font-weight: 900;
  font-size: 38px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.title};
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 35px 0 0 0;
`;

export const Photo = styled.div`
  background-color: ${({ theme }) => theme.colors.slateGray};
  width: 398px;
  height: 398px;
  border-radius: 50%;
  flex-shrink: 0;
`;
