import { Outlet } from "react-router-dom";
import { AdminHeader } from "../Admin/AdminHeader";
import { ContentContainer } from "../Admin/ContentContainer";
import { SideBar } from "../Admin/SideBar";
import { styled } from "@mui/material";

export const AdminLayout = () => {
  return (
    <MainContainer>
      <SideBar />
      <ContentContainer>
        <AdminHeader />
        <Outlet />
      </ContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled("div")`
  margin-left: 220px;
`;
