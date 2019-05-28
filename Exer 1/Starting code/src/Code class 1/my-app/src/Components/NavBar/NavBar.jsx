import React from "react";
import "./NavBar.css";

export class NavBar extends React.Component{

  
  
  constructor(){    
    super();
    this.state = {
      handleClick: this.props
    }
  }
  
  render(){
    const handleOnClick = e => {
      console.log("Holi ... " + e.target.textContent );
      const liList = document.querySelectorAll("li");
      liList.forEach(elem => {
        elem.classList.remove("active");
      });
      e.target.classList.add("active");
      // this.handleClick(e.target.textContent);
    }
    return (
      <nav>
        <ul>
          <li /*className={"active"}*/ onClick={handleOnClick}>Home</li>
          <li onClick={handleOnClick}>List</li>
          <li onClick={handleOnClick}>Form</li>
        </ul>
      </nav>
    );
  }
}

// export const NavBar = props => {
//   const { handleClick } = props;

//   const handleOnClick = e => {
//     const liList = document.querySelectorAll("li");
//     liList.forEach(elem => {
//       elem.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     handleClick(e.target.textContent);
//   };

//   return (
//     <nav>
//       <ul>
//         <li /*className={"active"}*/ onClick={handleOnClick}>
//           Home
//         </li>
//         <li onClick={handleOnClick}>List</li>
//         <li onClick={handleOnClick}>Form</li>
//       </ul>
//     </nav>
//   );
// };
