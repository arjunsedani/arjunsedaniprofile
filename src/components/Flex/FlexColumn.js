/**
 * @file
 * @author Arjun Sedani <ArjunBhavesh.Sedani@in.bosch.com>
 * 09/18/2019
 */
import styled from 'styled-components';

const FlexColumn = styled.div`
  flex: ${props => props.flex};
  align-items: ${props => props.align};
  margin-right: ${props => props.gutter};
  text-align: ${props => props.textAlign};
  &:last-of-type {
    margin-right: 0;
  }
`;

FlexColumn.defaultProps = {
  flex: 1,
  gutter: '20px'
};

export default FlexColumn;
