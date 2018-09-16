export default {
  getImage () {
    return {
      id: 'faec762b-7c95-4537-84c8-a14fb8ac0638',
      publicId: '66pmlJ8XD4eTW0spVUU8tq',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/66pmlJ8XD4eTW0spVUU8tq.jpg',
      description: '#awesome',
      tags: ['awesome'],
      createdAt: new Date().toString()
    }
  },
  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },
  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },
  getUser () {
    return {
      id: 'faec762b-7c95-4537-84c8-a14fb8ac0638',
      name: 'Freddy Vega',
      username: 'freddier',
      email: 'f@platzi.test',
      password: 'pl4tzi',
      createdAt: new Date().toString()
    }
  }
}
