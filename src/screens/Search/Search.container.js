import { connect } from 'react-redux';

import Search from './Search.screen';

const mapStateToProps = state => ({
  categories: [
    {
      name: 'Traveling',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nxi3wrKdCvzf_eMt2kJ79GI1JyVQ__fSxEFGqeol9bXCAPRL'
    },
    {
      name: 'Humor',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2l42_tjfhB7IoZH3KGwTdiUFmEdZl3A6M0e8qBPbbfxqWps-iw'
    },
    {
      name: 'Music',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKYq5Jss1fRxEak0fiJN8kZayc3VW6QgoYS59IIYMCzxH7JCNtg'
    },
    {
      name: 'Komik',
      uri: 'https://img.duniaku.net/2016/03/Komik-Terlaris-Bulan-Februari-thumb.jpg'
    },
    {
      name: 'Game',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLNXdb3V0K_KklBxDYemA63NqTkRRfE0PQDYi8aFNTXSwWlmuVA'
    },
    {
      name: 'Otomotif',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXU3nXRoDLXesq_2xChzWbd1k_Pd8U5R4d7p1x96v4wl_02NsOPQ'
    },
  ]
})

export default connect(mapStateToProps)(Search);