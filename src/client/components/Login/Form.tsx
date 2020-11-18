import styled from '@emotion/styled';

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.offWhite},
    ${(props) => props.theme.colors.offWhiteAccent}
  );
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1rem 0;
`;

export default Form;
