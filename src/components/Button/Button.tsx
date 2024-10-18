import { css } from "@emotion/css";
import React from "react";

export default function Button(props: {
  text?: string;
  style?: string;
  type?: string;
  icon: React.ReactElement;
}) {
  const { icon, text, style, type } = props;

  return (
    <button
      className={css`
            border: none;
            display: flex;
            padding: 5px;
            border-radius: 2px;
            color: var(--primary);
            background-color: var(--opaque);
            cursor: pointer;
            &:hover {
                color: var(--primary-focus);
            }
            width: 20px
            height: 20px;
        `}
    >
      {icon}
    </button>
  );
}
