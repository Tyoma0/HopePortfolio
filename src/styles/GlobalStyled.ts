import { createGlobalStyle } from "styled-components";
import { theme } from "./Treme";

export const GlobalStyle = createGlobalStyle`
*,*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}




body {
  margin: 0;
  font-family:"Epilogue",  'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
    text-decoration:none;
}


ul{
    list-style-type: none;
}

button{
    background-color:unset;
    border:none
}


/* section:nth-of-type(o){
  background-color:${theme.color.secondaryBg};
  color:${theme.color.accent};
}


section:nth-of-type(even){
  background-color:${theme.color.primaryBg};
  color:${theme.color.font};
} */

`

