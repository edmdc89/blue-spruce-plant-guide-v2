/** @jsx jsx */
import styled from '@emotion/styled';
import { secondaryGradient } from '../../ui/common/gradients';
import { softShadow } from '../../ui/common/mixins';

const Submit = styled.button`
  height: 3.3rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.textLight};
  width: 55%;
  ${secondaryGradient}
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 1rem;
  ${softShadow};
`;

export default Submit;
