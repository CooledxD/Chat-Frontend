export const image = async (type) => {
  try {
    const types = [
      'image/jpeg', 
      'image/jpg', 
      'image/png', 
      'image/svg+xml'
    ]

    if (!types.includes(type)) {
      throw new Error('invalid file type')
    }
  } catch (error) {
    throw new Error(error.message)
  }
}