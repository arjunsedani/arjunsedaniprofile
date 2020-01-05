/**
 * @file
 * @author Arjun Sedani <ArjunBhavesh.Sedani@in.bosch.com>
 * 09/18/2019
 */
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../style/styleSettings';
import Spacing from '../Spacing';

type Props = {
  emphasize: boolean,
  label: string,
  border: string
};

const padding = (props: Props) => props.padding || '30px';
const border = (props: Props) =>
  props.border || `1px solid ${colors.LIGHT_GREY}`;
const position = (props: Props) => props.position || 'relative';
const width = (props: Props) => props.width || '100%';
const backgroundColor = (props: Props) => props.backgroundColor || '#fff';

const emphasizeCard = (props: Props) =>
  props.emphasize &&
  css`
    /* this transform breaks drag and drop in the IconCard */
    /* transform: translateY(-10px); */
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);
    width: 102%;
    margin-left: -1%;
    z-index: 2;
  `;

const emphasizeLabel = (props: Props) =>
  props.emphasize &&
  css`
    /* this transform breaks drag and drop in the IconCard */
    /* transform: translateY(-10px); */
    margin-left: -1%;
    z-index: 2;
  `;

const CardLabel = styled.h3`
  position: relative;
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 500;
  transition: all 0.2s ease-out;

  ${emphasizeLabel};
`;

const CardElement = styled.div`
  position: ${position};
  display: block;
  background-color: ${backgroundColor};
  border: ${border};
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.03);
  padding: ${padding};
  width: ${width};
  border-radius: 5px;
  transition: all 0.2s ease-out;

  ${emphasizeCard};
`;

function Card(props: Props) {
  return (
    <Fragment>
      {props.label && (
        <CardLabel emphasize={props.emphasize}>{props.label}</CardLabel>
      )}
      <CardElement {...props} />
      <Spacing height="10px" />
    </Fragment>
  );
}

export default Card;
