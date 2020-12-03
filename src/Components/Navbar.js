import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from './navbar.module.scss';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className={styles.nav} id="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass={styles.active}
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass={styles.active}
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass={styles.active}
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
