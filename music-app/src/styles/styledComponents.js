import styled from '@emotion/styled';
import { space, layout, color, fontSize, fontFamily } from 'styled-system';


export const SongListContainer = styled.ul`
  ${space}
  ${layout}
  ${color}
  list-style-type: none; // This hides the dots
  padding: 10;
  background-color: #00FFFF; 
  margin-left:15px
  font-size:50px ;
  font-family:'sans-serif' ;
  justify-content:center;
`;

export const SongListItem = styled.li`
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  ${fontFamily}
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
  border-radius: 4px; // Rounded corners
  padding: 5px 10px;
  font-size:20px ;
  font-family:'sans-serif' ;
  cursor: pointer;
  margin: 20px; // Add space between the song and the button
  &:hover {
    background-color: #0056b3; // Darker blue when hovered
  }
`;



export const AppContainer = styled.div`
  ${space}
  ${layout}
  ${color}
  // test-align:center;
 
`;

export const Title = styled.div`
  ${color}
  ${fontSize}
  ${fontFamily}
  test-align:center;
  margin:20px;
  font-size: 40px;
  color:#007bff;
  justify-content:center;
 `;




 