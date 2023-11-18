/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { Carousel } from "antd";
import { Collapse } from "antd";
import { Col, Row } from "antd";
import { Card } from "antd";
const { Meta } = Card;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Apa itu daur ulang?",
    children: <p>Daur ulang adalah proses mengumpulkan, memproses, dan mengubah material bekas menjadi produk baru untuk mengurangi dampak lingkungan. Praktik ini bertujuan untuk mengurangi limbah dan melestarikan sumber daya alam.</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#808080",
};

export default function AboutPage() {
  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto mt-10 pt-20">
        <p className="font-extrabold text-6xl text-center text-primary">About Us</p>
        <p className="font-normal text-center mt-5 text-textColor text-xl">
          At Smart Recycling, we are passionate about promoting a sustainable future and making recycling an effortless part of your daily routine. Our mission is simple yet impactful: to inspire, educate, and empower individuals and
          businesses to embrace recycling practices that benefit both our environment and our communities.
        </p>
      </div>

      <Row justify={"center"} className="container mx-auto my-5 gap-5">
        <Col span={10}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img src="/illustration.png" alt="" style={contentStyle} />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
        <Col span={10}>
          <Collapse accordion items={items} className="font-normal text-textColor text-lg" />
        </Col>
      </Row>

      <div className="container mx-auto flex justify-center mt-10">
        <p className="font-semibold text-4xl text-center text-primary">Our Website Team</p>
      </div>

      <Row justify={"center"} className="container mx-auto mt-5 mb-5">
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
      </Row>

      <div className="container mx-auto flex justify-center mt-10">
        <p className="font-semibold text-4xl text-center text-primary">Our Mobile Team</p>
      </div>

      <Row justify={"center"} className="container mx-auto mt-5 mb-5">
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
      </Row>

      <FooterComponent />
    </>
  );
}