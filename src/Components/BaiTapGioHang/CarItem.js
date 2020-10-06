import React, { Component } from "react";

export default class CarItem extends Component {
  state = {
    soLuongSP: 0,
  };
  xuLyNutGiamCard = () => {
    this.props.card.soLuong--;
    if (this.props.card.soLuong === 0) {
      this.props.card.soLuong = 1;
    }
    this.setState({
      soLuongSP: this.props.card.soLuong,
    });
  };
  xuLyNutTangCard = () => {
    this.props.card.soLuong++;
       this.setState({
      soLuongSP: this.props.card.soLuong,
    });
  };
  
  render() {
    //console.log(this.props);

    return (
      <tr className="card-item">
        <td>{this.props.card.maSP}</td>
        <td>{this.props.card.tenSP}</td>
        <td>
          <img src={this.props.card.hinhAnh} width={50} alt />
        </td>
        <td>
          <button onClick={this.xuLyNutGiamCard}>-</button>
          {this.props.card.soLuong}
          <button onClick={this.xuLyNutTangCard}>+</button>
        </td>
        <td>{this.props.card.giaBan}</td>
        <td>{this.props.card.giaBan * this.props.card.soLuong}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
