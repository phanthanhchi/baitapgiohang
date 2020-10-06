import React, { Component } from "react";

export default class CarItem extends Component {
  state = {
    soLuongSP: this.props.card.soLuong
  };
  xuLyNutGiamCard = () => {
    
    // const soLuongHienTai=this.props.card.soLuong;
    // this.props.xuLyNutGiamModal(soLuongHienTai);
    let giam = this.state.soLuongSP;
    giam--;
    alert(giam)
    this.setState({
      soLuongSP: giam,
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
          <button onClick={this.xuLyNutGiamCard}>-</button> {this.state.soLuongSP}
          <button>+</button>
        </td>
        <td>{this.props.card.giaBan}</td>
        <td>{this.props.card.giaBan * this.state.soLuongSP}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
