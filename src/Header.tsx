import styles from './assets/css/section/header.module.css';
import { useState } from "react";

function Header() {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

  return (
    <>
    {/* skip */}
    <div id="skip">
    <a href="#header">헤더 영역 바로가기</a>
    <a href="#intro">소개 영역 바로가기</a>
    <a href="#skill">스킬 영역 바로가기</a>
    <a href="#site">사이트 영역 바로가기</a>
    <a href="#port">포트폴리오 영역 바로가기</a>
    <a href="#footer">푸터 영역 바로가기</a>
    </div>    

    {/* header */}  
     <header id="header" className={styles.header}>
      <div className={styles.header_inner}>
          <div className={styles.header_logo}>
              <a href="#">portfolio<em>Webdeveloper</em></a>
          </div>
          <nav id="header_nav1" className={`header_nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
              <ul>
                  <li><a href="#intro">intro</a></li>
                  <li><a href="#skill">skill</a></li>
                  <li><a href="#site">site</a></li>
                  <li><a href="#port">portfolio</a></li>
              </ul>
          </nav>
          <div 
              className={styles.header_nav_mobile} 
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button" 
                    onClick={toggleMenu}
          >
              <span></span>
          </div>
      </div>
     </header>
    </>
  )
}

export default Header
