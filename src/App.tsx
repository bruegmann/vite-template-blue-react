import { Layout, Header, HeaderTitle, MenuItem, SidebarMenu } from "blue-react"
import { House, HouseFill } from "react-bootstrap-icons"

import HomePage from "./pages/HomePage"

import "./styles/main.scss"

const appLogo = "/vite.svg"
const appTitle = "My App Title"

export default function App() {
    return (
        <Layout
            header={
                <Header>
                    <HeaderTitle logo={appLogo} appTitle={appTitle} />
                </Header>
            }
            side={
                <SidebarMenu>
                    <MenuItem
                        href="#"
                        icon={<House />}
                        iconForActive={<HouseFill />}
                        label="Home"
                        isHome
                    />
                </SidebarMenu>
            }
        >
            <HomePage />
        </Layout>
    )
}
