import axios from 'axios'

const API_URL = 'http://localhost:8000/api/users'

// Get user goals
const getMembers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const goalService = {
  getMembers
}

export default goalService