<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light">
      <b-container>
        <router-link to="/" class="navbar-brand" href="#">
          <img src="./assets/krunk-burgers-logo.png" alt="Krunks Burgers Logo" class="top-nav-logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav top-nav">
            <li class="nav-item active">
              <router-link to="/" class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/krunk-burgers" class="nav-link" href="#">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" href="#">About</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >Contact</router-link>
            </li>
          </ul>
          <ul class="navbar-nav socials">
            <li class="nav-item">
              <a class="nav-link social-facebook" href="https://facebook.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link social-instagram" href="https://instagram.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link social-twitter" href="https://twitter.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </b-container>
    </nav>-->

    <nav class="top-nav">
      <b-container>
        <div class="logo-wrapper">
          <router-link to="/" class="top-nav-link">
            <img
              src="./assets/krunk-burgers-logo.png"
              alt="Krunks Burgers Logo"
              class="top-nav-logo"
            />
          </router-link>
        </div>

        <!-- ***** Hamburger Toggler ***** -->
        <div class="hamburger-btn">
          <div class="hamburger-toggler">
            <div class="line-top"></div>
            <span class="menu">Menu</span>
            <div class="line-btm"></div>
          </div>
        </div>

        <!--    /////////////////////////////////////////////////////////////////////
                                    Mobile Menu
        ///////////////////////////////////////////////////////////////////////////-->

        <div id="mobile-menu" class="mobile-menu">
          <div class="mobile-menu-links">
            <router-link to="/">Home</router-link>
            <router-link to="/krunk-burgers">Menu</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>

          <div class="socials">
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/?hl=en">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <!-- Desktop Links -->
        <ul class="desktop-links">
          <li>
            <router-link to="/" class="topNavBtn">Home</router-link>
          </li>
          <li>
            <router-link to="/krunk-burgers" class="topNavBtn">Menu</router-link>
          </li>
          <li>
            <router-link to="/about" class="topNavBtn">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="topNavBtn">Contact</router-link>
          </li>
        </ul>
      </b-container>
    </nav>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <footer>
      <b-container>
        <div class="view-our-menu">
          <router-link to="/krunk-burgers" class="menu-link">View Our Menu</router-link>
        </div>
        <div class="footer-nav">
          <div class="content-wrapper">
            <div class="links">
              <router-link to="/krunk-burgers">Burgers</router-link>
              <span>
                <img src="./assets/icn_footer_menu_bang.svg" alt class="separator" />
              </span>
              <router-link to="/krunk-wings">Wings</router-link>
              <span>
                <img src="./assets/icn_footer_menu_bang.svg" alt class="separator" />
              </span>
              <router-link to="/krunk-shakes">Shakes</router-link>
              <span>
                <img src="./assets/icn_footer_menu_bang.svg" alt class="separator" />
              </span>
              <router-link to="/krunk-desserts">Desserts</router-link>
            </div>
          </div>
        </div>
      </b-container>
    </footer>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

html {
  font-size: 62.5%;
}

body {
  font-size: 16px;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "dnk";
  src: url(assets/fonts/dnk.ttf);
  font-style: normal;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

h1 {
  font-family: "dnk";
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: none !important;
  }
}

// ----------------------------------------------------------------
//                  Top Nav
// ----------------------------------------------------------------

// .navbar {
//   background: #290540;

//   .navbar-brand {
//     width: 8rem;

//     img {
//       width: 100%;
//     }

//     @media (min-width: 992px) {
//       max-width: 15.2rem;
//       width: 100%;
//     }
//   }

//   .top-nav {
//     flex-direction: row;
//     justify-content: space-around;

//     @media (min-width: 992px) {
//       margin-left: 30px;
//     }

//     li {
//       a {
//         color: #fff !important;
//         font-family: "dnk";

//         &:hover {
//           color: #f9f871;
//         }
//       }

//       &.active {
//         border-bottom: solid #fff 1px;

//         a {
//           color: #fff !important;
//         }
//       }

//       @media (min-width: 992px) {
//         font-size: 2.4rem;
//         margin-right: 2.3rem;
//       }
//     }
//   }

//   .socials {
//     align-items: center;
//     justify-content: center;
//     padding-top: 1.5rem;
//     padding-bottom: 1rem;
//     flex-direction: row;

//     li {
//       margin-left: 1rem;
//       padding: 0;

//       &:first-child {
//         margin-left: 0;
//       }

//       a {
//         padding: 5px;
//       }
//     }

//     @media (min-width: 992px) {
//       width: auto;
//       margin-left: auto;
//       margin-right: 0;

//       li {
//         margin-left: 1rem;

//         a {
//           padding: 5px;
//         }
//       }
//     }

//     a {
//       background: #f9f871;
//       padding: 1rem;
//       border-radius: 50%;

//       svg {
//         width: 2rem;
//         height: 2rem;

//         path {
//           fill: #290540;
//         }
//       }
//     }
//   }
// }

.top-nav {
  position: fixed;
  top: 0;
  // left: 50%;
  // transform: translateX(-50%);
  width: 100vw;
  background-color: #290540;
  z-index: 100;

  &.topNav-Active-tab {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.13rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;

    .logo-wrapper {
      max-width: 90px;

      img {
        width: 100%;
      }
    }

    .hamburger-btn {
      // padding: 1rem 5rem 1rem 2rem;
      cursor: pointer;
      z-index: 1500;

      .hamburger-toggler {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: all 0.5s ease-in-out;

        &.open {
          transform: translateX(-2rem);
        }
      }

      .line-top {
        width: 100%;
        height: 0.2rem;
        border-radius: 0.8rem;
        background: #f9f871;
        transition: all 0.5s ease-in-out;

        &.open {
          transform: rotate(45deg) translateX(16px);
          width: 70%;
        }
      }

      .menu {
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 0.25rem;
        color: #f9f871;
        text-transform: uppercase;
        display: block;
        transition: all 0.5s ease-in-out;

        &.open {
          transform: translateX(5rem);
          opacity: 0;
        }
      }

      .line-btm {
        width: 100%;
        height: 0.2rem;
        border-radius: 0.8rem;
        background: #f9f871;
        transition: all 0.5s ease-in-out;

        &.open {
          transform: rotate(-45deg) translateX(16px);
          width: 70%;
        }
      }
    }

    .mobile-menu {
      display: none;
    }

    .desktop-links {
      display: none;
    }
  }
}

.leftTopNav {
  display: flex;
  justify-content: space-between;
  flex-grow: 2;

  li {
    flex-grow: 1;
    align-self: center;

    a.topNavBtn {
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 0.13rem;
      text-transform: uppercase;
      text-decoration: none;
      color: #858585;
      cursor: pointer;

      &:visited {
        color: #858585;
      }

      &:hover {
        color: #fff;
        transition: 0.4s ease-in-out;
      }

      &:active {
        color: #fff;
        transition: 0.4s ease-in-out;
      }
    }
  }
}

/*  --------    Top Nav: Logo    --------  */

// .topNavLogoWrapper {
//   order: 1;
//   flex: 3 0 20vw;
//   text-align: center;
//   z-index: 1500;

//   .topNavlogoLink {
//     display: inline-block;

//     svg.topNavLogo {
//       fill: #676767;
//       width: 8rem;
//       height: auto;
//     }
//   }
// }

/*  --------    Top Nav: Right Side    --------  */

.rightTopNav {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  order: 2;

  li {
    align-self: center;

    a.topNavBtn {
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 0.13rem;
      text-transform: uppercase;
      text-decoration: none;
      color: #858585;
      cursor: pointer;

      &:visited {
        color: #858585;
      }

      &:hover {
        color: #fff;
        transition: 0.4s ease-in-out;
      }

      &:active {
        color: #fff;
        transition: 0.4s ease-in-out;
      }
    }
  }
}

/*  --------    Top Nav: Active Class    --------  */

// .top-nav {
//   a.topNav-Active-tab {
//     font-size: 1.4rem;
//     font-weight: 400;
//     letter-spacing: 0.13rem;
//     text-transform: uppercase;
//     text-decoration: none;
//     color: #fff;
//     cursor: pointer;
//   }
// }

// ----------------------------------------------------------------
//                  Footer
// ----------------------------------------------------------------

footer {
  background: #290540 url("./assets/bg-buildings.svg") 100% 45px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8rem 0 5rem 0;
  position: relative;

  .view-our-menu {
    a {
      font-family: "dnk";
      font-size: 4rem;
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }

      @media (min-width: 768px) {
        font-size: 7rem;
      }
    }
  }

  .footer-nav {
    .links {
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media (min-width: 768px) {
        width: 60%;
        margin: 0 auto;

        a {
          font-size: 3rem;
        }
      }

      a {
        color: #f9f871;
        // font-size: 3rem;
      }
    }
  }
}
</style>
