import axios from 'axios'

import { API_URL } from '../config'

export const getRandom = async () => {
  try {
    const response = await axios.get(`${API_URL}/random.php`)
    return response.data.meals[0]
  } catch (error) {
    console.error(error)
  }
}

const getById = async id => {
  try {
    const response = await axios.get(`${API_URL}/lookup.php?i=${id}`)
    return response.data.meals[0]
  } catch (error) {
    console.error(error)
  }
}

const searchByName = async name => {
  try {
    const response = await axios.get(`${API_URL}/search.php?s=${name}`)
    return response.data.meals || []
  } catch (error) {
    console.error(error)
  }
}

export const apiService = {
  getRandom,
  getById,
  searchByName
}
