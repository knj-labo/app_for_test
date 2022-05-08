import React, { useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';

import type { UseBoardResult } from './useBoard';
import { Square } from './square';
import { Button } from './Button';

export type Marker = 'O' | 'X' | '';

const Squares = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 315px;
  height: 300px;
  margin: 0 auto;
`;

const Box = styled.div`
  margin-top: 64px;
  text-align: center;
`;

export const Board = ({
  boards, handlePlayClick, handleResetClick, renderGameStatus,
}: UseBoardResult) => (
  <div>
    {renderGameStatus()}
    <Squares>
      {boards.map((marker, index) => (
        <Square key={index} index={index} marker={marker} onClick={handlePlayClick} />
      ))}
    </Squares>
    <Box>
      <Button onClick={handleResetClick} />
    </Box>
  </div>
);
