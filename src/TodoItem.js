import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li onClick={this.handleDeleteItem.bind(this)}>{this.props.content}</li>
    );
  }
  handleDeleteItem() {
    // 方法一
    // this.props.deleteItem(this.props.index);
    // 方法二
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
};

export default TodoItem;
