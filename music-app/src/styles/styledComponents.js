import styled from '@emotion/styled';
import { space, layout, color, fontSize, fontFamily } from 'styled-system';


export const SongListContainer = styled.ul`
  ${space}
  ${layout}
  ${color}
  list-style-type: none; 
  padding: 10;
  background-color: #00FFFF;
  align-items: center; 
  margin15px;
  font-family:'sans-serif' ;
`;

export const SongListItem = styled.li`
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  ${fontFamily}
  margin: 10px;
  dsplay: flex;
  background-color: #00ffff;
`;

export const EditButton = styled.button`
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  ${fontFamily}
  background-color: #007bff; // Blue background
  color: white; // White text
  border: none;
  border-radius: 4px; 
  padding: 5px 10px;
  font-size:20px ;
  font-family:'sans-serif' ;
  cursor: pointer;
  margin: 20px; 
  &:hover {
    background-color: #0056b3; 
  }
`;



export const AppContainer = styled.div`
  ${space}
  ${layout}
  ${color}
  test-align:center;
 
`;

export const Title = styled.div`
  ${color}
  ${fontSize}
  ${fontFamily}
  font-size: 40px;
  color:#007bff;
  font-family:'sans-serif' ;
  text-align: center;
 `;




 