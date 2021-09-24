class Github {
  constructor() {
    this.client_id = 'd1fb18799ff059eafbff'
    this.client_secret = '5f4b7b21bd3e8633da08ca89256e5578ecc059a4'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}/repos`
    )
    const profileData = await profileResponse.json()

    return {
      profile: profile,
    }
  }
}
