import React, { useState } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { Button, Input } from "antd"
import UnicornLayout from '../layouts/UnicornLayout';
import greycorn from "../assets/img_loading_bg.png";
import WhonicornLogo1 from "../assets/img_loading1.png";
import WhonicornLogo2 from "../assets/img_loading2.png";

const UnicornText = styled.span`
  &.label {
    font-family: 'NanumSquare Bold';
    font-size: 15px;
    text-align: center;
    width: 300px;
    height: 44px;
    margin-top: 232px;
    margin-bottom: 20px;
  }
  &.guide {
    font-family: 'NanumSquare Regular';
    font-size: 12px;
    position: absolute;
    width: 300px;
    height: 36px;
    bottom: 57px;
  }
`

const GreyCorn = styled.img`
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
`

function UnicornHome(props: RouteChildrenProps) {
  const location = useLocation();
  const serviceName = new URLSearchParams(location.search).get("serviceName")
  const userAnswer = new URLSearchParams(location.search).get("userAnswer")

  setTimeout(() => {
    const { history } = props;
    history.push({
      pathname: '/result',
      search: "?" + new URLSearchParams({ serviceName: serviceName ?? "Whonicorn", userAnswer: userAnswer ?? "AAAAAAAAAAAA" }).toString()
    })
  }, 3000)

  return (
    <UnicornLayout>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
          <UnicornText className="label">결과를 분석중입니다.<br />과연 우리는 어떤 유니콘일까요?</UnicornText>
          <div><img src={WhonicornLogo1} alt="greycorn" width="197px" height="47px" /></div>
          <div><img src={WhonicornLogo2} alt="greycorn" width="197px" height="47px" /></div>
        </div>
        <div style={{ flex: 1, width: '100%', position: 'relative', zIndex: 0 }}>
          <GreyCorn src={greycorn} alt="greycorn" />
        </div>
      </div>
    </UnicornLayout>
  )
}

export default withRouter(UnicornHome)