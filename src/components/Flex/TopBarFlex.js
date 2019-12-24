// @flow
/**
 * @file
 * @author Arjun Sedani <ArjunBhavesh.Sedani@in.bosch.com>
 * 09/18/2019
 */
import styled, { css } from 'styled-components';

type Props = {
  align: string,
  direction: string,
  justify: string,
  fillParent: boolean,
  wrap: string,
  cursor: string,
  float: string,
  textAlign: string,
  position: string,
  top: string,
  left: string,
  right: string,
  visibility?: string
};

const align = (props: Props) => props.align;
const direction = (props: Props) => props.direction;
const justify = (props: Props) => props.justify;
const wrap = (props: Props) => props.wrap;
const display = (props: Props) => props.display || 'flex';
const float = (props: Props) => props.float || 'none';

const textAlign = (props: Props) => props.textAlign || 'initial';
const fillParent = (props: Props) =>
  props.fillParent &&
  css`
    position: absolute;
    width: 100%;
    height: 100%;
  `;

const TopBarFlex = styled.div`
  display: ${display};
  align-items: ${align};
  flex-direction: ${direction};
  justify-content: ${justify};
  flex-wrap: ${wrap};
  cursor: ${(props: Props) => props.cursor || 'inherit'};
  float: ${float};
  text-align: ${textAlign};
  width: 100%;
  position: ${props => props.position || 'initial'};
  top: ${props => props.top || 'initial'};
  left: ${props => props.left || 'initial'};
  right: ${props => props.right || 'initial'};
  visibility: ${props => props.visibility || 'inherit'};
`;
// background: #3da98b;

export default TopBarFlex;
