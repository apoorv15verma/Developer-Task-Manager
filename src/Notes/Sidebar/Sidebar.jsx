// import React, { useState } from "react";
// import { FaCirclePlus } from "react-icons/fa6";
// import "./Sidebar.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Sidebar(props) {
//   const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
//   const [listOpen, setListOpen] = useState(false);

//   return (
//     <div class="shadow p-3  mt-5 mb-5 bg-body-tertiary rounded">

//     <div className="sidebar">
//       <button type="button" class="btn btn-success shadow-lg p-3 mb-5" onClick={() => setListOpen(!listOpen)}>
//       <FaCirclePlus alt="Add" className="m-2"  />
//       Add Notes
//       </button>
        
     
//       <div className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
//         {colors.map((item, index) => (
//           <li
//             key={index}
//             className="sidebar_list_item"
//             style={{ backgroundColor: item }}
//             onClick={() => props.addNote(item)}
//           />
//         ))}
//       </div>
     
//     </div>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import "./Sidebar.css";

// function Sidebar(props) {
//   const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
//   const [listOpen, setListOpen] = useState(false);

//   return (
//     <div className="sidebar-container">
//       <div className="sidebar">
//         <button
//           type="button"
//           className="sidebar-button"
//           onClick={() => setListOpen(!listOpen)}
//         >
//           <FaCirclePlus alt="Add" className="plus-icon" />
//           Add Notes
//         </button>

//         <div className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
//           {colors.map((item, index) => (
//             <li
//               key={index}
//               className="sidebar-list-item"
//               style={{ backgroundColor: item }}
//               onClick={() => props.addNote(item)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;


function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </div>
      <div className="plusbtn">
        <FaCirclePlus alt="Add" onClick={() => setListOpen(!listOpen)} />
      </div>
    </div>
  );
}

export default Sidebar;