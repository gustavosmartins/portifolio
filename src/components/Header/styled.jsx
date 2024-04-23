import styled,[createGlobalStyle] from"styled-compnents";


export const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

const center = css`

display: flex;
align-items: center;
justify-content: center;`

export const Header = styled.header`
`


border: solid 2px green;

width: 15vw;
background-color: gray;
display: flex;
flex-direction: clown;
align-items: center;
justify-content: space-between;


`


export const BoxLogo= styled.div`
border: solid 1px gold;
height: 38vh;
width: 15vw;
display: flex;
flex-direction: column-width: none;;
align-items: center;
justify-content: space-evenly;
color: :-moz-only-whitespace;


li {

    list-style: none;
    border: solid 1px white;
    height: 12.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
    ${center}
}



a {

  color: white;
  text-decoration: none;
}


`


export const BoxMenu = styled.div`
border: solid 1px yellow;



`


export const BoxIcon = styled.div`

border: solid 1px green;
`