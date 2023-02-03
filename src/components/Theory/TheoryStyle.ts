import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: '#131A22';
  border: 1px solid #131a22;
  width: 220px;
  height: 220px;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
`;

export const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UlPoints = styled.ul`
  padding: 1px;
`;

export const LiPoints = styled.li`
  margin: 6px;
`;
