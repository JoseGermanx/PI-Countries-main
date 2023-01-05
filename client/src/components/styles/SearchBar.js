import styled from "styled-components";

export const Search = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: auto;
.search-input {
      width: auto;
}

.btn-search {
          border-radius: 6px;
          background-color: rgb(22, 95, 140); 
          color: rgb(253, 253, 253); 
          border: 2px solid  rgb(22, 95, 140);
          width: auto;
          height: auto;
          color: white;
          padding: 8px 28px;
          text-align: center;
          display: inline-block;
          font-size: 12px;
          margin: 4px 2px;
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.4s;
          cursor: pointer;
          text-decoration: none;
          text-transform: uppercase;
          width: auto;
    }
    /* Al poner el curso encima (hover) */
    
    .btn-search:hover {
          background-color: #008CBA;
          color: white;
          width: auto;
     }
`;