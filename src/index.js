import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button, Divider, Skeleton } from "antd";
import "antd/dist/antd.css";

import { Toggler } from "./Toggler";

function App() {
  return (
    <div style={{ padding: 24 }}>
      <Toggler>
        <Skeleton avatar paragraph={{ rows: 4 }} />
        <Divider />
        <div>
          <Toggler.Trigger>
            <Button type="primary">show modal</Button>
          </Toggler.Trigger>
        </div>
        <Divider />
        <Skeleton avatar paragraph={{ rows: 4 }} />
        <div>
          <Toggler.Content>
            <Modal onOk={() => console.log("OK")}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Toggler.Content>
        </div>
      </Toggler>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
