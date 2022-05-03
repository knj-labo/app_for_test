import React from 'react';
import styled from '@emotion/styled';

import { Marker } from './Board';

type Props = {
    marker: Marker;
    index: number
    onClick: (index: number) => void
};

const Button = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid #555;
  font-size: 32px;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d3cce3;
  }
  &:nth-of-type(-n + 3) {
    border-top: unset;
  }
  &:nth-last-of-type(-n + 3) {
    border-bottom: unset;
  }
  &:nth-of-type(3n) {
    border-right: unset;
  }
  &:nth-of-type(3n + 1) {
    border-left: unset;
  }
`;

export const Square = ({ marker, index, onClick }: Props): JSX.Element => (
  <Button role="button" tabIndex={0} key={index} onClick={() => onClick(index)}>
    {marker}
  </Button>
);
