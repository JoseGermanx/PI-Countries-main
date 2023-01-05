import styled from "styled-components";

export const CreateActivity = styled.form`
    
    width:50%;
	padding:16px;
	border-radius:10px;
	margin:auto;
	background-color:rgb(164, 162, 199);
  
  *{box-sizing:border-box;}
    
  form label{
	width:100px;
	font-weight:bold;
	display:inline-block;
	font-size: 1em;
}

form select,
form input {
	height: 100%;
	width:180px;
	padding:3px 10px;
	border:1px solid #f6f6f6;
	border-radius:3px;
	background-color:#f6f6f6;
	margin:8px 0;
	display:inline-block;
	font-family: roboto,sans-serif;
	color: grey;
}

form button{
	width:100%;
	padding:8px 16px;
	margin-top:32px;
	border:1px solid #000;
	border-radius:5px;
	display:block;
	color:#fff;
	background-color:#000;
  	cursor:pointer;
} 
`;
export const Container = styled.div`


`