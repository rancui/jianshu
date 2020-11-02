import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["hello", "world"],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    // this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <input
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddItem}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                content={item}
                key={item}
                index={index}
                deleteItem={(index) => this.handleRemoveItem(this, index)}
              ></TodoItem>
            );
          })}
        </ul>
      </div>
    );
  }
  handleInputChange(e) {
    //传统方法
    // this.setState({
    //   inputValue: e.target.value,
    // });
    // 新方法
    const value = e.target.value; // 必须先把e.target.value保存一下，否则会报错，因为this.setState(）是异步的；
    this.setState(() => ({
      inputValue: value,
    }));
  }
  handleAddItem() {
    //传统方法
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    // });
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: "",
    }));
  }
  handleRemoveItem(index) {
    // const newList = [...this.state.list];
    // newList.splice(index, 1);
    // this.setState({
    //   list: newList,
    // });
    //新方法
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
