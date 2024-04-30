import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Nav, Avatar, Dropdown, Select, Button } from "@douyinfe/semi-ui";
import About from "../about/about";
import { useNavigate } from 'react-router-dom';
import MainPassword from "../mainPassword/mainPassword";
import Setting from "../setting/setting";
import Subhome from "../subhome/subhone";
import { IconSemiLogo } from '@douyinfe/semi-icons';
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();
import { IconChangelog, IconCard, IconConfig, IconTreeSelect, IconForm, IconBreadcrumb, IconBanner, IconBadge, IconNotification, IconSteps, IconTree, IconTabs, IconNavigation } from '@douyinfe/semi-icons-lab';


export default function Main() {
  return (
    <div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Subhome />} />
          <Route path="subhome" element={<Subhome />} />
          <Route path="mainpassword" element={<MainPassword />} />
          <Route path="setting" element={<Setting />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function Layout() {
  const navigate = useNavigate();
  function handleOnClick() {
    //LoginNotification();
    return navigate('/', { replace: true }), [navigate];
  }
  const username = '占位符'
  return (
    <div className={{ width: '100%' }}>
      <Nav
        mode={'horizontal'}
        header={{
          logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />,
          text: 'Alextec密码管理器'+ appVersion
        }}
        renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
          const routerMap = {
            Home: "/main/subhome",
            About: "/main/about",
            Mainpassword: "/main/mainpassword",
            Setting: "/main/setting",
            "Nothing Here": "/nothing-here"
          };
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={routerMap[props.itemKey]}
            >
              {itemElement}
            </Link>
          );
        }}
        items={[
          { itemKey: "Home", text: "主页", icon: <IconChangelog /> },
          { itemKey: "Mainpassword", text: "密码管理", icon: <IconBadge /> },
          { itemKey: "About", text: "关于", icon: <IconCard /> },
          { itemKey: "Setting", text: "设置", icon: <IconConfig /> },
        ]}
        footer={
          <Dropdown
            position="bottomRight"
            render={
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleOnClick()}>退出登录</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <Avatar size="small" color='light-blue' style={{ margin: 4 }}>B</Avatar>
            <span>{username}</span>
          </Dropdown>
        }
      ></Nav>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />

    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


