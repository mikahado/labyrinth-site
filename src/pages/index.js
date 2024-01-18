import React from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const HomePage = () => {
  return (
    <Layout>
    <div>
    <img src="" alt="" />
    <h1>Labyrinth Resrouce Group</h1>
    <h4>Encouraging the creation and use of Labyrinths as part of healing, inspiration, and peace</h4>
    </div>

    <PostList />

    </Layout>
  )
}

export default HomePage