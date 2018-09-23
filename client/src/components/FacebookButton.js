import React from "react"
import styled from "styled-components"

const FacebookButton = (props) => {
  const { text } = props
  const Facebook = styled("a") `
        background-color: #4267b2;
        margin: 0.5em 0px 0px 0px;
        display: inline-block;
        width: 100%;
        height: 50px;
        color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
        transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
        :hover {
            cursor: pointer;
            background-color: #003d82;
            color: #fff;
        }
        :active {
            background-color: #3367d6;
            transition: background-color 0.2s;
        }
        .content-wrapper {
            height: 100%;
            width: 100%;
            border: 1px solid transparent;
        }
        img {
            width: 18px;
            height: 18px;
            vertical-align: top;
        }
        .logo-wrapper {
            padding: 15px;
            width: 48px;
            height: 100%;
            border-radius: 1px;
            display: inline-block;
        }
        .text-container {
            font-family: Roboto, arial, sans-serif;
            font-weight: 500;
            letter-spacing: 0.21px;
            font-size: 16px;
            line-height: 48px;
            vertical-align: top;
            border: none;
            display: inline-block;
            text-align: center;
            width: 83%;
        }
        @media(max-width: 375px) {
          .text-container {
            width: 75%;
          }
        }
    `
  return (
    <Facebook
      href="#">
      <div className="content-wrapper">
        <div className="logo-wrapper">
          <img alt="Facebook Icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png" />
        </div>
        <span className="text-container">
          <span>{text}</span>
        </span>
      </div>
    </Facebook>
  )
}

export default FacebookButton
