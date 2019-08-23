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
        <Modal onOk={() => console.log('Do anything')}>
          <p>Some contents...</p>
        </Modal>
      </Toggler.Content>
    </div>
  </Toggler>
```
Basic functionality of such approach is as follows:
* Toggler.Trigger can modify state of the Toggler.Content, e.g. toggle visibility
* All functionality of the Modal like "onOk" click handling is supported alongside with visibility toggling, e.g. if user clicks on "OK" button inside of the Modal component, it will also hide the Modal while visibility is controlled by parent wrapper (Toggler component).

# This repo is used as an example in my article

Building React Components using children props and Context API https://blog.soshace.com/en/javascript/building-react-components-using-children-props-and-context-api/
