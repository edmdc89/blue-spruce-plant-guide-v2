/** @jsx jsx */
import styled from '@emotion/styled';
import { softShadow } from '../../ui/common/mixins';

const Submit = styled.button`
  height: 3.3rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.textLight};
  width: 55%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 1rem;
  ${softShadow};
`;

export default Submit;
