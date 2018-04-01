module.exports = {
    name: 'Lorem Ipsum',
    initialLinks: {
      paths: [
        {
          path: '/',
          title: 'Home',
        },
        {
          path: '/about',
          title: 'About'
        },
        {
          path: '/contact',
          title: 'Contact'
        },
      ],
      socialLinks: [
        {
          path: 'https://www.twitter.com/mjrouser',
          icon: 'fa-twitter',
          name: 'Twitter',
        },
        {
          path: 'https://www.linkedin.com/in/mjrouser',
          icon: 'fa-linkedin',
          name: 'LinkedIn',
        },
        {
          path: 'https://www.github.com/mjrouser',
          icon: 'fa-github',
          name: 'Github',
        },
        {
          path: 'mailto:matthew@mjrouser.com?subject=Mjrouser.com inquiry',
          icon: 'fa-envelope',
          name: 'email',
        }
      ]
    },
    copyright: {
      owner: '© Matthew Rouser',
    },
    introText: {
      '/': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi nulla, condimentum vehicula neque ac. ',
      '/about': 'Proin a eros ut diam aliquam blandit non ut diam. Proin ut vehicula enim.',
      '/speaking': 'Praesent in pellentesque dui. Donec ultrices hendrerit sem rhoncus auctor.',
      '/contact': 'Proin urna mauris, tristique quis diam non, blandit rhoncus orci.'
    }
}
