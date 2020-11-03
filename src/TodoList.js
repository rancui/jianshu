import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="Basic usage"
            style={{ width: 300 }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleAddItem}>
            Primary Button
          </Button>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleRemoveItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
            style={{ width: 300 }}
          />
        </div>
      </div>
    );
  }
  handleInputChange(e) {
    console.log(e.target.value);
    const action = {
      type: "input_change",
      value: e.target.value,
    };
    store.dispatch(action);
  }
  handleAddItem(e) {
    const action = {
      type: "add_item",
      value: e.target.value,
    };
    if (e.target.value === "") {
      return;
    }
    store.dispatch(action);
  }
  handleRemoveItem(index) {
    const action = {
      type: "remove_item",
      index,
    };
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState);
  }
}

export default TodoList;
