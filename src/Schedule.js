import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
 
class Schedule extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>Welcome!</Card.Title>
        <Card.Text>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</Card.Text>
 
        <Card.Text>Duis a turpis sed lacus dapibus elementum sed eu lectus.</Card.Text>

        <Card.Subtitle>09:00-10:00</Card.Subtitle>
        <Card.Text>first talk</Card.Text>

        <Card.Subtitle>09:00-10:00</Card.Subtitle>
        <Card.Text>second talk</Card.Text>

        <Card.Subtitle>09:00-10:00</Card.Subtitle>
        <Card.Text>third talk</Card.Text>

        <Card.Subtitle>09:00-10:00</Card.Subtitle>
        <Card.Text>fourth talk</Card.Text>
      </Card.Body>
    );
  }
}
 
export default Schedule;