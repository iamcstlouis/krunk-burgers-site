<template>
  <div id="app">
    <nav class="top-nav">
      <b-container>
        <div class="logo-wrapper">
          <router-link to="/" exact class="top-nav-link">
            <img
              src="./assets/krunk-burgers-logo.png"
              alt="Krunks Burgers Logo"
              class="top-nav-logo"
            />
          </router-link>
        </div>

        <!-- ***** Hamburger Toggler ***** -->
        <div class="hamburger-btn" v-on:click="toggleState()">
          <div class="hamburger-toggler">
            <div class="line-top"></div>
            <span class="menu">Menu</span>
            <div class="line-btm"></div>
          </div>
        </div>

        <!--    /////////////////////////////////////////////////////////////////////
                                    Mobile Menu
        ///////////////////////////////////////////////////////////////////////////-->

        <div id="mobile-menu" class="mobile-menu" aria-hidden="true">
          <div class="mobile-menu-links">
            <router-link to="/" exact v-on:click="closeMenu()">Home</router-link>
            <router-link to="/krunk-burgers" exact>Menu</router-link>
            <router-link to="/about" exact>About</router-link>
            <router-link to="/contact" exact>Contact</router-link>
          </div>

          <div class="socials">
            <a href="https://www.facebook.com/Krunk-Burgers-442165483212032/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com/krunkburgers/?hl=en" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </div>

          <DeliverooWidget />
        </div>

        <!-- Desktop Links -->

        <div class="desktop-links">
          <ul class="menu-links">
            <li>
              <router-link to="/" exact class="topNavBtn">Home</router-link>
            </li>
            <li>
              <router-link to="/krunk-burgers" exact class="topNavBtn">Menu</router-link>
            </li>
            <li>
              <router-link to="/about" exact class="topNavBtn">About</router-link>
            </li>
            <li>
              <router-link to="/contact" exact class="topNavBtn">Contact</router-link>
            </li>
          </ul>

          <div class="socials">
            <a href="https://www.facebook.com/Krunk-Burgers-442165483212032/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com/krunkburgers/?hl=en" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </b-container>
    </nav>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <footer>
      <b-container>
        <div class="view-our-menu">
          <router-link to="/krunk-burgers" exact class="menu-link">View Our Menu</router-link>
        </div>
        <div class="footer-nav">
          <div class="content-wrapper">
            <div class="links">
              <router-link to="/krunk-burgers" exact>Burgers</router-link>
              <span>
                <img src="./assets/icn_footer_menu_bang.svg" alt class="separator" />
              </span>
              <router-link to="/krunk-wings" exact>Wings</router-link>
              <span>
                <img src="./assets/icn_footer_menu_bang.svg" alt class="separator" />
              </span>
              <router-link to="/krunk-shakes" exact>Shakes</router-link>
              <span>
                <img src="./assets/icn_footer_menu_bang.svg" alt class="separator" />
              </span>
              <router-link to="/krunk-desserts" exact>Desserts</router-link>
            </div>
          </div>
        </div>
      </b-container>
    </footer>
  </div>
</template>

<script>
import DeliverooWidget from "@/components/DeliverooWidget";
export default {
  components: {
    DeliverooWidget
  },
  methods: {
    toggleState: () => {
      const selectElement = element => document.querySelector(element);
      const mobileMenu = document.querySelector(".mobile-menu");
      const body = document.body;
      // let menuLinks = document.querySelectorAll("nav a");
      selectElement(".hamburger-toggler").classList.toggle("open");
      selectElement(".mobile-menu").classList.toggle("open");
      selectElement(".line-top").classList.toggle("open");
      selectElement(".menu").classList.toggle("open");
      selectElement(".line-btm").classList.toggle("open");

      if (mobileMenu.classList.contains("open")) {
        body.classList.add("fixed-position");
        // console.log("Menu open");
        // for (let i = 0; i < menuLinks.length; i++) {
        //   menuLinks[i].addEventListener("click", () => {
        //     console.log(menuLinks[i]);
        //     mobileMenu.classList.remove("open");
        //   });
        // }
      } else {
        body.classList.remove("fixed-position");
        // console.log("Menu closed");
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

html {
  font-size: 62.5%;
}

body {
  font-size: 16px;
  overflow-x: hidden;

  // To prevent scrolling when mobile-menu is open
  &.fixed-position {
    position: fixed;
  }
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

.top-nav {
  width: 100vw;
  background-color: #290540;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;

    @media screen and (min-width: 1024px) {
      justify-content: flex-start;
    }

    .logo-wrapper {
      max-width: 90px;
      z-index: 1500;

      @media screen and (min-width: 1024px) {
        max-width: 120px !important;
      }

      img {
        width: 100%;
      }
    }

    .hamburger-btn {
      cursor: pointer;
      z-index: 1500;

      @media screen and (min-width: 1024px) {
        display: none;
      }

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
          transform: translateX(-5rem);
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
      position: fixed;
      height: 0;
      width: 100vw;
      top: 0;
      left: 0;
      background: rgba(41, 5, 64, 0.9098039215686274);
      opacity: 0;
      backdrop-filter: blur(2rem);
      overflow-y: scroll;
      padding-top: 10rem;
      z-index: 1000;
      visibility: hidden;
      transition: all 0.4s ease-in-out;
      &.open {
        height: 100vh;
        visibility: visible;
        opacity: 1;
      }

      @media screen and (min-width: 1024px) {
        display: none;
      }

      .mobile-menu-links {
        width: 40%;
        margin: 0 auto;
        text-align: center;

        a {
          position: relative;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 1.6rem;
          font-weight: 600;
          color: #f9f971;
          display: block;
          opacity: 1;
          transition: all 0.5s ease-in-out;

          &::after {
            content: "";
            background: rgba(255, 255, 255, 0.08);
            width: 70%;
            height: 0.1rem;
            display: block;
            margin: 3rem auto 3rem auto;
          }

          &:hover {
            color: #f9f871;
            opacity: 1;
          }

          &:active {
            color: #f9f871;
            opacity: 1;
          }
        }
      }

      .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8rem auto 5rem auto;

        a {
          text-decoration: none;
          display: inline-block;
          transition: all 0.5s ease-in-out;
          margin-right: 2.5rem;

          &:last-child {
            margin-right: 0;
          }

          i {
            color: #f9f871;
            font-size: 2rem;
          }

          &:hover {
            color: #fff;
          }
        }
      }

      .deliveroo-widget {
        margin: 0 auto;
        border-radius: 5px;
      }
    }

    .desktop-links {
      display: none;

      @media screen and (min-width: 1024px) {
        display: flex;
        width: 100%;

        .menu-links {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
          width: 100%;

          li {
            margin-left: 3rem;

            a {
              position: relative;
              font-family: "dnk";
              color: #fff;
              font-size: 1.8rem;
              font-weight: 900;
              letter-spacing: 2px;

              &.router-link-active {
                &:after {
                  position: absolute;
                  content: "";
                  width: 100%;
                  height: 2px;
                  background: #fff;
                  bottom: -0.5rem;
                  left: 0;
                }
              }
            }
          }
        }

        .socials {
          margin-left: auto;
          display: flex;
          align-items: center;

          a {
            margin-left: 1.5rem;
            width: 3.2rem;
            height: 3.2rem;
            background: #f9f871;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s;

            i {
              color: #290540;
              font-size: 2rem;
              transition: all 0.4s;
            }

            &:hover {
              background: #290540;

              i {
                color: #f9f871;
                font-size: 2.5rem;
                margin-bottom: 0.5rem;
              }
            }
          }
        }
      }

      @media screen and (min-width: 1280px) {
        .menu-links {
          li {
            margin-left: 4rem;

            a {
              font-size: 2.2rem;
            }
          }
        }
      }
    }
  }
}

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
    margin-top: 1.5rem;

    .content-wrapper {
      max-width: 700px;
      margin: 0 auto;

      .links {
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media (min-width: 768px) {
          a {
            font-size: 3rem;
          }
        }

        a {
          color: #f9f871;
        }
      }
    }
  }
}
</style>
