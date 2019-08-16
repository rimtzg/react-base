import { layout_config } from '../config.js'

import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline, Box } from "@material-ui/core";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";
import { Root, Header, Nav, Content, Footer } from "mui-layout";
import { presets } from 'mui-layout';

import AppHeader from './AppHeader';
import TabsHeader from './TabsHeader';
import AppNavigator from './AppNavigator';

import theme from '../theme.js';

class AppLayout extends React.Component {

    componentWillMount() {

    }

    render(){
        const { header, drawer, title, tabs, tab } = this.props;

        let config = {
            ...layout_config,
            navWidth : drawer != false ? 256 : 0,
        }

        return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Root config={config} >
                { header != false ?
                  <Header style={{ backgroundColor : theme.palette.primary.main }} renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded style={{ color : theme.palette.common.white }} />)} >
                    <AppHeader title={title} />
                  </Header>
                : null}
                { drawer != false ?
                <Nav renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft /> } >
                  <AppNavigator />
                </Nav>
                : null}
                <Content>
                  <Box style={{ marginTop : theme.spacing(7) }}>
                    { tabs ?
                      <TabsHeader tabs={tabs} tab={tab} />
                    : null}
                    <Container>
                        { this.props.children }
                    </Container>
                  </Box>
                </Content>
              </Root>
            </ThemeProvider>
        )
    }
}

export default AppLayout;