import styled from "@emotion/styled";
import { ReactComponent as AdminLogo } from "../../assets/admin-logo.svg";
import { ReactComponent as FemaleIcon } from "../../assets/female-icon.svg";
import { ReactComponent as MaleIcon } from "../../assets/male-icon.svg";
import { ReactComponent as ChildrenIcon } from "../../assets/children-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { isActive } from "../../helpers/global";

export const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Wrapper>
        <AdminLogo />
      </Wrapper>
      <List>
        <StyledLink to={"male"}>
          <Menu active={isActive("male", pathname)}>
            <MaleIcon />
            <MenuTitle>Мужская</MenuTitle>
          </Menu>
        </StyledLink>
        <StyledLink to={"children"}>
          <Menu active={isActive("children", pathname)}>
            <ChildrenIcon />
            <MenuTitle>Детская</MenuTitle>
          </Menu>
        </StyledLink>
        <StyledLink to={"female"}>
          <Menu active={isActive("female", pathname)}>
            <FemaleIcon />
            <MenuTitle>Женская</MenuTitle>
          </Menu>
        </StyledLink>
      </List>
    </Container>
  );
};

const Container = styled("aside")`
  position: fixed;
  left: 0;
  top: 0;
  width: 218px;
  height: 100vh;
  background-color: #fff;
`;

const Wrapper = styled("div")`
  padding: 40px 20px 0 20px;
`;

const List = styled("ul")`
  margin-top: 62px;
`;

const Menu = styled("li")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px 28px 12px 18px;
  background-color: ${(props) => (props.active ? "#e2f7e7" : "none")};
  & > span {
    color: ${(props) => (props.active ? "#5A8E65" : "#7E8494")};
  }
  & > svg {
    path {
      fill: ${(props) => (props.active ? "#5A8E65" : "#7E8494")};
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MenuTitle = styled("span")`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
