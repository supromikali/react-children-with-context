# React Children With Context

This repo is a simplified demo of how to use React.Children together with React.Context to achieve flexible component composition.

Using React.Context allows any component order and nesting, still providing a direct access to React.Children from the parent component (Toggler wrapper), here is a sample markup:

```
  <Toggler>
    <div>
      <Toggler.Trigger>
        <Button>show modal</Button>
      </Toggler.Trigger>
    </div>
    <div>
      <Toggler.Content>
        <Modal>
          <p>Some contents...</p>
        </Modal>
      </Toggler.Content>
    </div>
  </Toggler>
```
