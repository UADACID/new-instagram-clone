import { connect } from 'react-redux';

import Home from './Home.screen';

const mapStateToProps = state => ({
  stories: [
    {
      name: 'Tini',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjxa7JuJWWGgH_eVsrIqfwA_ALwPAchmqr8ms83gfSmmpv2Sl'
    },
    {
      name: 'Dana',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfOSD2C3n-q0NHYsUFTUkePk__5BwtmYgqtTqUikLWrMYZTeylg'
    },
    {
      name: 'Agus Dwi',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsng_-1PC496tTZLFdCMdBQCEpRR1d6eb4kpTOG4a9jB6lzDZ'
    },
    {
      name: 'Casanova',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkPzn-Et9yEIW8ukidYaKxjGYa0u_Y_Ad3Mc0jLh0fFHYPw1W7A'
    },
    {
      name: 'Caocao',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZpQf16L0QczNrWNMqo_y0FScCIp8YGt8OewfnH_12jskxe4p'
    },
    {
      name: 'Melki',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IcxPRpXwHWmoOdKHvm_Qwt7A53nHs_sIGGbfsPO3qDxpjnNt'
    },
    {
      name: 'Icak inding',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisdrPIukB_BS0AJKDsDZEBSo4_Fp4lgYgb_bYiG05c5QA8UwUrQ'
    },
  ],
  feeds: [
    {
      title: 'Pedagang Gundam',
      location: 'markas',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjxa7JuJWWGgH_eVsrIqfwA_ALwPAchmqr8ms83gfSmmpv2Sl',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqp1kfy0sWXm9-OrOzcbzwug16mUxMms6wYZBxRMB9QC8bM6'
    },
    {
      title: 'Orang Pinggiram',
      location: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjxa7JuJWWGgH_eVsrIqfwA_ALwPAchmqr8ms83gfSmmpv2Sl',
      uri: 'https://joypixel.id/wp-content/uploads/2018/01/game-gundam-780x439.jpg'
    },
    {
      title: 'Si Juki',
      location: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjxa7JuJWWGgH_eVsrIqfwA_ALwPAchmqr8ms83gfSmmpv2Sl',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsb9yrikD61oLbRuY0bT7glbJPC4oXPChpFeA4ChY6RQNGjONEmA'
    },
    {
      title: 'Ojek Online',
      location: 'planet mars',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjxa7JuJWWGgH_eVsrIqfwA_ALwPAchmqr8ms83gfSmmpv2Sl',
      uri: 'https://i.kinja-img.com/gawker-media/image/upload/s--FiZg4VtV--/c_scale,f_auto,fl_progressive,q_80,w_800/xg2fgfmvywllx0kj0b3h.jpg'
    },
  ]
})

export default connect(mapStateToProps)(Home);