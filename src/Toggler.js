import React from "react";
const TogglerContext = React.createContext();

const renderChildren = (children, props) => context =>
  React.Children.toArray(children).map(el =>
    React.cloneElement(el, props(context, el))
  );

export class Toggler extends React.Component {
  state = { isVisible: false };

  setVisible = () =>
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));

  static Trigger = ({ children }) => (
    <TogglerContext.Consumer>
      {renderChildren(children, context => ({
        onClick: context.setVisible
      }))}
    </TogglerContext.Consumer>
  );

  static Content = ({ children }) => (
    <TogglerContext.Consumer>
      {renderChildren(children, (context, el) => ({
        visible: context.isVisible,
        onCancel: context.setVisible,
        onOk: () => {
          context.setVisible();
          el.props.onOk();
        }
      }))}
    </TogglerContext.Consumer>
  );

  render() {
    return (
      <TogglerContext.Provider
        value={{
          isVisible: this.state.isVisible,
          setVisible: this.setVisible
        }}
      >
        {this.props.children}
      </TogglerContext.Provider>
    );
  }
}
