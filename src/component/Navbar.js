import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const goToLogin = ()=>{
    navigate("/login")
  }
  const search=(event)=>{
    console.log("key press")
    if(event.key==="Enter"){
      console.log("click key", event.key)
      let keyword = event.target.value
      // console.log(keyword)
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        로그인
      </div>

      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s" />
      </div>

      <div>
        <ul className="navUl">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        
        <li className="search">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="search" onKeyPress={(event)=>search(event)}/>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
