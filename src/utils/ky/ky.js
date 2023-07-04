import ky from "ky";

export default ky.create({
  prefixUrl: import.meta.env.VITE_HOST,
  hooks: {
    beforeError: [
      async error => {
        const { message } = await error.response.json()
        return message
      }
    ]
  }
})