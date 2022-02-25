import styled from "styled-components";
import Modal from "styled-modal";

export const StyledModal = styled(Modal)`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.secondary ? props.theme.primaryColor : props.theme.secondaryColor};
`;

export const RecentWrap = styled.div`
  margin: 20px 20px;
  display: block;
  align-items: center;
  padding: 10px 50px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 1px 6px 1px rgb(69 65 78 / 20%);
  :after,
  :before {
    box-sizing: border-box;
  }
  @media screen and (max-width: 1100px) {
    max-width: auto;
    width: auto;
    margin: 10px;
  }
  @media screen and (max-width: 768px) {
    max-width: auto;
    width: auto;
    margin: 20px;
    padding: 15px;
    padding-bottom: 30px;
  }
`;

export const Header = styled.h3`
  display: block;
  margin: 10px auto;
  font-size: 30px;
  background: transparent;
`;

export const ModalTitle = styled.h2`
  display: flex;
  padding: 0;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
`;

export const TextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  line-height: 1.4;
  margin-bottom: 8px;
  width: 400px;
  height: 300px;
`;

export const HR = styled.hr`
  color: #dcdcdc;
  opacity: 0.4;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TableHead = styled.thead`
 // custom css goes here
`;

export const TableBody = styled.tbody`
 // custom css goes here
`;

export const TableHRow = styled.tr`
  text-align: left;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const TableHData = styled.th`
  border-top: 1px solid #ddd;
  padding: 8px;
  background: black;
  color: #ffffff;
`;

export const TableBRow = styled.tr`
  ::nth-child(even) {
    background: #f2f2d2;
  }
  :hover {
    background: #ddd;
  }
`;

export const TableBData = styled.td`
  border-top: 1px solid #ddd;
  padding: 8px;
`;

export const MidTable = styled.div`
  display: none;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  @media screen and (max-width: 1000px) {
    display: grid;
    align-items: center;
    grid-gap: 16px;
    padding: 20px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    align-items: center;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const MidTableRow = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

export const MidTableDataLeft = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MidTableDataRight = styled.td`
  flex-grow: 1;
  text-align: right;
  z-index: 1;
  text-transform: capitalize;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 2rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: ${(props) =>
    props.secondary ? props.theme.primaryColor : props.theme.secondaryColor};
`;

export const SaveNote = styled.button`
  color: #fff;
  background: ${(props) =>
    props.secondary ? props.theme.primaryColor : props.theme.secondaryColor};
  width: 20%;
  height: 2rem;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  color: #000;
  background: ${(props) =>
    props.primaryColor ? props.theme.secondary : props.theme.thirdColor};
  width: 20%;
  height: 2rem;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  color: #000;
  background: ${(props) =>
    props.primaryColor ? props.theme.secondary : props.theme.fourthColor};
  width: 20%;
  height: 2rem;
  border: none;
  border-radius: 4px;
  margin-left: 5px;
  cursor: pointer;
`;

//not used yet

/** 
  MidTable,
  MidTableRow,
  MidTableDataLeft,
  MidTableDataRight,*/
