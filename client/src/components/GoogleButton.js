import React from 'react'
import styled from 'styled-components'

const GoogleButton = (props) => {
  const { text } = props
  const Google = styled('a') `
    background-color: #4285f4;
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
        background-color: #0059c1;
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
        background-color: #ffffff;
        padding: 15px;
        margin-left: 0.05%;
        width: 48px;
        height: 48px;
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
    <Google
      className="google sign-in-button margin-vertical-sm"
      href="/auth/google">
      <div className="content-wrapper">
        <div className="logo-wrapper">
          <img alt="Google Icon" src="https://developers.google.com/identity/images/g-logo.png" />
        </div>
        <span className="text-container">
          <span>{text}</span>
        </span>
      </div>
    </Google>
  )
}

export default GoogleButton
