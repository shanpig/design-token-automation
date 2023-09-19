import styled from 'styled-components';

export const StyledTitle = styled.div`
  font: ${({ theme }) => theme.typography.H1.Bold};
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledSubTitle = styled.div`
  width: 400px;
  height: 50px;
  text-align: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.blue[300]};
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;
