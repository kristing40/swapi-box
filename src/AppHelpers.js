export const randomNumberGenerator = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }


export const addKey = () => Math.round(Date.now() * Math.random())
