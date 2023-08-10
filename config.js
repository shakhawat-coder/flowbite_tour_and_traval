tailwind.config = {
    theme: {
      extend: {
        colors: {
            navbg:'rgba(0,0,0,.4)',
            phnnavbg:'rgba(0,0,0,.8)',
            bnnercolor:'rgba(67,142,222,.5)',
            graytext:'#5f5f5f'
        },
        maxWidth: {
            'container':"1170px",
          },
          backgroundImage: {
            'bannerbg': "url('./images/banner.jpg')",
            'findtourbg': "url('./images/findtourbg.jpg')",
            'dealbg': "url('./images/dealbg.jpg')",
            'tourbg': "url('./images/tourbg.jpg')",
          },
          fontFamily: {
            nunito: "'Nunito', sans-serif;",
            opensans: "'Open Sans', sans-serif;",
          },
      }
    }
  }