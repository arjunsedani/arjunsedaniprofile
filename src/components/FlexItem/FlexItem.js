// @flow
/**
 * @file
 * @author Arjun Sedani <ArjunBhavesh.Sedani@in.bosch.com>
 * 09/18/2019
 */
import styled from 'styled-components';

const position = props => props.position || 'initial';
const textAlign = props => props.textAlign || 'inherit';
const colspan = props => props.colspan || 1;

const FlexItem = styled.div`
  flex: ${props => props.flex};
  position: ${position};
  text-align: ${textAlign};
  flex-grow: ${colspan};
`;
FlexItem.defaultProps = {
  flex: 1
};

export default FlexItem;
