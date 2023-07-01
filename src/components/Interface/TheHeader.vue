<script setup lang="ts">
// import moduleName from '`';
// ...

const onContact = () => {
  console.log('contact us ')
}

const isMenuActive = ref(false)

const menuList = ref()

const header = ref()

let closeMenu = () => {
}

const onClick = (e: MouseEvent) => {
  if (!header.value.contains(e.target)) {
    closeMenu()
  }
}

closeMenu = () => {
  menuList.value.style.maxHeight = ''
  document.removeEventListener('click', onClick)
  document.body.style.overflow = ''
}

const openMenu = () => {
  menuList.value.style.maxHeight = `${menuList.value.scrollHeight}px`
  document.addEventListener('click', onClick)
  document.body.style.overflow = 'hidden'
}

const onToggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
  if (menuList.value.style.maxHeight) {
    closeMenu()
  }
  else {
    openMenu()
  }
}

</script>

<template>
  <header
    ref="header"
    class="z-10 absolute w-full bg-[rgba(0,0,0,.2)] py-5 md:py-3"
  >
    <!--  // close menu not toggle -->
    <XContainer class="flex items-center">
      <a href="#" class="block h-10 w-20 ">
        <img
          class="h-full object-contain"
          src="/logo.svg"
          alt="runo logo"
        >
      </a>

      <nav class="header-menu  ml-auto" :class="{'header-menu--active': isMenuActive}">
        <div class="header-menu__btn" @click="onToggleMenu">
          <span /><span /><span />
        </div>
        <ul ref="menuList" class=" header-menu__list flex  gap-6">
          <li class="header-menu__item">
            <a href="#">Home</a>
          </li>
          <li class="header-menu__item">
            <a href="#">About</a>
          </li>
          <li class="header-menu__item">
            <a href="#">Articles
            </a>
          </li>
          <li class="header-menu__item">
            <button @click="onContact">
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </XContainer>
  </header>
</template>

<style lang="scss" scoped>

.header-menu {
  @apply font-roboto;
}
  .header-menu__btn {
    display: none;
    span {
      transition: all .3s;
    display: block;
    width: 30px;
    height: 3px;
    @apply bg-primary-light;

    &:not(:last-child) {
      margin-bottom:5px;
    }
}
  }

  .header-menu__item > * {
    display: block;
    transition: all .3s;
    position: relative;
    @apply py-2  text-primary-light block transition-all duration-300;

    &:after {
      content: "";
      @apply bg-orange;
      transition: all .3s;
      position: absolute;
      display: block;
      bottom: 6px;
      left: 50%;
      transform: translate(-50%);
      width: 0;
      height: 3px;

    }

    &:hover {
      color: white;
        &:after {
        width: 100%;
      }
    }

}

@screen sm {
  .header-menu__list {
    flex-direction: column;
    max-height: 0;   // toggle the height  in script
    overflow:hidden;
    padding: 0;
    transition: all .3s;
    align-items: center;
    position: absolute;
    left: 0;
    top: 58px;
    width: 100%;
    background: rgba(0,0,0,.2);
    align-items: start;

  }

  .header-menu__item > * {
    padding-left: 20px;
  }

  .header-menu__btn {
      display: block;
   }

  .header-menu--active   .header-menu__btn {
      span:first-child {
        transform :translateY(7px) rotate(-45deg);
      }

      span:nth-child(2) {
        // display: none;
        opacity: 0;
      }

      span:last-child {
        transform :translateY(-9px) rotate(45deg)
      }

   }

  .header-menu--active .header-menu__list {
    }
  .header-menu--active .header-menu__item > * {
      &:after {
        width:3px;
        height: 0;
        left: 0;
        top: 50%;
        transform: translateY(-50%)
      }

      &:hover {
      color: white;
        &:after {
          height: 60%;
      }
    }
   }

}

</style>
