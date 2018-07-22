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
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmm1Y8MQeR1wIi2dAhXBN7yXZwFS24ZKHDGkJE33VQD6R5DBs'
    },
    {
      name: 'Music',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKYq5Jss1fRxEak0fiJN8kZayc3VW6QgoYS59IIYMCzxH7JCNtg'
    },
    {
      name: 'Komik',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3-G_zDVfuXDB0WBKAgF_xKuQi37SuX4z9IH0mn92R3MHO1gg'
    },
    {
      name: 'Game',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjwCSp4uzHU2e3ebUj_IrLfeD4D_nPgD6uYWCoFSE-bWw8deT'
    },
    {
      name: 'Otomotif',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXU3nXRoDLXesq_2xChzWbd1k_Pd8U5R4d7p1x96v4wl_02NsOPQ'
    },
  ]
})

export default connect(mapStateToProps)(Search);