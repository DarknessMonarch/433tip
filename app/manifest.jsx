export default function manifest() {
    return {
      name: '433Tips',
      short_name: '433Tips',
      description: 'Get expert sports betting predictions and tips on football, soccer, basketball, and more at 433Tips. Join us for winning insights and tips to boost your betting game.',
      start_url: '/' || '/page/home',
      display: 'standalone',
      background_color: '#09122eff',
      theme_color: '#09122eff',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }