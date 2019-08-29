import React from "react";

import UserContext from "../contexts/UserContext";

const withSession = Component => {
    class CustomComponent extends React.Component {
        static contextType = UserContext;

        setName = (name) => {
            this.context.name = name
        }

        componentDidMount() {
            console.log('current theme: ${this.context}');
        }

        render() {
            /*
            return (
              <ThemeContext.Consumer>
                {({ theme }) => <Component theme={theme} />}
              </ThemeContext.Consumer>
            );
            */
            // OR
            return <Component session={this.context} setName={this.setName} />;
        }
    }

    return CustomComponent;
};

export default withSession;